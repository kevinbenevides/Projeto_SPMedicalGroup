using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Projeto.SPMedicalGroup.WebApi.Domains
{
    public partial class Medicos
    {
        public Medicos()
        {
            Consultas = new HashSet<Consultas>();
        }

        public int Id { get; set; }

        [Required(ErrorMessage ="Informe um Nome")]
        public string Nome { get; set; }

        [Required(ErrorMessage ="Informe um Crm")]
        [StringLength(5, ErrorMessage ="CRM Inválido")]
        public string Crm { get; set; }

        [Required(ErrorMessage ="Informe um Usuario")]
        public int IdUsuario { get; set; }

        [Required(ErrorMessage ="Informe uma Área de atuação")]
        public int IdAreaAtuacao { get; set; }

        [Required(ErrorMessage ="Informe uma Clínica")]
        public int IdClinica { get; set; }

        public AreasAtuacoes IdAreaAtuacaoNavigation { get; set; }
        public Clinicas IdClinicaNavigation { get; set; }
        public Usuarios IdUsuarioNavigation { get; set; }
        public ICollection<Consultas> Consultas { get; set; }
    }
}
