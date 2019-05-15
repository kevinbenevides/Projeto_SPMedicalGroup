import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
import "../assets/css/navbar.css"
import logo from '../assets/img/icon-login.png'
import './Consultas.css'

class ConsultasAdmin extends Component {
    constructor() {
        super();
        this.state = {
            lista: [],
            idprontuario: "",
            idmedico: "",
            dataconsulta: "",
            descricao: "",
            status: "",
            Prontuario: [],
            Medico: []
        }

        this.cadastroConsultas = this.cadastroConsultas.bind(this);
        this.atualizaEstadoIdProntuario = this.atualizaEstadoIdProntuario.bind(this)
        this.atualizaEstadoIdMedico = this.atualizaEstadoIdMedico.bind(this)
        this.atualizaEstadoData = this.atualizaEstadoData.bind(this)
        this.atualizaEstadoDescricao = this.atualizaEstadoDescricao.bind(this)
    }

    atualizaEstadoIdProntuario(event) {
        this.setState({ idprontuario: event.target.value })
    }

    atualizaEstadoIdMedico(event) {
        this.setState({ idmedico: event.target.value })
    }

    atualizaEstadoData(event) {
        this.setState({ dataconsulta: event.target.value })
    }

    atualizaEstadoDescricao(event) {
        this.setState({ descricao: event.target.value })
    }


    cadastroConsultas(event) {
        event.preventDefault();

        var bearer = 'Bearer ' + localStorage.getItem("usuario-Spmedgroup");

        Axios.post("http://localhost:5000/api/consultas", {
            IdProntuario: this.state.idprontuario,
            IdMedico: this.state.idmedico,
            DataHora: this.state.dataconsulta,
            Descricao: this.state.descricao
        }, { headers: { 'Authorization': bearer } })

            .then(data => {
                if (data.status === 200) {
                    console.log(data);
                }
            })
            .catch(erro => { console.log(erro) })
    }

    listaconsultas() {
        var bearer = 'Bearer ' + localStorage.getItem("usuario-Spmedgroup");

        Axios.get("http://localhost:5000/api/consultas", { headers: { 'Authorization': bearer } })

            .then((response) => {
                response = this.setState({ lista: response.data })
            })
            .catch((erro) => console.log(erro))

        //     fetch("http://localhost:5000/api/consultas",
        //         {
        //            method: 'GET',
        //            headers: {
        //              "Content-Type" : "application/json",
        //              "Authorization" :  'Bearer ' + localStorage.getItem("usuario-Spmedgroup")
        //            }   
        //         })
        //        .then(resposta => resposta.json())
        //        .then(data => this.setState({lista : data}))
        //        .catch(erro => console.log(erro))
    }

    componentDidMount() {
        this.listaconsultas();
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
                <main className="main__consultas">
                    <div className="main-div__consultas">
                        <div className="main-div__sections">

                            <section className="cadastro_consulta" style={{width:"24%"}}>
                                <div className="container">
                                    <h2>Cadastro de Consultas</h2>
                                    <form className="section__form" onSubmit={this.cadastroConsultas}>
                                        <p style={{marginRight: "6%"}}>Id do prontuário:</p>
                                        <input type="text" value={this.state.idprontuario} onChange={this.atualizaEstadoIdProntuario} />

                                        <p>Id do Médico:</p>
                                        <input type="text" value={this.state.idmedico} onChange={this.atualizaEstadoIdMedico} />

                                        <p style={{marginRight: "5%"}}>Data da consulta:</p>
                                        <input type="date" value={this.state.dataconsulta} onChange={this.atualizaEstadoData} placeholder="dd/MM/yyyy" required />

                                        <p>Descrição:</p>
                                        <textarea value={this.state.descricao} onChange={this.atualizaEstadoDescricao}></textarea>

                                        <br/>
                                        <button>Enviar</button>
                                    </form>
                                </div>
                            </section>

                            <section className="lista_consulta">
                                <div>
                                <h2>Consultas</h2>
                                    <table className="table__consultas">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Id Prontuario</th>
                                                <th>Id Medico</th>
                                                <th>Data</th>
                                                <th>Descricao</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                this.state.lista.map(function (consulta) {
                                                    return (
                                                        <tr key={consulta.id}>
                                                            <td>{consulta.id}</td>
                                                            <td>{consulta.idProntuario}</td>
                                                            <td>{consulta.idMedico}</td>
                                                            <td>{consulta.dataHora}</td>
                                                            <td>{consulta.descricao}</td>
                                                            <td>{consulta.status}</td>
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

export default ConsultasAdmin;