import React, {Component} from "react"
import firebase from './services/firebaseConfig'
import Login from './pages/Login'
import Localizacao from "./pages/Localizacao";
export default class App extends Component{
    

    constructor(){
        super();
        this.state = {
            user:{},
        }
    }

   

    componentDidMount(){
        this.authListener();
    }

    authListener(){
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({ user });
                // localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null});
                // localStorage.removeItem('user');
            }
        });
    }

    atualizaEstado(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    _logaUsuario(){

        firebase.auth().signInAnonymously().catch(function(error) {
            // Handle Errors here.
            console.log("Email e Senha")
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            this.props.history.push("/localizacao");
          });
    }
    render(){
        return(
            <main>
                {/* <form onSubmit={this._logaUsuario.bind(this)}>
                    <p>Email:</p>
                    <input type="text" name="email" value={this.state.email} placeholder="kevinhobene@gmail.com" onChange={this.atualizaEstado.bind(this)} required/>
                    <p>Senha:</p>
                    <input type="password" name="senha" value={this.state.senha} onChange={this.atualizaEstado.bind(this)} required/>
                    <button type="submit">
                        Enviar
                    </button> 
                </form> */}
                {this.state.user ? (<Localizacao/>) : (<Login/>)}
            </main>
        )
    }
}