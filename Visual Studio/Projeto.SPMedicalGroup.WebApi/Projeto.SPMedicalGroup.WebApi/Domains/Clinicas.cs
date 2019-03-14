using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Projeto.SPMedicalGroup.WebApi.Domains
{
    public partial class Clinicas
    {
        public Clinicas()
        {
            Medicos = new HashSet<Medicos>();
        }

        public int Id { get; set; }

        [Required(ErrorMessage ="Informe um nome")]
        public string Nome { get; set; }

        [Required(ErrorMessage ="Informe um Endereco")]
        public string Endereco { get; set; }

        [StringLength(12)]
        [Required(ErrorMessage ="Informe um CNPJ")]
        public string Cnpj { get; set; }

        [Required(ErrorMessage ="Informe um CEP")]
        [StringLength (8)]
        public string Cep { get; set; }

        [Required(ErrorMessage ="Informe uma Razão Social")]
        public string RazaoSocial { get; set; }

        public ICollection<Medicos> Medicos { get; set; }
    }
}
