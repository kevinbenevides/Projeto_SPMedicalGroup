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
        public Usuarios BuscarporEmailSenha(string email, string senha)
        {
            using (SPMedicalGroupContext ctx = new SPMedicalGroupContext())
            {
                return ctx.Usuarios.ToList().Find(i => i.Email == email && i.Senha == senha);
            }
        }

        public void Cadastrar(Usuarios usuario)
        {
            using (SPMedicalGroupContext ctx = new SPMedicalGroupContext())
            {
                ctx.Usuarios.Add(usuario);
                ctx.SaveChanges();
            }
        }

        public List<Usuarios> Listar()
        {
            using (SPMedicalGroupContext ctx = new SPMedicalGroupContext())
            {
                return ctx.Usuarios.ToList();
            }
        }

        

        //public List<Usuarios> ListarMedicos()
        //{
        //    Usuarios usuario = new Usuarios();
        //    using (SPMedicalGroupContext ctx = new SPMedicalGroupContext())
        //    {
        //        // só a lista de médicos
        //        // pq? para cadastrar uma consulta, é necessário que eu saiba qual médico que fará a consulta e qual paciente
        //        Usuarios medicos = ctx.Usuarios.Find(usuario.IdTipoUsuario == 2);

        //        medicos.Email = usuario.Email;
        //        medicos.IdTipoUsuario = usuario.IdTipoUsuario;
        //        medicos.Medicos = usuario.Medicos;
        //        medicos.Prontuarios = usuario.Prontuarios;

        //        return ctx.Usuarios.ToList();
        //    }
        //}
    }
}
