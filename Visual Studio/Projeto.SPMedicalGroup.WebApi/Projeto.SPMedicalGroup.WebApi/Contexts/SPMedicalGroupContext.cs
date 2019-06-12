using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Projeto.SPMedicalGroup.WebApi.Domains
{
    public partial class SPMedicalGroupContext : DbContext
    {
        public SPMedicalGroupContext()
        {
        }

        public SPMedicalGroupContext(DbContextOptions<SPMedicalGroupContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AreasAtuacoes> AreasAtuacoes { get; set; }
        public virtual DbSet<Clinicas> Clinicas { get; set; }
        public virtual DbSet<Consultas> Consultas { get; set; }
        public virtual DbSet<Medicos> Medicos { get; set; }
        public virtual DbSet<Prontuarios> Prontuarios { get; set; }
        public virtual DbSet<TipoUsuarios> TipoUsuarios { get; set; }
        public virtual DbSet<Usuarios> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                 //optionsBuilder.UseSqlServer("Data Source=.\\SQLEXPRESS; initial catalog = SP_MEDICAL_GROUP;user id = sa; pwd = 132");
                 //optionsBuilder.UseSqlServer("Server=DESKTOP-7ULBNBP\\SQLEXPRESS; Database=SP_MEDICAL_GROUP;Integrated Security=True;");
                 optionsBuilder.UseSqlServer("Server = tcp:projetospmedicalgroupwebapidbserver.database.windows.net,1433; Initial Catalog = ProjetoSPMedicalGroupWebApi_db; Persist Security Info = False; User ID =  Kevin_Benevides ; Password = Xitara25090406; MultipleActiveResultSets = False; Encrypt = True; TrustServerCertificate = False; Connection Timeout = 30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AreasAtuacoes>(entity =>
            {
                entity.ToTable("AREAS_ATUACOES");

                entity.HasIndex(e => e.Nome)
                    .HasName("UQ__AREAS_AT__E2AB1FF4ED690F1D")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasColumnName("NOME")
                    .HasMaxLength(250)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Clinicas>(entity =>
            {
                entity.ToTable("CLINICAS");

                entity.HasIndex(e => e.Cnpj)
                    .HasName("UQ__CLINICAS__AA57D6B4168319C7")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Cep)
                    .IsRequired()
                    .HasColumnName("CEP")
                    .HasMaxLength(8)
                    .IsUnicode(false);

                entity.Property(e => e.Cnpj)
                    .IsRequired()
                    .HasColumnName("CNPJ")
                    .HasMaxLength(14)
                    .IsUnicode(false);

                entity.Property(e => e.Endereco)
                    .IsRequired()
                    .HasColumnName("ENDERECO")
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasColumnName("NOME")
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.RazaoSocial)
                    .IsRequired()
                    .HasColumnName("RAZAO_SOCIAL")
                    .HasMaxLength(250)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Consultas>(entity =>
            {
                entity.ToTable("CONSULTAS");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.DataHora)
                    .HasColumnName("DATA_HORA")
                    .HasColumnType("datetime");

                entity.Property(e => e.Descricao)
                    .HasColumnName("DESCRICAO")
                    .HasColumnType("text");

                entity.Property(e => e.IdMedico).HasColumnName("ID_MEDICO");

                entity.Property(e => e.IdProntuario).HasColumnName("ID_PRONTUARIO");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasColumnName("STATUS")
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdMedicoNavigation)
                    .WithMany(p => p.Consultas)
                    .HasForeignKey(d => d.IdMedico)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CONSULTAS__ID_ME__0A9D95DB");

                entity.HasOne(d => d.IdProntuarioNavigation)
                    .WithMany(p => p.Consultas)
                    .HasForeignKey(d => d.IdProntuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CONSULTAS__ID_PR__09A971A2");
            });

            modelBuilder.Entity<Medicos>(entity =>
            {
                entity.ToTable("MEDICOS");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Crm)
                    .IsRequired()
                    .HasColumnName("CRM")
                    .HasMaxLength(13)
                    .IsUnicode(false);

                entity.Property(e => e.IdAreaAtuacao).HasColumnName("ID_AREA_ATUACAO");

                entity.Property(e => e.IdClinica).HasColumnName("ID_CLINICA");

                entity.Property(e => e.IdUsuario).HasColumnName("ID_USUARIO");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasColumnName("NOME")
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdAreaAtuacaoNavigation)
                    .WithMany(p => p.Medicos)
                    .HasForeignKey(d => d.IdAreaAtuacao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__MEDICOS__ID_AREA__05D8E0BE");

                entity.HasOne(d => d.IdClinicaNavigation)
                    .WithMany(p => p.Medicos)
                    .HasForeignKey(d => d.IdClinica)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__MEDICOS__ID_CLIN__06CD04F7");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Medicos)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__MEDICOS__ID_USUA__04E4BC85");
            });

            modelBuilder.Entity<Prontuarios>(entity =>
            {
                entity.ToTable("PRONTUARIOS");

                entity.HasIndex(e => e.Cpf)
                    .HasName("UQ__PRONTUAR__C1F89731BCEC2ED8")
                    .IsUnique();

                entity.HasIndex(e => e.Rg)
                    .HasName("UQ__PRONTUAR__321537C88F585F10")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Cpf)
                    .IsRequired()
                    .HasColumnName("CPF")
                    .HasMaxLength(11)
                    .IsUnicode(false);

                entity.Property(e => e.DataNascimento)
                    .HasColumnName("DATA_NASCIMENTO")
                    .HasColumnType("date");

                entity.Property(e => e.Endereco)
                    .IsRequired()
                    .HasColumnName("ENDERECO")
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.IdUsuario).HasColumnName("ID_USUARIO");

                entity.Property(e => e.Rg)
                    .IsRequired()
                    .HasColumnName("RG")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Telefone)
                    .HasColumnName("TELEFONE")
                    .HasMaxLength(11)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Prontuarios)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__PRONTUARI__ID_US__571DF1D5");
            });

            modelBuilder.Entity<TipoUsuarios>(entity =>
            {
                entity.ToTable("TIPO_USUARIOS");

                entity.HasIndex(e => e.Nome)
                    .HasName("UQ__TIPO_USU__E2AB1FF41C657E00")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasColumnName("NOME")
                    .HasMaxLength(250)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuarios>(entity =>
            {
                entity.ToTable("USUARIOS");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("EMAIL")
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.IdTipoUsuario).HasColumnName("ID_TIPO_USUARIO");

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasColumnName("SENHA")
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdTipoUsuarioNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdTipoUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__USUARIOS__ID_TIP__52593CB8");
            });
        }
    }
}
