import React, {Component} from 'react';

import Axios from 'axios'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            email:'',
            senha:''
        }
    }

    atualizaEstadoEmail(event){
        this.setState({email: event.target.value})
    }

    atualizaEstadoSenha(event){
        this.setState({senha: event.target.value})
    }

    fazerLogin(event){
        event.preventDefault();

        Axios.post("http://localhost:5000/api/Login",{
            email: this.state.email,
            senha: this.state.senha
        })

        .then(data =>{
            if(data.status === 200){
                console.log(data);
                localStorage.setItem("usuario-Spmedgroup", data.data.token);
                this.props.history.push("/homeadmin");
            }else{
                alert('Email ou senha inválido')
            }
        })
        .catch(erro => {
            console.log(erro);
            this.setState({ erroMensegem: 'Email ou senha inválido'})
        })
    }


    render(){
        return(
            <div>
      
      <section className="main-cadastro" >
                <div className="img__login"><div className="img__overlay"></div></div>

                <div className="item__login container-formulario">
                    <div className="row">
                        <div className="item titulo-formulario" id="item__title">
                            <h2 className="text__login" id="item__description">
                                Bem-vindo! Faça login para acessar sua conta.
                            </h2>
                        </div>
                        <form onSubmit={this.fazerLogin.bind(this)}>
                            <div className="item item-formulario">
                                <p>E-mail</p>
                                <input
                                    className="input__login"
                                    placeholder="Digite seu e-mail"
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.atualizaEstadoEmail.bind(this)}
                                    name="username"
                                    id="login__email"
                                />
                            </div>
                            <div className="item item-formulario">
                                <p>Senha</p>
                                <input
                                    className="input__login"
                                    placeholder="Digite sua senha"
                                    type="password"
                                    value={this.state.senha}
                                    onChange={this.atualizaEstadoSenha.bind(this)}
                                    name="password"
                                    id="login__password"
                                />
                            </div>
                            <p className="text__login" style={{color : 'red', textAlign : 'center'}}>{this.state.erroMensegem}</p>
                            <div className="item item-formulario-btn">
                                
                            <button type="submit" className="btn btn__login" id="btn__login">
                                        Login
                            </button>
            </div>
          </form>
        </div>
                    </div>
    </section>
    </div>
                
        )
    }
}

export default Login