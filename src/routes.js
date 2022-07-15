import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaMI from './screens/TelaMateriaInfo'
import TelaMC from './screens/TelaMateriaCad'
import TelaI from './screens/TelaInicial'
import TelaC from './screens/TelaMaterias'
import TelaH from './screens/TelaHorarios'
import TelaE from './screens/TelaEvento'
import Botao from './components/Button'

const Tab= createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function routes(){
    return(
        <Tab.Navigator 
        initialRouteName='Tela Inicial'
        screenOptions={{
            headerShown: false,
            tabBarStyle:{
                backgroundColor:"#2e2c2c",
                borderTopColor:'transparent'  
            },
            tabBarItemStyle:{
                padding: 5,
                borderTopColor:'transparent',
            },
            tabBarShowLabel:false,
            tabBarInactiveBackgroundColor:"#2e2c2c",
            tabBarInactiveTintColor:"#fff",
            tabBarActiveTintColor:"#000"
            
        }}
        >
            <Tab.Screen name="Tela Inicial" component={TelaI}
            options={{
                tabBarIcon: ({size,color})=> (
                    color == "#fff"?
                    <Botao ativo={false} caminho={require('./image/casa.png')}/>:
                    <Botao ativo={true} caminho={require('./image/casa.png')}/>                     
                )
            }}
            />

            <Tab.Screen name="Tela Materias" component={TelaC}
             options={{
                tabBarIcon: ({size,color})=> (
                    color == "#fff"?
                    <Botao ativo={false} caminho={require('./image/caderno.png')}/>:
                    <Botao ativo={true} caminho={require('./image/caderno.png')}/>                     
                )
            }}
            />

            <Tab.Screen name="Tela Horarios" component={TelaH}
             options={{
                tabBarIcon: ({size,color})=> (
                    color == "#fff"?
                    <Botao ativo={false} caminho={require('./image/calendario.png')}/>:
                    <Botao ativo={true} caminho={require('./image/calendario.png')}/>                   
                )
            }}
            />

            <Tab.Screen name="Tela Eventos" component={TelaE}
             options={{
                tabBarIcon: ({color})=>(
                     color == "#fff"?
                     <Botao ativo={false} caminho={require('./image/event.png')}/>:
                     <Botao ativo={true} caminho={require('./image/event.png')} /> 
                    )
                    
            }}
            />

        </Tab.Navigator>
    )
}

