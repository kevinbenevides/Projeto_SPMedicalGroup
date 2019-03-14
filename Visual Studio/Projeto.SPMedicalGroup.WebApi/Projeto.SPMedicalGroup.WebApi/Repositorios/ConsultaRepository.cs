using Projeto.SPMedicalGroup.WebApi.Domains;
using Projeto.SPMedicalGroup.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto.SPMedicalGroup.WebApi.Repositorios
{
    public class ConsultaRepository : IConsultaRepository
    {
        public void Agendar(Consultas consulta)
        {
            using (SPMedicalGroupContext ctx = new SPMedicalGroupContext())
            {
                Consultas DadosAgendados = new Consultas();

                DadosAgendados.IdProntuario = consulta.IdProntuario;
                DadosAgendados.DataHora = consulta.DataHora;
                DadosAgendados.IdMedico = consulta.IdMedico;

                if(DadosAgendados.Status == null)
                {
                    DadosAgendados.Status = "Agendado";
                }

                ctx.Consultas.Add(DadosAgendados);
                ctx.SaveChanges();

            }

        }

        public void Atualizar(int id, Consultas consulta)
        {
            using (SPMedicalGroupContext ctx = new SPMedicalGroupContext())
            {
                Consultas AtualizacaoConsulta = ctx.Consultas.Find(id);

                AtualizacaoConsulta.IdProntuario = consulta.IdProntuario;
                AtualizacaoConsulta.IdMedico = consulta.IdMedico;
                AtualizacaoConsulta.DataHora = consulta.DataHora;
                AtualizacaoConsulta.Descricao = consulta.Descricao;
                AtualizacaoConsulta.Status = consulta.Status;

                ctx.Consultas.Update(consulta);
                ctx.SaveChanges();
            }
        }

        public List<Consultas> BuscarPorIdMedico(int idmedico)
        {
            using (SPMedicalGroupContext ctx = new SPMedicalGroupContext())
            {

                return ctx.Consultas.Where(i => i.IdMedico == idmedico).ToList();
         
            }
        }

        public List<Consultas> BuscarPorIdProntuario(int idprontuario)
        {
            using (SPMedicalGroupContext ctx = new SPMedicalGroupContext())
            {
                return ctx.Consultas.Where(i => i.IdProntuario == idprontuario).ToList();
            }
        }

        public List<Consultas> Listar()
        {
            using (SPMedicalGroupContext ctx = new SPMedicalGroupContext())
            {
                return ctx.Consultas.ToList();
            }
        }
    }
}
