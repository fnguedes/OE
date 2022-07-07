import React from 'react'
import style from '../Style/style'
import { SafeAreaView, Text,View } from 'react-native'
import Adicionar from '../components/ButtonAdicionar'

export default function Materias() {
    return (
        <SafeAreaView style={style.background}>
            <Text style={style.tituloPag}>
                Matérias
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