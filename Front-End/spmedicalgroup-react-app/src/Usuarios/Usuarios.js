import React, { Component } from 'react'
import Axios from 'axios'
import apiService from '../services/apiService'
import { Link } from 'react-router-dom'
import "../assets/css/navbar.css"
import logo from '../assets/img/icon-login.png'
import './Usuarios.css'

class Usuarios extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            senha: "",
            idtipoUsuario: "",
            listaidtipoUsuario: [],
            listaUsuarios: []
        }

        this.atualizaEstadoEmail = this.atualizaEstadoEmail.bind(this)
        this.atualizaEstadoSenha = this.atualizaEstadoSenha.bind(this)

        this.cadastrarUsuario = this.cadastrarUsuario.bind(this)
    }

    componentDidMount() {

        apiService

            .call("TipoUsuarios")
            .getAll()
            .then(data => {
                this.setState({ listaidtipoUsuario: data.data });
            });

        apiService
            .call("Usuarios")
            .getAll()
            .then(data => {
                this.setState({ listaUsuarios: data.data });
            })
    }

    atualizaEstadoEmail(event) {
        this.setState({ email: event.target.value })
    }

    atualizaEstadoSenha(event) {
        this.setState({ senha: event.target.value })
    }

    atualizaEstadoIdtipoUsuario(event) {
        this.setState({ idtipoUsuario: event.target.value })
    }

    cadastrarUsuario(event) {
        event.preventDefault();

        var bearer = 'Bearer ' + localStorage.getItem("usuario-Spmedgroup");

        Axios.post("https://projetospmedicalgroupwebapi.azurewebsites.net/api/usuarios", {
            Email: this.state.email,
            Senha: this.state.senha,
            IdTipoUsuario: this.state.idtipoUsuario
        }, { headers: { "Authorization": bearer } })

            .then(data => {
                if (data.status === 200) {
                    console.log(data);
                }
            })
            .catch(erro => { console.log(erro) })

    }

    render() {
        return (
            <div>
                <header className="header">
                    <div className=" flexbox wrapper">
                        <div className="header__image">
                            <img src={logo} alt="Logo do SpMedicalGroup!" />
                        </div>
                        <nav className="header__navbar">
                            <ul className="header__list">
                                <li className="header__list-item" style={{ borderLeft: "none" }}><Link to="/homeadmin">Home</Link></li>
                                <li className="header__list-item"><Link to="/consultasadmin">Consultas</Link></li>
                                <li className="header__list-item"><Link to="/usuarios">Usuarios</Link></li>
                                <li className="header__list-item"><Link to="/medicos">Medicos</Link></li>
                                <li className="header__list-item"><Link to="/login" style={{ color: "red", textDecoration: "none" }}>Deslogar</Link></li>
                            </ul>
                        </nav>
                    </div>

                </header>
                <main className="main__usuarios">
                    <div className="main-div__usuarios">
                        <div className="main-div__sections">
                            <section class="cadastro_usuarios" style={{ width: "24%" }}>
                                <div className="container">
                                    <h2>Cadastro de Usuarios</h2>
                                    <form className="section__form" onSubmit={this.cadastrarUsuario}>
                                        <p style={{ marginRight: "6%" }}>Insira um Email:</p>
                                        <input type="text" value={this.state.email} onChange={this.atualizaEstadoEmail} />
                                        <p>Insira uma Senha:</p>
                                        <input type="password" value={this.state.senha} onChange={this.atualizaEstadoSenha} />
                                        <p style={{ marginRight: "5%" }}>Selecione um tipo de usuario:</p>
                                        <select value={this.state.idtipoUsuario} onChange={this.atualizaEstadoIdtipoUsuario.bind(this)}>
                                            <option>Selecione</option>
                                            {this.state.listaidtipoUsuario.map((element) => {
                                                return <option key={element.id} value={element.id}>
                                                    {element.nome}
                                                </option>
                                            })}
                                        </select>
                                        <br />
                                        <button>Enviar</button>
                                    </form>
                                </div>
                            </section>
                            <section className="lista_usuarios">
                                <div>
                                    <h2>Usuarios</h2>
                                    <table className="table__usuarios">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Email</th>
                                                <th>Senha</th>
                                                <th>TipoUsuario</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.listaUsuarios.map(function (usuario) {
                                                    return (
                                                        <tr key={usuario.id}>
                                                            <td>{usuario.id}</td>
                                                            <td>{usuario.email}</td>
                                                            <td>{usuario.senha}</td>
                                                            <td>{usuario.idTipoUsuario}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                        </div>
                    </div>

                </main>
            </div>
        )
    }
}

export default Usuarios