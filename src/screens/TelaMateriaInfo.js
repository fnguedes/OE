import { View, Text } from 'react-native'
import React from 'react'
import style from '../Style/style'
import Back from '../components/ButtonBack'

export default function TelaMateriaInfo({ navigation }) {
  return (
    <View style={style.background}>
      <View style={style.containerTituloMC}>
        <Back navigation={navigation} />
        <Text style={style.tituloPag}>Nome da Matéria</Text>
      </View>
      <View>

      </View>

    </View>
  )
}