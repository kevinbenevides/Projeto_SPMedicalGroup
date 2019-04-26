import React, { Component } from 'react'
import apiService from '../services/apiService'

class Medicos extends Component {
    constructor(){
        super()

        this.state={
            lista:[]
        }
        
    }

    componentDidMount(){
        apiService

            .call("medicos")
            .getAll()
            .then(data => {
            this.setState({ lista: data.data });
            });
    }

    render() {
        return (
            <main>
                <div>
                    <table>
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
            </main>
        )
    }
}

export default Medicos