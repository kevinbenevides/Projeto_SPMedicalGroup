import React, {Component} from 'react'
import Axios from 'axios'


class ConsultasMedico extends Component{
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

        Axios.get("http://localhost:5000/api/consultas", {headers: {'Authorization' : bearer}})

        
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
            <main>
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
                                    this.state.lista.map( consulta => {
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

export default ConsultasMedico