import React, { Component } from 'react'
import { View, Text, AsyncStorage, ScrollView, StyleSheet } from "react-native"
import api from '../services/api'
import { FlatList } from 'react-native-gesture-handler';
import { TokenValido } from "../services/auth.js";
import jwt from 'jwt-decode'

class ConsultasMedico extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            consultasMedico: [],
            token : null
        }
    }

    _buscarConsultas = async () => {
        const token = await AsyncStorage.getItem("userToken")
        console.warn(token)
        const Resultado = await api.get('/consultas', {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        this.setState({ consultasMedico: Resultado.data })
        console.warn(Resultado.data);
    }

    componentDidMount() {
        AsyncStorage.getItem("userToken").then((token) => {
            this.setState({token: token}, () =>{
                console.warn(token)
                this._buscarConsultas();
            })
        })
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.fundoPadrao}>
                    <Text style={styles.tituloPagina}>Consultas</Text>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            contentContainerStyle={styles.FlatList_main}
                            data={this.state.consultasMedico}
                            keyExtractor={item => item.id}
                            renderItem={this.itemRender}
                        />
                    </View>
                </View>

            </ScrollView>
        )

    }

    itemRender = ({ item }) => (
        
            <View style={styles.FlatList_corpo}>
                <View style={styles.FlatList_item}>
                    {jwt(this.state.token).Role == "Medico" ? 
                        <Text style={{ color: "#000" }}>{item.idProntuario}</Text> 
                    : jwt(this.state.token).Role == "Paciente" ? 
                        <Text style={{ color: "#000" }}>{item.idMedico}</Text> 
                    : <Text style={{ color: "#000" }}>{item.idProntuario} - {item.idMedico}</Text> }
                    
                </View>
                <View>
                    <Text>{item.dataHora}</Text>
                    <Text>{item.descricao}</Text>
                    <Text>{item.status}</Text>
                </View>
            </View>
        
    )


}

const styles = StyleSheet.create({
    tituloPagina: {
        letterSpacing: 2,
        textAlign: 'center',
        fontSize: 38,
        width: '100%',
        color: 'white',
        marginBottom: 20
    },
    fundoPadrao: {
        backgroundColor: '#rgb(72, 87, 255)',
        height: '100%'
    },
    FlatList_main: {
        width: '90%',
        alignSelf: 'center',
    },
    FlatList_corpo: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 15,
        marginVertical: 5,
        shadowOffset: {
            width: 14, height: 14
        },
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 12
    },
    FlatList_item: {
        width: '20%'
    }
})

export default ConsultasMedico