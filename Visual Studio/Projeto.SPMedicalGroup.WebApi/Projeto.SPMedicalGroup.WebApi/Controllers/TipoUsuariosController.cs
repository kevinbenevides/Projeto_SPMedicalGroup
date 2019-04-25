using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Projeto.SPMedicalGroup.WebApi.Interfaces;
using Projeto.SPMedicalGroup.WebApi.Repositorios;

namespace Projeto.SPMedicalGroup.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class TipoUsuariosController : ControllerBase
    {
        private ITipoUsuariosRepository TipoUsuarioRepository { get; set; }

        public TipoUsuariosController()
        {
            TipoUsuarioRepository = new TipoUsuarioRepository();
        }

        //[Authorize(Roles ="Administrador")]
        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                return Ok(TipoUsuarioRepository.Listar());
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }
    }
}