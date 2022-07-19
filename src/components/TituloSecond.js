import { View, Text } from 'react-native'
import React from 'react'
import Back from '../components/ButtonBack'
import style from '../Style/style'
export default function TituloSecond(props) {
    return (
        <View style={style.containerTituloMC}>
            <Back navigation={props.navigation} />
            <View style={style.contTituloPagNv2}>
                <Text style={style.tituloPagNV2}>{props.titulo}</Text>
            </View>
        </View>
    )
}