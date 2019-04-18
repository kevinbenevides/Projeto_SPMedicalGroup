import React, { Component } from 'react';
import Axios from 'axios';

class ConsultasAdmin extends Component {
    constructor() {
        super();
        this.state = {
            lista:[],
            idprontuario :"",
            idmedico : "",
            dataconsulta : "",
            descricao : ""
        }

        this.cadastroConsultas = this.cadastroConsultas.bind(this);
        this.atualizaEstadoIdProntuario = this.atualizaEstadoIdProntuario.bind(this)
        this.atualizaEstadoIdMedico = this.atualizaEstadoIdMedico.bind(this)
        this.atualizaEstadoData = this.atualizaEstadoData.bind(this)
        this.atualizaEstadoDescricao = this.atualizaEstadoDescricao.bind(this)
    }

    atualizaEstadoIdProntuario(event){
        this.setState({ idprontuario : event.target.value})
    }

    atualizaEstadoIdMedico(event){
        this.setState({ idmedico : event.target.value})
    }

    atualizaEstadoData(event){
        this.setState({ dataconsulta : event.target.value})
    }

    atualizaEstadoDescricao(event){
        this.setState({ descricao : event.target.value})
    }


    cadastroConsultas(event){
        event.preventDefault();

        var bearer = 'Bearer ' + localStorage.getItem("usuario-Spmedgroup");

        Axios.post("http://localhost:5000/api/consultas", {
            idprontuario : this.state.idprontuario,
            idmedico: this.state.idmedico,
            datahora : this.state.dataconsulta,
            descricao: this.state.descricao
        },{headers : {'Authorization': bearer}})

        .then(data => {
            if(data.status === 200){
                console.log(data);
            }
        })
        .catch(erro => {console.log(erro)})
    }

    render() {
        return (
            <main>
                <section className="cadastro_consulta">
                    <div className="container">
                        <form onSubmit={this.cadastroConsultas}>
                            <p>Insira um id de um prontuário:</p>
                            <input type="text" value={this.state.idprontuario} onChange={this.atualizaEstadoIdProntuario}/>

                            <p>Insira um id de um Médico:</p>
                            <input type="text" value={this.state.idmedico} onChange={this.atualizaEstadoIdMedico}/>

                            <p>Insira uma data para a consulta:</p>
                            <input type="date" value={this.state.dataconsulta} onChange={this.atualizaEstadoData} placeholder="dd/MM/yyyy" required/>

                            <p>Descreva a Consulta</p>
                            <textarea value={this.state.descricao} onChange={this.atualizaEstadoDescricao}></textarea>


                            <button>Enviar</button>
                        </form>
                    </div>
                </section>

                <section className="lista_consulta">
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Id Prontuario</th>
                                    <th>Id Medico</th>
                                    <th>Data</th>
                                    <th>Descricao</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.lista.map( consulta => {
                                        return(
                                            <tr key={consulta.id}>
                                                <td>{consulta.id}</td>
                                                <td>{consulta.idprontuario}</td>
                                                <td>{consulta.idmedico}</td>
                                                <td>{consulta.data}</td>
                                                <td>{consulta.descricao}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        )
    }
}

export default ConsultasAdmin;