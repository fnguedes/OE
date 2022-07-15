import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import style from '../Style/style'
export default function Evento({navigation}) {
  return (
    <TouchableOpacity style={style.containerComponenteEvento} onPress={ ()=>navigation.navigate('Tela Eventos') }>
      <View style={{ flexDirection: 'row',flex:1 }}>
        <View style={style.nivelPrioridade}></View>
        <View style={style.boxInfoEvento}>
          <Text style={style.txtInfoEventoTitulo}>Jantar com a familia</Text>
          <Text style={style.txtInfoEventoDesc}>Breve descrição fica aqui </Text>
        </View>
        <View style={style.boxHorarioEvento}>
          <Text style={style.txtHoraEvento}>22:00</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}