import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import style from '../Style/style'
import Back from '../components/ButtonBack'

export default function TelaEventoCad({navigation}) {
  
  return (
    <View style={style.background}>
      <Back navigation={navigation}/>
    </View>
  )
}