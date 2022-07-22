import { View, Text } from 'react-native'
import React from 'react'
import style from '../Style/style'
import Tilt from '../components/TituloSecond'
import Salvar from '../components/ButtonGenerico'
export default function TelaMateriaInfo({ navigation }) {
  return (
    <View style={style.background}>
      <Tilt titulo='Processamento de Imagens' navigation={navigation} />

      <View style={style.containerInfos}>

        <View style={style.containerNomeDesc}>
          <View style={style.containerNome}>
            <Text style={style.txtNomeProfMatInfo}>Beatriz Trinchao</Text>
          </View>

          <Text style={style.txtMiniTitle}>Descrição</Text>
          <View style={style.containerDesc}>
          </View>
        </View>

        <View style={style.containerHrs}>
          <Text style={style.txtMiniTitle}>Horário</Text>
          <View style={style.tabHrs}></View>
        </View>

      </View>
      <View style={style.containerAtividades}>
        <Text style={style.txtMiniTitle}>Tarefas a fazer</Text>
        <View style={style.listAtividades}></View>

      </View>
      <View style={style.buttonSave}>
        <Salvar>Salvar</Salvar>
      </View>

    </View>
  )
}