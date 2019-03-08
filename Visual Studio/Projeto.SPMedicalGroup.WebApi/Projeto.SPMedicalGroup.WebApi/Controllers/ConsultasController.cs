using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Projeto.SPMedicalGroup.WebApi.Domains;

namespace Projeto.SPMedicalGroup.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultasController : ControllerBase
    {
        [HttpPost]
        public IActionResult Cadastrar(Consultas consulta)
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }
    }
}