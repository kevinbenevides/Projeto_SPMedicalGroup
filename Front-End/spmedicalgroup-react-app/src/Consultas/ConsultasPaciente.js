import React, {Component} from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import "../assets/css/navbar.css"
import logo from '../assets/img/icon-login.png'
import './Consultas.css'

class ConsultasPaciente extends Component{
    constructor(){
        super();
        this.state={
            lista:[],
            idprontuario :"",
            idmedico : "",
            dataconsulta : "",
            descricao : "",
            status: "",
            Prontuario: [],
            Medico: []
        }
    }

    listarconsultas(){

        var bearer = 'Bearer ' + localStorage.getItem("usuario-Spmedgroup");

        Axios.get("https://projetospmedicalgroupwebapi.azurewebsites.net/api/consultas", {headers: {'Authorization' : bearer}})

        
        .then((response) => {
            response = this.setState({lista: response.data})
        })
        .catch((erro) => console.log(erro))  
    }
    
    componentDidMount(){
        this.listarconsultas();
    }

    render(){
        return(
            <div>
                <header className="header">
                    <div className=" flexbox wrapper">
                        <div className="header__image">
                            <img src={logo} alt="Logo do SpMedicalGroup!" />
                        </div>
                        <nav className="header__navbar">
                            <ul className="header__list">
                                <li className="header__list-item" style={{ borderLeft: "none" }}><Link to="/homeadmin">Home</Link></li>
                                <li className="header__list-item"><Link to="/consultaspaciente">Consultas</Link></li>
                                <li className="header__list-item"><Link to="/login" style={{ color: "red", textDecoration: "none" }}>Deslogar</Link></li>
                            </ul>
                        </nav>
                    </div>

                </header>
                <main className="main__consultas">
                    <div className="main-div__consultas">
                        <div className="main-div__sections">
                        <section className="lista_consulta">
                                <div>
                                <h2>Consultas</h2>
                                    <table className="table__consultas">
                                        <thead>
                                            <tr>
                                                <th>#</th>
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

export default ConsultasPaciente