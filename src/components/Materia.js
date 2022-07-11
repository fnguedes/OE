import { View, Text } from 'react-native'
import React from 'react'
import style from '../Style/style'
export default function Materia() {
  return (
    <View style={style.containerComponenteMateria}>
      <View style={style.boxSiglaMat}>
        <Text style={style.txtSigla}>PI</Text>
      </View>
      <View style={style.boxNomeProf}>
        <Text style={style.txtNomeProf}>Henrique Nou</Text>
      </View>
      <View style={style.boxHoraAula}>
        <Text style={style.txtHoraAula}>15:00 - 17:00</Text>
      </View>
    </View>
  )
}