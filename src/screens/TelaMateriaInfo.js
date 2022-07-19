import { View, Text } from 'react-native'
import React from 'react'
import style from '../Style/style'
import Tilt from '../components/TituloSecond'

export default function TelaMateriaInfo({ navigation }) {
  return (
    <View style={style.background}>
      <Tilt titulo='Processamento de Imagens' navigation={navigation}/>
      <View style={style.containerInfos}>
        <View style={style.containerNomeDesc}>

        </View>
        <View style={style.containerHrs}>
          <View style={style.tabHrs}></View>
        </View>
      </View>

    </View>
  )
}