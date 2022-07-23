import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import style from '../Style/style'
import CompEvent from '../components/Evento'
import Tabela from '../components/TableHr'
export default function Horarios({navigation}) {
    return (
        <SafeAreaView style={style.background}>
            <Text style={style.tituloPag}>Horários</Text>
            <View style={style.containerTabelaHorarios}>
                <Tabela/>
            </View>
            <View style={style.eventosSemanais}>
                <View style={style.ContTitulo}>
                    <Text style={style.TxtTitulo}>Eventos da Semana</Text>
                    <View style={style.barra}></View>
                </View>
                <View style={style.container}>
                    <CompEvent semanal={true} navigation={navigation}/>
                </View>
            </View>
        </SafeAreaView>
    )
}   