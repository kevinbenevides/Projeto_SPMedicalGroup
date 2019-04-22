import React, {Component} from 'react'

class Consultas extends Component{
    constructor(){
        super();
        this.state={
            lista: []
        }
    }

    listarconsultas(event){
        event.preventDefault()

        var bearer = 'Bearer' + localStorage.getItem("usuario-Spmedgroup");

        Axios.get("http://localhost:5000/api/consultas", {headers: {'Authorization' : bearer}})

        .then(resposta => resposta.json())
        .then(data => this.setState({lista : data}))
        .catch((erro) => console.log(erro))
    }
    
    componentDidMount(){
        this.listaconsultas();
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

export default Consultas