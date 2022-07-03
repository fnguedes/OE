import React from 'react'
import { Text, View,SafeAreaView } from 'react-native'
import style from '../Style/style'

export default function Nome() {
    return (
        <SafeAreaView style={style.background}>
            <Text style={style.tituloPag}>Tela de Horários</Text>
        </SafeAreaView>
    )
}   