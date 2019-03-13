using Projeto.SPMedicalGroup.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto.SPMedicalGroup.WebApi.Interfaces
{
    interface IMedicoRepository
    {
        List<Medicos> Listar();
    }
}
