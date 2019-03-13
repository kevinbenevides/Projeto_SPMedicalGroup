using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        [HttpGet("{IdMedico}")]
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


        [HttpGet("prontuario/{IdProntuario}")]
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