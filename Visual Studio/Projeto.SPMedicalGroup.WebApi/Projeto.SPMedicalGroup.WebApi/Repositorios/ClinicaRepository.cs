using Projeto.SPMedicalGroup.WebApi.Domains;
using Projeto.SPMedicalGroup.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto.SPMedicalGroup.WebApi.Repositorios
{
    public class ClinicaRepository : IClinicaRepository
    {
        public void Cadastrar(Clinicas clinica)
        {
            using (SPMedicalGroupContext ctx = new SPMedicalGroupContext())
            {
                ctx.Clinicas.Add(clinica);
            }
        }
    }
}
