import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import style from '../Style/style'

export default function (props) {
  return (
    <TouchableOpacity style={style.containerButtonGe}>
      <Text style={style.txtButtonGe}>{props.children}</Text>
    </TouchableOpacity>
  )
}
