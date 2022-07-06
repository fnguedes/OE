import { View, Text } from 'react-native'
import React from 'react'
import style from '../Style/style'

export default function aulasDaSemana(props) {
  console.log(props.ultimo)
  return (
    <View style={style.aulasDaSemana}>
      <View style={props.ultimo ? style.boxAulasUltimo : style.boxAulas}></View>
      <View style={props.ultimo ? style.boxAulasUltimo : style.boxAulas}></View>
      <View style={props.ultimo ? style.boxAulasUltimo : style.boxAulas}></View>
      <View style={props.ultimo ? style.boxAulasUltimo : style.boxAulas}></View>
      <View style={props.ultimo ? style.boxAulasUltimo : style.boxAulas}></View>
      <View style={props.ultimo ? style.boxAulasUltimo : style.boxAulas}></View>
      <View style={props.ultimo ? style.boxAulasUltimo : style.boxAulas}></View>
      <View style={props.ultimo ? style.boxAulasUltimo : style.boxAulas}></View>
      <View style={props.ultimo ? style.boxAulasUltimo : style.boxAulas}></View>
      <View style={props.ultimo ? style.boxAulasUltimo : style.boxAulas}></View>
      <View style={props.ultimo ? style.boxAulasUltimo : style.boxAulas}></View>
      <View style={props.ultimo ? style.boxAulasUltimoCanto : style.boxAulasUltimaLinha}></View>
    </View>
  )
}

export function Dias() {

  return (
    <View style={style.dias}>
      <View style={style.boxVazia}></View>
      <View style={style.boxDias}></View>
      <View style={style.boxDias}></View>
      <View style={style.boxDias}></View>
      <View style={style.boxDias}></View>
      <View style={style.boxDias}></View>
      <View style={style.boxDias}></View>
      <View style={style.boxDiasFinal}></View>
    </View>

  )
}

export function Horas() {
  return (
    <View style={style.horas}>
      <View style={style.boxHoras}>
        <Text style={style.txtHoras}>07:00 </Text>
        <Text style={style.txtHoras}>-</Text>
        <Text style={style.txtHoras}>09:00</Text>
      </View>

      <View style={style.boxHoras}>
        <Text style={style.txtHoras}>09:00 </Text>
        <Text style={style.txtHoras}>-</Text>
        <Text style={style.txtHoras}>11:00</Text>
      </View>

      <View style={style.boxHoras}>
        <Text style={style.txtHoras}>11:00 </Text>
        <Text style={style.txtHoras}>-</Text>
        <Text style={style.txtHoras}>13:00</Text>
      </View>

      <View style={style.boxHoras}>
        <Text style={style.txtHoras}>13:00 </Text>
        <Text style={style.txtHoras}>-</Text>
        <Text style={style.txtHoras}>15:00</Text>
      </View>

      <View style={style.boxHoras}>
        <Text style={style.txtHoras}>15:00 </Text>
        <Text style={style.txtHoras}>-</Text>
        <Text style={style.txtHoras}>17:00</Text>
      </View>

      <View style={style.boxHoras}>
        <Text style={style.txtHoras}>17:00 </Text>
        <Text style={style.txtHoras}>-</Text>
        <Text style={style.txtHoras}>19:00</Text>
      </View>

      <View style={style.boxHoras}>
        <Text style={style.txtHoras}>19:00 </Text>
        <Text style={style.txtHoras}>-</Text>
        <Text style={style.txtHoras}>21:00</Text>
      </View>

      <View style={style.boxHoras}>
        <Text style={style.txtHoras}>21:00 </Text>
        <Text style={style.txtHoras}>-</Text>
        <Text style={style.txtHoras}>23:00</Text>
      </View>

      <View style={style.boxHoras}>
        <Text style={style.txtHoras}>23:00 </Text>
        <Text style={style.txtHoras}>-</Text>
        <Text style={style.txtHoras}>01:00</Text>
      </View>

      <View style={style.boxHoras}>
        <Text style={style.txtHoras}>01:00 </Text>
        <Text style={style.txtHoras}>-</Text>
        <Text style={style.txtHoras}>03:00</Text>
      </View>

      <View style={style.boxHoras}>
        <Text style={style.txtHoras}>03:00 </Text>
        <Text style={style.txtHoras}>-</Text>
        <Text style={style.txtHoras}>05:00</Text>
      </View>

      <View style={style.boxHorasFinal}>
        <Text style={style.txtHoras}>05:00 </Text>
        <Text style={style.txtHoras}>-</Text>
        <Text style={style.txtHoras}>07:00</Text> 
      </View>
    </View>

  )
}