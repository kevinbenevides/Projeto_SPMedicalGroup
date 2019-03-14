using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Projeto.SPMedicalGroup.WebApi.Domains
{
    public partial class Consultas
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Informe um Prontuário")]
        public int IdProntuario { get; set; }

        [Required(ErrorMessage ="Informe um Médico")]
        public int IdMedico { get; set; }

        [Required(ErrorMessage ="Informe uma Data e uma Hora")]
        [DataType(DataType.DateTime, ErrorMessage ="Data inválida")]
        public DateTime DataHora { get; set; }

        public string Descricao { get; set; }
        public string Status { get; set; }

        public Medicos IdMedicoNavigation { get; set; }
        public Prontuarios IdProntuarioNavigation { get; set; }
    }
}
