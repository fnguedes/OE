import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import style from '../Style/style'

export default function EventoCadastrado() {
    return (
        <TouchableOpacity style={style.containerEventoCad}>
            <View style={style.boxEventoCad}>

                <Text style={style.txtTituloEventoCad}>Jantar com a família</Text>
            </View>

            <View style={style.boxDescEventoCad}>
                <Text style={style.txtDescEvento}>Breve Descrição</Text>
            </View>

            <View style={style.containerHorarioEventoCad}>
                <View style={style.boxEventoData}>
                    <Text style={style.txtEvento}>14/09/2022</Text>
                    <Text style={style.txtEvento}>22:00</Text>
                </View>
                <View style={style.lixoEventoCad}>
                    <TouchableOpacity>
                        <Image source={require('../image/lixinho.png')} style={style.lixinho}/>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}