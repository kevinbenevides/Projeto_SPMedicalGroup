import React, { Component } from 'react'
import apiService from '../services/apiService'
import { Link } from 'react-router-dom'
import "../assets/css/navbar.css"
import logo from '../assets/img/icon-login.png'
import './Medicos.css'

class Medicos extends Component {
    constructor() {
        super()

        this.state = {
            lista: []
        }

    }

    componentDidMount() {
        apiService

            .call("medicos")
            .getAll()
            .then(data => {
                this.setState({ lista: data.data });
            });
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
                <main className="main__medicos">
                    <div className="main-div__medicos">
                        <div className="main-div__sections">
                            <section className="lista_medicos">
                                <div>
                                    <h2>Médicos</h2>
                                    <table className="table__medicos">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Nome</th>
                                                <th>CRM</th>
                                                <th>Id Usuario</th>
                                                <th>Id Area de Atuação</th>
                                                <th>Id Clinica</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                this.state.lista.map(function (medico) {
                                                    return (
                                                        <tr key={medico.id}>
                                                            <td>{medico.id}</td>
                                                            <td>{medico.nome}</td>
                                                            <td>{medico.crm}</td>
                                                            <td>{medico.idUsuario}</td>
                                                            <td>{medico.idAreaAtuacao}</td>
                                                            <td>{medico.idClinica}</td>
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

export default Medicos