import React from 'react'
import {TouchableOpacity,Text} from 'react-native'
import style from '../Style/style'

export default function Adicionar({navigation}){

    return(
        
        <TouchableOpacity style={style.BotaoAdicionar} 
         onPress={()=>navigation.navigate('Tela Cadastro Materia')}
        >
                <Text style={style.txtAdicionar}>+</Text>
        </TouchableOpacity>
    )
}