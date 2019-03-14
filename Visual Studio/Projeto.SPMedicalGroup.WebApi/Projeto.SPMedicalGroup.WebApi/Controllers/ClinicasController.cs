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
    public class ClinicasController : ControllerBase
    {
        private IClinicaRepository ClinicaRepository { get; set; }

        public ClinicasController()
        {
            ClinicaRepository = new ClinicaRepository();
        }
        [Authorize(Roles="1")]
        [HttpPost]
        public IActionResult Cadastrar(Clinicas clinica)
        {
            try
            {
                ClinicaRepository.Cadastrar(clinica);
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }
    }
}