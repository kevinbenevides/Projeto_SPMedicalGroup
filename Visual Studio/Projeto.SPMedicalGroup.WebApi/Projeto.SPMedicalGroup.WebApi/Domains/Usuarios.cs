using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Projeto.SPMedicalGroup.WebApi.Domains
{
    public partial class Usuarios
    {
        public Usuarios()
        {
            Medicos = new HashSet<Medicos>();
            Prontuarios = new HashSet<Prontuarios>();
        }

        public int Id { get; set; }

        [Required(ErrorMessage ="Informe um Email")]
        [DataType(DataType.EmailAddress, ErrorMessage ="Email inválido")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Informe uma Senha")]
        [StringLength(6, ErrorMessage ="Senha Inválida")]
        public string Senha { get; set; }

        [Required(ErrorMessage ="Informe um Tipo de Usuário")]
        public int IdTipoUsuario { get; set; }

        public TipoUsuarios IdTipoUsuarioNavigation { get; set; }
        public ICollection<Medicos> Medicos { get; set; }
        public ICollection<Prontuarios> Prontuarios { get; set; }
    }
}
