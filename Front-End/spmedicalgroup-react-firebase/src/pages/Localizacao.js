import React, { Component } from 'react'
import firebase from '../services/firebaseConfig'


export default class Localizacao extends Component {
    constructor() {
        super();
        this.state = {
            nome: "",
            idusuario: "",
            idade_paciente: "",
            especialidade_medico: "",
            latitude: "",
            longitude: "",
            doenca_paciente: "",
            listaUsuarios: []
        }

        this.logout.bind(this)
    }

    // componentDidMount(){
    //     firebase.firestore().collection("Usuarios")

    //     .onSnapshot((usuarios) => {
    //         let usuariosArray = [];
    //         usuarios.forEach((usuario) => {
    //             usuariosArray.push({
    //                 id: usuario.id,
    //                 nome: usuario.data().Nome
    //             })
    //         })

    //         this.setState({ listaUsuarios : usuariosArray}, () => {
    //             console.log(this.state.listaUsuarios)
    //         }  )
    //     })
    // }
    logout(){
        firebase.auth().signOut();   
       }

    atualizaEstado(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    atualizaEstadoIdUsuario(event) {
        this.setState({ idusuario: event.target.value })
    }

    cadastraLocalizacao(event) {
        event.preventDefault()

        if (this.state.idusuario !== 0) {
            console.log("if")
            firebase.firestore().collection("Usuarios").add({
                Nome: this.state.nome,
                Idade_Paciente: this.state.idade_paciente,
                Especialidade_Medico: this.state.especialidade_medico,
                Doenca_Paciente: this.state.doenca_paciente,
                Localizacao: this.state.Latitude + "," + this.state.Longitude
            })
                .then((resultado) => {
                    alert("Localização, Idade e Doença do Paciente Cadastradas")
                }).catch((erro) => {
                    console.log('tag', erro)
                })
        } else {
            console.log("eusi")
            firebase.firestore().collection("Usuarios")
                .doc(this.state.idusuario)
                .set({
                    Nome: this.state.nome,
                    Idade_Paciente: this.state.idade_paciente,
                    Especialidade_Medico: this.state.especialidade_medico,
                    Doenca_Paciente: this.state.doenca_paciente,
                    Localizacao: firebase.firestore.GeoPoint(this.state.latitude + "," + this.state.longitude)
                }).then((resultado) => {
                    alert("Localização e Doença do Paciente Atualizadas")
                }).catch((erro) => {
                    console.log('tag', erro)
                })
        }

    }

    cadastraEspecialidade(event) {
        event.preventDefault()

        if (this.state.idusuario !== 0) {
            console.log("if")
            firebase.firestore().collection("Usuarios").add({
                Nome: this.state.nome,
                Especialidade_Medico: this.state.especialidade_medico,
            })
                .then((resultado) => {
                    alert("Usuario Cadastrado")
                }).catch((erro) => {
                    console.log('tag', erro)
                })
        } else {
            console.log("eusi")
            firebase.firestore().collection("Usuarios")
                .doc(this.state.idusuario)
                .set({
                    Nome: this.state.nome,
                    Especialidade_Medico: this.state.especialidade_medico,
                }).then((resultado) => {
                    alert("Usuario Alterado")
                }).catch((erro) => {
                    console.log('tag', erro)
                })
        }

        var locations = [
            ["Bondi Beach", -33.890542, 151.274856, 4],
            ["Coogee Beach", -33.923036, 151.259052, 5],
            ["Cronulla Beach", -34.028249, 151.157507, 3],
            ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
            ["Maroubra Beach", -33.950198, 151.259302, 1]
        ];


    }
    render() {
        return (
            <main style={{ backgroundColor: "#333" }}>
                <button onClick={this.logout}>Logout</button>
                <section style={{ backgroundColor: "#fff", borderRadius: 25, width: "25%", padding: 10, marginLeft: "10%", marginTop: 10 }}>
                    <div>
                        <form onSubmit={this.cadastraLocalizacao.bind(this)}>
                            {/* <p>Selecione um usuário para efetuar o cadastro:</p>
                        <select value={this.state.idusuario} onChange={this.atualizaEstadoIdUsuario.bind(this)}>
                            <option>Selecione</option>
                            {this.state.listaUsuarios.map((element) => {
                                return(
                                    <option key={element.id} value={element.id}>
                                        {element.nome}
                                    </option>
                                )
                            } )}
                        </select> */}

                            <p>Insira um Nome para o Paciente:</p>
                            <input name="nome" placeholder="Ex: Kevin" type="text" value={this.state.nome} onChange={this.atualizaEstado.bind(this)} />

                            <p>Insira a idade do paciente: </p>
                            <input name="idade_paciente" placeholder="Ex: 17" type="number" value={this.state.idade_paciente} onChange={this.atualizaEstado.bind(this)} />

                            <p>Insira a Doença do paciente:</p>
                            <input name="doenca_paciente" placeholder="Ex: Varíola" type="text" value={this.state.doenca_paciente} onChange={this.atualizaEstado.bind(this)} />

                            <p>Insira aqui a Latitude:</p>
                            <input name="Latitude" placeholder="Ex: -23.5345442" type="text" value={this.state.Latitude} onChange={this.atualizaEstado.bind(this)} required />

                            <p>Insira aqui a Longitude:</p>
                            <input name="Longitude" placeholder="Ex: -46.6493879" type="text" value={this.state.Longitude} onChange={this.atualizaEstado.bind(this)} required />

                            <button type="submit">Enviar</button>
                        </form>
                    </div>

                </section>
                <section style={{ backgroundColor: "#fff", borderRadius: 25, width: "25%", padding: 10, marginLeft: "10%", marginTop: 10 }}>
                    <div>
                        <form onSubmit={this.cadastraEspecialidade.bind(this)}>
                            <p>Insira um Nome para o Médico:</p>
                            <input name="nome"
                                placeholder="Ex: Kevin"
                                type="text"
                                value={this.state.nome}
                                onChange={this.atualizaEstado.bind(this)} />

                            <p>Insira a Especialidade do Médico:</p>
                            <input name="especialidade_medico"
                                placeholder="Ex: Psiquiatra"
                                type="text"
                                value={this.state.especialidade_medico}
                                onChange={this.atualizaEstado.bind(this)} />

                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </section>
            </main>

        )
    }
}