import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaAT from './screens/TelaTarefa'
import TelaMI from './screens/TelaMateriaInfo'
import TelaMC from './screens/TelaMateriaCad'
import TelaM from './screens/TelaMaterias'
import TelaI from './screens/TelaInicial'
import TelaH from './screens/TelaHorarios'
import TelaE from './screens/TelaEvento'
import TelaEC from './screens/TelaEventoCad'
import Botao from './components/Button'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const EStack = () => {
    return (
        
        <Stack.Navigator initialRouteName='Tela Evento'>
            <Stack.Screen name="Tela Evento" component={TelaE} options={{ headerShown: false }} />
            <Stack.Screen name="Tela Cadastro Evento" component={TelaEC} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const MStack = () => {
    return (
        <Stack.Navigator initialRouteName='Tela Materia'>
            <Stack.Screen name="Tela Materia" component={TelaM} options={{ headerShown: false,title:'Tela das Materias' }} />
            <Stack.Screen name="Tela Info Materia" component={TelaMI} options={{ headerShown: false,title:'Tela Info da Materia' }} />
            <Stack.Screen name="Tela Cadastro Materia" component={TelaMC} options={{ headerShown: false,title:'Tela Cadastro da Materia' }} />
            <Stack.Screen name="Tela Adicionar Tarefa" component={TelaAT} options={{ headerShown: false,title:'Tela Cadastro da Materia' }} />
        </Stack.Navigator>
    )
}

export default function routes() {
    return (
        <Tab.Navigator
            initialRouteName='Tela Inicial'
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#2e2c2c",
                    borderTopColor: 'transparent'
                },
                tabBarItemStyle: {
                    padding: 5,
                    borderTopColor: 'transparent',
                },
                tabBarShowLabel: false,
                tabBarInactiveBackgroundColor: "#2e2c2c",
                tabBarInactiveTintColor: "#fff",
                tabBarActiveTintColor: "#000"
            }}
        >
            <Tab.Screen name="Tela Inicial" component={TelaI}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        color == "#fff" ?
                            <Botao ativo={false} caminho={require('./image/casa.png')} /> :
                            <Botao ativo={true} caminho={require('./image/casa.png')} />
                    )
                }}
            />

            <Tab.Screen name="Tela Materias" component={MStack}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        color == "#fff" ?
                            <Botao ativo={false} caminho={require('./image/caderno.png')} /> :
                            <Botao ativo={true} caminho={require('./image/caderno.png')} />
                    )
                }}
            />

            <Tab.Screen name="Tela Horarios" component={TelaH}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        color == "#fff" ?
                            <Botao ativo={false} caminho={require('./image/calendario.png')} /> :
                            <Botao ativo={true} caminho={require('./image/calendario.png')} />
                    )
                }}
            />

            <Tab.Screen name="Tela Eventos" component={EStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        color == "#fff" ?
                            <Botao ativo={false} caminho={require('./image/event.png')} /> :
                            <Botao ativo={true} caminho={require('./image/event.png')} />
                    )

                }}
            />

        </Tab.Navigator>
    )
}

