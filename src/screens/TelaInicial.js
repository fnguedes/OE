import React from 'react'
import { SafeAreaView, Text, View, StatusBar, Image } from 'react-native'
import style from '../Style/style'
import CompEvent from '../components/Evento'

export default function TelaInicial() {
    return (
        <SafeAreaView style={style.background}>
            <StatusBar />
            <Text style={style.tituloPag}>Afazeres do Dia</Text>
            <View style={style.ContTitulo}>
                <Text style={style.TxtTitulo}>Aulas</Text>
                <View style={style.barra}></View>
            </View>

            <View style={style.container}></View>

            <View style={style.ContTitulo}>
                <Text style={style.TxtTitulo}>Eventos</Text>
                <View style={style.barra}></View>
            </View>

            <View style={style.container}>
                <CompEvent/>
            </View>

        </SafeAreaView>


    )
}
