import React from 'react'
import style from '../Style/style'
import { SafeAreaView, Text,View } from 'react-native'
import Adicionar from '../components/ButtonAdicionar'

export default function Nome() {
    return (
        <SafeAreaView style={style.background}>
            <Text style={style.tituloPag}>
                Tela caderno
            </Text>
            <View style={style.containerEventos}>
                <View style={style.containerEventos}>

                </View>
                <View style={style.containerAdicionarEvento}>
                    <Adicionar caminho={'bla'} />

                </View>

            </View>
        </SafeAreaView>
    )
}