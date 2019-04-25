import React, {Component} from 'react'
import Axios from 'axios'
import apiService from '../services/apiService'

class Usuarios extends Component{
    constructor(){
        super();
        this.state = {
            email: "",
            senha: "",
            idtipoUsuario: "",
            listaidtipoUsuario:[],
            listaUsuarios: []
        }

        this.atualizaEstadoEmail = this.atualizaEstadoEmail.bind(this)
        this.atualizaEstadoSenha = this.atualizaEstadoSenha.bind(this)
        
        this.cadastrarUsuario = this.cadastrarUsuario.bind(this)
    }

    componentDidMount(){
        
        var bearer = 'Bearer ' + localStorage.getItem("usuario-Spmedgroup")

        apiService

            .call("TipoUsuarios")
            .getAll()
            .then(data => {
            this.setState({ listaidtipoUsuario: data.data });
            });

        apiService
            .call("Usuarios")
            .getAll()
            .then(data =>{
                this.setState({ listaUsuarios: data.data});
            })
    }

    atualizaEstadoEmail(event){
        this.setState({email: event.target.value})
    }

    atualizaEstadoSenha(event){
        this.setState({senha: event.target.value})
    }

    atualizaEstadoIdtipoUsuario(event){
        this.setState({idtipoUsuario: event.target.value})
    }

    cadastrarUsuario(event){
        event.preventDefault();

        var bearer = 'Bearer ' + localStorage.getItem("usuario-Spmedgroup");

        Axios.post("http://localhost:5000/api/usuarios", {
            Email: this.state.email,
            Senha: this.state.senha,
            IdTipoUsuario: this.state.idtipoUsuario
        },{headers: {"Authorization" : bearer}})

        .then(data => {
            if(data.status === 200){
                console.log(data);
            }
        })
        .catch(erro => {console.log(erro)})

    }

    render(){
        return(
            <main>
                <form onSubmit={this.cadastrarUsuario}>
                    <p>Insira um Email:</p>
                    <input type="text" value={this.state.emailusuario} onChange={this.atualizaEstadoEmail}/>
                    <p>Insira uma Senha:</p>
                    <input type="password" value={this.state.senhausuario} onChange={this.atualizaEstadoSenha}/>
                    <p>Selecione um tipo de usuario:</p>
                    <select value={this.state.idtipoUsuario} onChange={this.atualizaEstadoIdtipoUsuario.bind(this)}>
                    <option>Selecione</option>
                    {this.state.listaidtipoUsuario.map((element) => {
                      return <option key={element.id} value={element.id}>
                          {element.nome}
                        </option>
                        
                        })}
                    </select>
                    <br/>
                    <button>Enviar</button>
                </form>

                <table>
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
                            this.state.listaUsuarios.map(function(usuario) {
                                return(
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
            </main>
        )
    }
}

export default Usuarios