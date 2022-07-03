import React from 'react'
import {TouchableOpacity,Text} from 'react-native'
import style from '../Style/style'

export default function Adicionar(){

    return(
        <TouchableOpacity style={style.BotaoAdicionar}>
                <Text style={style.txtAdicionar}>+</Text>
        </TouchableOpacity>
    )
}