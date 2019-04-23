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
            descricao : "",
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
            IdProntuario : this.state.idprontuario,
            IdMedico: this.state.idmedico,
            DataHora : this.state.dataconsulta,
            Descricao: this.state.descricao
        },{headers : {'Authorization': bearer}})

        .then(data => {
            if(data.status === 200){
                console.log(data);
            }
        })
        .catch(erro => {console.log(erro)})
    }

    listaconsultas(){
        var bearer = 'Bearer ' + localStorage.getItem("usuario-Spmedgroup");

        Axios.get("http://localhost:5000/api/consultas", {headers : {'Authorization' : bearer}})

        .then((response) => {
            response = this.setState({lista: response.data})
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

    componentDidMount(){
        this.listaconsultas();
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
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.lista.map( function(consulta) {
                                        return(
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
            </main>
        )
    }
}

export default ConsultasAdmin;