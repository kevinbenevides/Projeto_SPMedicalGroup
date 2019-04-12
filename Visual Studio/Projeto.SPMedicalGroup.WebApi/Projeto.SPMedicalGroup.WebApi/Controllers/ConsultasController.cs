using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Projeto.SPMedicalGroup.WebApi.Domains;
using Projeto.SPMedicalGroup.WebApi.Interfaces;
using Projeto.SPMedicalGroup.WebApi.Repositorios;

namespace Projeto.SPMedicalGroup.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultasController : ControllerBase
    {
        private IConsultaRepository ConsultaRepository { get; set; }

        public ConsultasController()
        {
            ConsultaRepository = new ConsultaRepository();
        }

        [Authorize (Roles= "Administrador")]

        [HttpPost]
        public IActionResult Cadastrar(Consultas consulta)
        {
            try
            {
                ConsultaRepository.Agendar(consulta);
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }
        
        [Authorize (Roles="Administrador, Médico")]
        [HttpPut("{Id}")]
        public IActionResult Atualizar(int id, Consultas consulta)
        {
            try
            {
                if (id == null)
                {
                    BadRequest();
                }
                    ConsultaRepository.Atualizar(id, consulta);
                    return Ok();

            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }
        
        //[Authorize (Roles ="Administrador")]
        //[HttpGet]
        //public IActionResult Listar()
        //{
        //    try
        //    {
        //        return Ok(ConsultaRepository.Listar());
        //    }
        //    catch (Exception ex)
        //    {

        //        return BadRequest();
        //    }
        //}


        [Authorize (Roles ="Administrador")]
        [HttpGet("ConsultasMedico/{IdMedico}")]
        public IActionResult BuscarPorIdMedico(int idmedico)
        {
            try
            {
                
                // contexto
                return Ok(ConsultaRepository.BuscarPorIdMedico(idmedico));
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }

        //[Authorize(Roles = "Médico")]
        //[HttpGet("ConsultasMedico")]
        //public IActionResult BuscarConsultasMedico()
        //{
        //    try
        //    {
        //        int idmedico = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
        //        return Ok(ConsultaRepository.BuscarConsultasMedico(idmedico));
        //    }
        //    catch (Exception ex)
        //    {

        //        return BadRequest();
        //    }
        //}


        [Authorize(Roles = "Administrador")]
        [HttpGet("ConsultasProntuario/{IdProntuario}")]
        public IActionResult BuscarPorIdProntuario(int idprontuario)
        {
            try
            {     
                return Ok(ConsultaRepository.BuscarPorIdProntuario(idprontuario));
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        //[Authorize]
        //[HttpGet("ConsultasProntuario")]
        //public IActionResult BuscarConsultasProntuario()
        //{
        //    try
        //    {
        //        int idprontuario = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
        //        return Ok(ConsultaRepository.BuscarConsultasProntuario(idprontuario));
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest();
        //    }
        //}

        [Authorize]
        [HttpGet]
        public IActionResult ListarConsultas()
        {
            try
            {
                string usuariologado =HttpContext.User.Claims.First(c => c.Type == "Role").Value;

                
                if (usuariologado == "Administrador")
                {
                    return Ok(ConsultaRepository.Listar());

                }else if (usuariologado == "Médico")
                {
                    int idmedico = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                    return Ok(ConsultaRepository.BuscarConsultasMedico(idmedico));

                }else if(usuariologado == "Paciente")
                {
                    int idprontuario = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                    return Ok(ConsultaRepository.BuscarConsultasProntuario(idprontuario));
                }
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }
    }
}