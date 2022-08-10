import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Principal() {

    var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    var d = new Date;
    const dia = semana[d.getDay()];


    const [horarios, setHorarios] = useState([
        { aula: 'Banco de dados', day: 'Segunda-feira', time: '17:00h', teacher: 'Bruno', faltas: 3, key: 1 },
        { aula: 'Iteração humano computador', day: 'Segunda-feira', time: '20:30h', teacher: 'Camila', faltas: 0, key: 2 },
    ])

    return (
        <View>
            <View style={styels.principalBody}>
            <Text style={styels.title}>{dia}</Text>                
                {horarios.map(aulas => (
                    <View style={styels.card}>
                        <Text style={styels.subTitle}>{aulas.aula}</Text>
                        <Text style={styels.subTitle}>{aulas.teacher}</Text>
                        <Text style={styels.time}>Horario {aulas.time} - Faltas {aulas.faltas}</Text>
                    </View>
                ))}
                <View style={styels.principalIcon}>
                    <Icon name="calendar" size={50} color='white' />
                </View>
            </View>
        </View>
    );
}

const styels = StyleSheet.create({
    principalBody: {
        //flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    card:{
        backgroundColor: 'gray',
        margin: 10,
        padding: 8,
    },
    title: {
        fontSize: 25,
        marginBottom: 10,
        alignSelf: 'center',
    },
    subTitle: {
        fontSize: 20,
        marginBottom: 10,
        alignSelf: 'center',
    },
    time: {
        fontSize: 15,
        alignSelf: 'center',
    },
    principalIcon: {
        marginTop: 80,
        alignSelf: 'center',
    },
})