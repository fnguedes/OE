import { View, Text } from 'react-native'
import React from 'react'
import style from '../Style/style'
import Coluna, { Horas, Dias } from '../components/TabelaHorarios'

export default function TableHr() {
    return (
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
    )
}