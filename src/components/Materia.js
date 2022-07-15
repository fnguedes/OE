import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import style from '../Style/style'
export default function Materia({navigation}) {
  return (
    <TouchableOpacity style={style.containerComponenteMateria} onPress={()=>navigation.navigate('Tela Materias')} >
      <View style={style.boxSiglaMat}>
        <Text style={style.txtSigla}>PI</Text>
      </View>
      <View style={style.boxNomeProf}>
        <Text style={style.txtNomeProf}>Henrique Nou</Text>
      </View>
      <View style={style.boxHoraAula}>
        <Text style={style.txtHoraAula}>15:00 - 17:00</Text>
      </View>
    </TouchableOpacity>
  )
}