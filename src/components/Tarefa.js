import { View, Text , TouchableOpacity, Image} from 'react-native'
import React from 'react'
import style from '../Style/style'

export default function Tarefa() {
    return (
        <View style={style.containerGeralTarefa}>
            <View style={style.containerTarefa}>
                <View style={style.prioridadeTarefa}></View>
                <View style={style.tituloTarefa}>
                    <Text style={style.txtTituloTarefa}>Exercicio</Text>
                </View>
                <View style={style.dataTarefa}>
                    <Text style={style.txtDataTarefa}>14/05/22 22:00</Text>
                </View>

            </View>

            <TouchableOpacity style={style.concluirTarefa}>
                <Image source={require('../image/concluido.png')} style={style.imageTarefa} />
            </TouchableOpacity>

            <TouchableOpacity style={style.deletarTarefa}>
                <Image source={require('../image/cancelar.png')} style={style.imageTarefa} />
            </TouchableOpacity>

        </View>
    )
}