using Projeto.SPMedicalGroup.WebApi.Domains;
using Projeto.SPMedicalGroup.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto.SPMedicalGroup.WebApi.Repositorios
{
    public class UsuarioRepository : IUsuarioRepository
    {
        public void Cadastrar(Usuarios usuario)
        {
            using (SPMedicalGroupContext ctx = new SPMedicalGroupContext())
            {
                ctx.Usuarios.Add(usuario);
            }
        }

        public List<Usuarios> Listar()
        {
            using (SPMedicalGroupContext ctx = new SPMedicalGroupContext())
            {
                return ctx.Usuarios.ToList();
            }
        }

        public List<Medicos> ListarMedicos()
        {
            using (SPMedicalGroupContext ctx = new SPMedicalGroupContext())
            {
               return ctx.Medicos.ToList();
            }
        }
    }
}
