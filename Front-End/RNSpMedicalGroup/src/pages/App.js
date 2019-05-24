import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, AsyncStorage, TouchableOpacity, ImageBackground, Alert } from 'react-native';
// import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../services/api"
import jwt from 'jwt-decode'


class App extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = { Email: "", Senha: "", erro: "" }
  }

  _logando = async () => {
        const resposta = await api.post("/Login", {
          email: this.state.email,
          senha: this.state.senha
        })
        const token = resposta.data.token;
        await AsyncStorage.setItem("userToken", token);
        if (token.length > 10) {
          if (jwt(token).Role == 'Administrador') {
            this.props.navigation.navigate('MainNavigation')
          }
          if (jwt(token).Role == 'Paciente') {
            this.props.navigation.navigate('MainNavigation')
          } if (jwt(token).Role == 'Medico') {
            this.props.navigation.navigate('MainNavigation')
          }
        } 
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/img/background-login.jpg')} style={styles.backgroundImage}>
          <View style={styles.mainContainer}>
            <View style={styles.corpo}>
              <Text style={styles.tituloPagina}>Login</Text>
              <Text style={styles.labelInput}>Email:</Text>
              <TextInput
                style={styles.inputArredondado}
                placeholder="Email"
                defaultValue="helena.souza@spmedicalgroup.com.br"
                onChangeText={email => this.setState({ email })}
              />
              <Text style={styles.labelInput}>Senha:</Text>
              <TextInput
                style={styles.inputArredondado}
                secureTextEntry={true}
                placeholder="Senha"
                password="true"
                defaultValue="123456"
                onChangeText={senha => this.setState({ senha })}
              />
              <TouchableOpacity
                style={styles.btnLogin}
                onPress={this._logando}
                activeOpacity={0.5}
              >
                <Text>Login</Text>
              </TouchableOpacity>

            </View>

          </View>

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#rgba(72, 87, 255, 0.582)'
  },
  backgroundImage: {
    position: 'absolute',
    width: "100%",
    height: "100%",
  },
  tituloPagina: {
    letterSpacing: 2,
    textAlign: 'center',
    fontSize: 38,
    width: '100%',
    color: 'white',
    marginBottom: 20
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  btnLogin: {
    height: 38,
    shadowColor: "rgba(0,0,0, 0.4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 3, // Android
    width: 240,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  inputArredondado: {
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',

  },
  labelInput: {
    fontWeight: '500',
    marginVertical: 20,
    fontSize: 18,
    color: 'white',
  },
  corpo: {
    width: '60%'
  }

});

export default App;