import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import style from '../Style/style'
import Adicionar from '../components/ButtonAdicionar'

export default function Eventos() {
    return (
        <SafeAreaView style={style.background}>
            <Text style={style.tituloPag}>Eventos</Text>
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