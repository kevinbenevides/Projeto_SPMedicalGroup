import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, AsyncStorage } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../services/api"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email="",
      senha="",
      erro: ""
    }
  }

  _logando = async () => {
    const respostaLogin = await api.post("api/Login",
      {
        email: this.state.email,
        senha: this.state.senha
      }
    )
    try {
      const token = respostaLogin.data.token;
      AsyncStorage.setItem('userToken', token)
      var decode = jwt(token).Role
      if(decode.Role === "Medico"){
        this.props.navigation.navigate("MedicoNavigation")
      }
      this.props.navigation.navigate("MainNavigation")
    } catch{
      this.setState({erro: respostaLogin.data.Usuario})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login</Text>
        <Text>Email:</Text>
        <TextInput
          placeholder="Email"
          textContentType='name'
          onChange={email => this.setState(email)}
          value={this.state.email} />
        <Text>Senha:</Text>
        <TextInput
          placeholder="Senha"
          textContentType='password' 
          onChange={senha => this.setState(senha)}
          value={this.state.senha}/>
        <TouchableOpacity
          onPress={this._logando}
          activeOpacity={0.5}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
