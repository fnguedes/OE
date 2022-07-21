import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import style from '../Style/style'
import Adicionar from '../components/ButtonAdicionar'
import EventCad from '../components/EventoCadastrado'

export default function Eventos({navigation}) {
    return (
        <SafeAreaView style={style.background}>
            <Text style={style.tituloPag}>Eventos</Text>
            <View style={style.containerEventos}>
                <View style={style.containerEventos}>
                    <EventCad/>
                </View>

            </View>
            <View style={style.containerAdicionarEvento}>
                <Adicionar navigation={navigation} tela='Tela Cadastro Evento' />

            </View>
        </SafeAreaView>
    )
}   