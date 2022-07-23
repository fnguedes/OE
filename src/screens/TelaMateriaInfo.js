import { View, TextInput,Text ,KeyboardAvoidingView} from 'react-native'
import React from 'react'
import style from '../Style/style'
import Tilt from '../components/TituloSecond'
import Salvar from '../components/ButtonGenerico'
import Tarefa from '../components/Tarefa'
import Adicionar from '../components/ButtonAdicionar'
export default function TelaMateriaInfo({ navigation }) {
  return (
    <View style={style.background}>
      <Tilt titulo='Processamento de Imagens' navigation={navigation} />

      <View style={style.containerInfos}>

        <View style={style.containerNomeDesc}>
          <View style={style.containerNome}>
            <TextInput style={style.txtNomeProfMatInfo} 
            placeholder='Beatriz Trinchao'
            maxLength={30} 
            />
          </View>
          <Text style={style.txtMiniTitle}>Descrição</Text>
          <TextInput style={style.containerDesc} 
          multiline={true} numberOfLines={5}
          />
          
        </View>

        <View style={style.containerHrs}>
          <Text style={style.txtMiniTitle}>Horário</Text>
          <View style={style.tabHrs}></View>
        </View>
      </View>

      <View style={style.containerAtividades}>
        <Text style={style.txtMiniTitle}>Tarefas a fazer</Text>

        <View style={style.listAtividades}>
          <View style={{flex:1}}>
          <Tarefa />
          </View>

          <View style={style.botaoAdicionarTarefa}>
          <Adicionar navigation={navigation} tela={'Tela Adicionar Tarefa'}/>
          </View>
          
        </View>

      </View>
      <View style={style.buttonSave}>
        <Salvar>Salvar</Salvar>

      </View>
      {/*
      <View style={style.containerInfos}>

        <View style={style.containerNomeDesc}>

        </View>

         <View style={style.containerHrs}>
        </View>

      </View>
      <View style={style.containerAtividades}>

      </View>
      <View style={style.buttonSave}>
      </View> */}

    </View>
  )
}