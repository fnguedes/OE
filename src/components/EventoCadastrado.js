import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import style from '../Style/style'

export default function EventoCadastrado() {
    return (
        <View style={style.containerEventoCad}>
            <View style={style.boxEventoCad}>

                <Text style={style.txtTituloEventoCad}>Jantar com a família</Text>
            </View>

            <View style={style.boxDescEventoCad}>
                <TextInput style={style.txtDescEvento}
                multiline={true} editable={false}
                value={'Breve Descrição'} numberOfLines={2}
                />
            </View>

            <View style={style.containerHorarioEventoCad}>
                <View style={style.boxEventoData}>
                    <Text style={style.txtEvento}>14/09/2022</Text>
                    <Text style={style.txtEvento}>22:00</Text>
                </View>
                <View style={style.lixoEventoCad}>
                    <TouchableOpacity>
                        <Image source={require('../image/lixinho.png')} style={style.lixinho} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}