import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import style from '../Style/style'
import Coluna, { Horas, Dias } from '../components/TabelaHorarios'

export default function Nome() {
    return (
        <SafeAreaView style={style.background}>
            <Text style={style.tituloPag}>Tela de Horários</Text>
            <View style={style.containerTabelaHorarios}>
                <Dias />
                <View style={style.containerColunasHorarios}>

                    <Horas />
                    <Coluna />
                    <Coluna />
                    <Coluna />
                    <Coluna />
                    <Coluna />
                    <Coluna />
                    <Coluna ultimo={true} />

                </View>

            </View>
            <View style={style.eventosSemanais}>
                <View style={style.ContTitulo}>
                    <Text style={style.TxtTitulo}>Eventos da Semana</Text>
                    <View style={style.barra}></View>
                </View>
                
            </View>
        </SafeAreaView>
    )
}   