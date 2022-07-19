import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import style from '../Style/style'
import Coluna, { Horas, Dias } from '../components/TabelaHorarios'
import CompEvent from '../components/Evento'

export default function Horarios({navigation}) {
    return (
        <SafeAreaView style={style.background}>
            <Text style={style.tituloPag}>Horários</Text>
            <View style={style.containerTabelaHorarios}>
                <View style={style.containerTabela}>
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