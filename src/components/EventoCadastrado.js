import { View, Text,TextInput } from 'react-native'
import React from 'react'
import style from '../Style/style'

export default function EventoCadastrado() {
    return (
        <View style={style.containerEventoCad}>
             <View style={style.boxEventoCad}>

            <Text style={style.txtTituloEventoCad}>Jantar com a família</Text>
            </View>
            
            <View style={style.boxDescEventoCad}>
                <TextInput placeholder='Breve Descrição aqui'/>
                {/* <Text style={style.txtDescEvento}>Breve Descrição</Text> */}
            </View>
           
            <View style={style.containerHorarioEventoCad}>
                <View style={style.boxEventoData}>
                    <Text style={style.txtEvento}>14/09/2022</Text>
                </View>
                <View style={style.lixoEventoCad}>
                    <Text style={style.txtEvento}>22:00</Text>
                </View>

            </View> 
        </View>
    )
}