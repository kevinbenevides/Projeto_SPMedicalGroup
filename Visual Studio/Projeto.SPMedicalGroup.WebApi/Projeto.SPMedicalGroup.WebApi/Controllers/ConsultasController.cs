using System;
using System.Collections.Generic;
using System.Linq;
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

        [Authorize (Roles= "1")]

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
        
        [Authorize (Roles="1,2")]
        [HttpPut("{Id}")]
        public IActionResult Atualizar(int id, Consultas consulta)
        {
            try
            {
                ConsultaRepository.Atualizar(id, consulta);
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }
        
        [Authorize (Roles ="1")]
        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                return Ok(ConsultaRepository.Listar());
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }


        [Authorize (Roles ="1,2")]
        [HttpGet("ConsultasMedico/{IdMedico}")]
        public IActionResult BuscarPorIdMedico(int idmedico)
        {
            try
            {
                return Ok(ConsultaRepository.BuscarPorIdMedico(idmedico));
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }


        [Authorize]
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
    }
}