import { View, Text } from 'react-native'
import React from 'react'
import style from '../Style/style'
import Back from '../components/ButtonBack'

import Tilt from '../components/TituloSecond'

export default function TelaMateriaCad({ navigation }) {
  return (
    <View style={style.background}>
      <Tilt titulo='Cadastrar Matéria' navigation={navigation}/>
    </View>
  )
}