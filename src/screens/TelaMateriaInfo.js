import { View, Text } from 'react-native'
import React from 'react'
import style from '../Style/style'
import Back from '../components/ButtonBack'

export default function TelaMateriaInfo({navigation}) {
  return (
    <View style={style.background}>
    <Back navigation={navigation}/>
      <Text>TelaMateriaInfo</Text>
    </View>
  )
}