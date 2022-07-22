import { View} from 'react-native'
import React from 'react'
import style from '../Style/style'
import Tilt from '../components/TituloSecond'

export default function TelaEventoCad({navigation}) {
  
  return (
    <View style={style.background}>
      <Tilt titulo='Cadastrar Evento' navigation={navigation}/>
    </View>
  )
}