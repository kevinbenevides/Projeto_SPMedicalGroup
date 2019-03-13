using Projeto.SPMedicalGroup.WebApi.Domains;
using Projeto.SPMedicalGroup.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto.SPMedicalGroup.WebApi.Repositorios
{
    public class MedicoRepository : IMedicoRepository
    {
        public List<Medicos> Listar()
        {
            using (SPMedicalGroupContext ctx = new SPMedicalGroupContext())
            {
                return ctx.Medicos.ToList();
            }
        }
    }
}
