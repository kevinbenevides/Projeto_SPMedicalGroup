using System;
using System.Collections.Generic;

namespace Projeto.SPMedicalGroup.WebApi.Domains
{
    public partial class AreasAtuacoes
    {
        public AreasAtuacoes()
        {
            Medicos = new HashSet<Medicos>();
        }

        public int Id { get; set; }
        public string Nome { get; set; }

        public ICollection<Medicos> Medicos { get; set; }
    }
}
