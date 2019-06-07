import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import firebase from '../services/firebaseConfig'

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email:'',
            senha:''
        }
    }

    

    login(e){
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha).then((u)=>{
        }).catch((error) => {
            console.log(error);
        });
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return(
            <div>
                <form>
                    <div>
                        <label>Email:</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email"/>
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input value={this.state.senha} onChange={this.handleChange} type="password" name="senha"/>
                    </div>  
                    <button type="submit" onClick={this.login}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;
