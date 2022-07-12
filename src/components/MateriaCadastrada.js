import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from '../Style/style'

export default function MateriaCadastrada() {
    return (
        <View style={style.ContainerMatCadastrada}>
            <View style={{ flexDirection: 'row',flex:1 }}>
                <View style={style.boxSiglaMatCad}>
                    <Text style={style.txtSigla}>PI</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ justifyContent: 'space-evenly',flex:1}}>
                        <Text style={style.txtNomeProf}>Beatriz Trinchao</Text>
                        <Text style={style.txtNomeMat}>Processamento de Imagens</Text>
                    </View>
                </View>
                <TouchableOpacity style={style.lixo}></TouchableOpacity>
            </View>

        </View>
    )
}