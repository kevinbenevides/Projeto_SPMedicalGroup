import React, {Component} from 'react'
import firebase from '../services/firebaseConfig'


export default class Localizacao extends Component{
    constructor(){
        super();
        this.state = {
            nome: "",
            Latitude: "",
            Longitude: "",
            idusuario: "",
            listaUsuarios: []
        }
    }

    componentDidMount(){
        firebase.firestore().collection("Usuarios")
        
        .onSnapshot((usuarios) => {
            let usuariosArray = [];
            usuarios.forEach((usuario) => {
                usuariosArray.push({
                    id: usuario.id,
                    nome: usuario.data().Nome
                })
            })

            this.setState({ listaUsuarios : usuariosArray}, () => {
                console.log(this.state.listaUsuarios)
            }  )
        })
    }

    atualizaEstadoIdUsuario(event){
        this.setState({idusuario : event.target.value})
    }

    cadastraLocalizacao(event){
        event.preventDefault()
        firebase.firestore().collection("Usuarios").add()
        .then()
        
    }

    render(){
        return(
            <section>
                <div>
                    <form>
                        <p>Selecione um usuário para efetuar o cadastro:</p>
                        <select value={this.state.idusuario} onChange={this.atualizaEstadoIdUsuario.bind(this)}>
                            <option>Selecione</option>
                            {this.state.listaUsuarios.map((element) => {
                                return(
                                    <option key={element.id} value={element.id}>
                                        {element.nome}
                                    </option>
                                )
                            } )}
                        </select>
                        <p>Insira aqui a Latitude:</p>
                        <input name="Latitude" type="geopoint"/>
                        <p>Insira aqui a Longitude:</p>
                        <input name="Longitude" type="geopoint"/>
                    </form>
                </div>
            </section>
        )
    }
}