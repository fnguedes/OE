import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import style from '../Style/style'

export default function ButtonBack({navigation}) {
  return (
    <TouchableOpacity style={style.containerButtonBack} onPress={()=>navigation.goBack()}>
        <Image source={require('../image/seta.png')} style={style.buttonBack}/>
    </TouchableOpacity>
  )
}

