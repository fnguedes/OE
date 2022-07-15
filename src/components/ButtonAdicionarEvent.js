import React from 'react'
import {TouchableOpacity,Text} from 'react-native'
import style from '../Style/style'

export default function Adicionar(props){

    return(
        
        <TouchableOpacity style={style.BotaoAdicionar} 
         onPress={()=>props.navigation.navigate('Tela Cadastro Evento')}
        >
                <Text style={style.txtAdicionar}>+</Text>
        </TouchableOpacity>
    )
}