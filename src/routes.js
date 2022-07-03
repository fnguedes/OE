import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import style from './Style/style'
import {Dimensions, Image} from 'react-native'
import TelaI from './screens/TelaInicial'
import TelaC from './screens/TelaCad'
import TelaH from './screens/TelaHorarios'
import TelaE from './screens/TelaEvento'
import Botao from './components/Button'

const Tab= createBottomTabNavigator();

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
                    // <Botao caminho={require('./image/casa.png')} inicial={true}/>
                )
            }}
            />

            <Tab.Screen name="Tela Caderno" component={TelaC}
             options={{
                tabBarIcon: ({size,color})=> (
                    color == "#fff"?
                    <Botao ativo={false} caminho={require('./image/caderno.png')}/>:
                    <Botao ativo={true} caminho={require('./image/caderno.png')}/> 
                    // <Botao caminho={require('./image/caderno.png')}/>
                )
            }}
            />

            <Tab.Screen name="Tela Horarios" component={TelaH}
             options={{
                tabBarIcon: ({size,color})=> (
                    color == "#fff"?
                    <Botao ativo={false} caminho={require('./image/calendario.png')}/>:
                    <Botao ativo={true} caminho={require('./image/calendario.png')}/> 
                    // <Botao caminho={require('./image/calendario.png')}/>
                )
            }}
            />

            <Tab.Screen name="Tela Eventos" component={TelaE}
             options={{
                tabBarIcon: ({color})=>(
                    
                    // <Image source={require('./image/event.png')} style={style.imageMe}/>
                     color == "#fff"?
                     <Botao ativo={false} caminho={require('./image/event.png')}/>:
                     <Botao ativo={true} caminho={require('./image/event.png')} /> 
                    )
                    
            }}
            />

        </Tab.Navigator>
    )
}

