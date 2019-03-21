--Script de Inser��o de dados

--Definindo Usu�rop para SP_MEDICAL_GROUP
USE SP_MEDICAL_GROUP

INSERT INTO TIPO_USUARIOS
VALUES ('Administrador')
	  ,('M�dico')
	  ,('Paciente')

INSERT INTO USUARIOS
VALUES ('ricardo.lemos@spmedicalgroup.com.br','132456',2)
	  ,('roberto.possarles@spmedicalgroup.com.br','123456',2)
	  ,('helena.souza@spmedicalgroup.com.br','123456',2)
	  ,('ligia@gmail.com','4321453',3)
	  ,('alexandre@gmail.com','123123',3)
	  ,('fernando@gmail.com','123132',3)
	  ,('henrique@gmail.com','143214',3)
	  ,('joao@hotmail.com','432143',3)
	  ,('bruno@gmail.com','987626',3)
	  ,('mariana@outlook.com','145678',3)
	  ,('kevinbenevides@gmail.com','200210', 1)
	  
INSERT INTO AREAS_ATUACOES
VALUES ('Acupuntura')
	  ,('Anestesiologia')
	  ,('Angiologia')
	  ,('Cardiologia')
	  ,('Cirurgia Cardiovascular')
	  ,('Cirurgia de M�o')
	  ,('Cirurgia Aparelho Digestivo')
	  ,('Cirurgia Geral')
	  ,('Cirurgia Pedi�trica')
	  ,('Cirurgia Pl�stica')
	  ,('Cirurgia Tor�cica')
	  ,('Cirurgia Vascular')
	  ,('Dermatologia')
	  ,('Radioterapia')
	  ,('Urologia')
	  ,('Pediatria')
	  ,('Psiquiatria')

INSERT INTO CLINICAS
VALUES ('Clinica Possarle', 'Av. Bar�o Limeira, 532, S�o Paulo, SP', '86400902000130','04022000', 'SP Medical Group')

INSERT INTO MEDICOS 
VALUES ('Ricardo Lemos', '54356-SP',1,2,1)
	  ,('Roberto Possarle', '53452-SP',2,17,1)
	  ,('Helena Strada', '65463-SP',3,16,1)

INSERT INTO PRONTUARIOS
VALUES (4,'435225435','94839859000', '1134567654', 'Rua Estado de Israel 240,�S�o Paulo, Estado de S�o Paulo, 04022-000', '13/10/1983')
	  ,(5,'326543457','73556944057', '11987656543','Av. Paulista, 1578 - Bela Vista, S�o Paulo - SP, 01310-200','23/07/2001')
	  ,(6,'546365253','16839338002', '11972084453','Av. Ibirapuera - Indian�polis, 2927,  S�o Paulo - SP, 04029-200','10/10/1978')
	  ,(7,'543663625','14332654765', '1134566543','R. Vit�ria, 120 - Vila Sao Jorge, Barueri - SP, 06402-030','13/10/1985')
	  ,(8,'325444441','91305348010', '1176566377','R. Ver. Geraldo de Camargo, 66 - Santa Luzia, Ribeir�o Pires - SP, 09405-380','27/08/1975')
	  ,(9,'545662667','79799299004', '11954368769','Alameda dos Arapan�s, 945 - Indian�polis, S�o Paulo - SP, 04524-001','21/03/1972')
	  ,(10,'545662668','13771913039','','R Sao Antonio, 232 - Vila Universal, Barueri - SP, 06407-140','05/03/2018')

INSERT INTO CONSULTAS
VALUES (7, 3, '20/01/2019 15:00:00','Consulta', 'Realizada')
	  ,(2, 2, '2018/01/06 10:00:00','Consulta', 'Cancelada')
	  ,(3, 2, '2019/02/07 11:00:00','Consulta', 'Realizada')
	  ,(2, 2, '2018/02/06 10:00:00','Consulta', 'Realizada')
	  ,(4, 1, '2019/02/07 11:00:00','Consulta', 'Cancelada')
	  ,(7, 3, '2019/02/08 15:00:00','Consulta', 'Agendada')
	  ,(4, 1, '2019/02/09 11:00:00','Consulta', 'Agendada')

-------------------------------------------------------------------

--Valida��o utilizando as procedures

--Valida��o de Usu�rio
EXEC USUARIO_VALIDACAO
 'ricardo.lemos@spmedicalgroup.com','12345',2

--Valida��o de CPF
EXEC CPF_VALIDACAO
'39235256801'


SELECT * FROM PRONTUARIOS

select * from MEDICOS

select * from USUARIOS

select * from CONSULTAS