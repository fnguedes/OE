import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import style from '../Style/style'
import Adicionar from '../components/ButtonAdicionar'

export default function Nome() {
    return (
        <SafeAreaView style={style.background}>
            <Text style={style.tituloPag}>Tela de Evento</Text>
            <View style={style.containerEventos}>
                <View style={style.containerEventos}>

                </View>
                <View style={style.containerAdicionarEvento}>
                    <Adicionar caminho={'bla'}/>

                </View>

            </View>
        </SafeAreaView>
    )
}   