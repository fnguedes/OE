import { View, Text, TouchableOpacity,Image} from 'react-native'
import React from 'react'
import style from '../Style/style'

export default function MateriaCadastrada({navigation}) {
    return (
        <TouchableOpacity style={style.ContainerMatCadastrada} onPress={()=>navigation.navigate('Tela Info Materia')}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
                <View style={style.boxSiglaMatCad}>
                    <Text style={style.txtSigla}>PI</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ justifyContent: 'space-evenly', flex: 1 }}>
                        <Text style={style.txtNomeProf}>Beatriz Trinchao</Text>
                        <Text style={style.txtNomeMat}>Processamento de Imagens</Text>
                    </View>
                </View>
                <TouchableOpacity style={style.lixo}>
                    <Image source={require('../image/lixo.png')} style={style.lixoImage}/>
                </TouchableOpacity>
            </View>

        </TouchableOpacity>
    )
}