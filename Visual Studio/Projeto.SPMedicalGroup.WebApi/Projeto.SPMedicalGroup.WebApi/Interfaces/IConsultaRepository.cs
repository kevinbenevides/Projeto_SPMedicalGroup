using Projeto.SPMedicalGroup.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto.SPMedicalGroup.WebApi.Interfaces
{
    interface IConsultaRepository
    {
        void Agendar(Consultas consulta);

        void Atualizar(int id, Consultas consulta);

        List<Consultas> BuscarPorIdMedico(int idmedico);

        List<Consultas> BuscarPorIdProntuario(int idprontuario);
    }
}
