import React from 'react'
import { SafeAreaView, Text, View, StatusBar } from 'react-native'
import style from '../Style/style'
import CompEvent from '../components/Evento'
import CompMat from '../components/Materia'

export default function TelaInicial() {

   

    return (
        <SafeAreaView style={style.background}>
            <StatusBar hidden/>
            <Text style={style.tituloPag}>Afazeres do Dia</Text>
            <View style={style.ContTitulo}>
                <Text style={style.TxtTitulo}>Aulas</Text>
                <View style={style.barra}></View>
            </View>

            <View style={style.container}>
                <CompMat/>
            </View>

            <View style={style.ContTitulo}>
                <Text style={style.TxtTitulo}>Eventos</Text>
                <View style={style.barra}></View>
            </View>

            <View style={style.containerEventoDia}>
                <CompEvent/>
            </View>

        </SafeAreaView>


    )
}
