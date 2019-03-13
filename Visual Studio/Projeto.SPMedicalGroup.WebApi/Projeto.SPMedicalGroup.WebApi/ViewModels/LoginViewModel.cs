using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto.SPMedicalGroup.WebApi.ViewModels
{
    public class LoginViewModel
    {
        [Required(ErrorMessage ="Insira um Email")]
        public string Email { get; set; }
        
        [Required(ErrorMessage = "Insira uma Senha")]
        public string Senha { get; set; }
    }
}
