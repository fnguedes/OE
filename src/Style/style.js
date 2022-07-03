import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    //Tela Inicial 
    background:{
        flex:1,
        backgroundColor:"#B3DDE3"
       },
    container:{
        flex:18

    },
    barra:{
        width: Dimensions.get('window').width - Dimensions.get('window').width*0.1,
        height: 1,
        backgroundColor:"#fff",
        alignSelf:'center'
    },
    ContTitulo:{
        flex:2
    },
    tituloPag:{
        alignSelf:'center',
        paddingTop:10,
        fontSize:26,
    },
    TxtTitulo:{
        fontSize:20,
        paddingLeft:Dimensions.get('window').width*0.05,
        // fontFamily: DancingScript_600SemiBold
    },
        
    
    //TabBar

    ContTab:{
        height:window.height*0.1,
        width: window.width,
        backgroundColor:"#2E2C2C",
        justifyContent:"space-evenly",
        alignItems:"stretch",
        
    },
    ButtonTab:{
        borderRadius:50,
        width: Dimensions.get('window').width/6,
        height: Dimensions.get('window').width/6,
        backgroundColor:"#fff",
        alignItems:'center',
        justifyContent:'center',
    },
    ContainerButton:{
        borderRadius:50,
        width: Dimensions.get('window').width/6 + (Dimensions.get('window').width/6)*0.2,
        height: Dimensions.get('window').width/6 + (Dimensions.get('window').width/6)*0.2,
        backgroundColor:"#2E2C2C",
        alignItems:'center',
        justifyContent:'center',
        marginBottom:40
    },
    ContainerButtonAtivo:{
        borderRadius:50,
        width: Dimensions.get('window').width/6 + (Dimensions.get('window').width/6)*0.2,
        height: Dimensions.get('window').width/6 + (Dimensions.get('window').width/6)*0.2,
        backgroundColor:"#B3DDE3",
        alignItems:'center',
        justifyContent:'center',
        marginBottom:40
    },
    image:{
        width: (Dimensions.get('window').width/4) -(Dimensions.get('window').width/4)*0.33,
        height: Dimensions.get('window').height/15  
    },
    imageMe:{
        width: (Dimensions.get('window').width/8),
        height: Dimensions.get('window').width/8 
    },
    
    
    //Tela Evento
    //Botão Adicionar
    BotaoAdicionar:{
        width: Dimensions.get('window').width/9,
        height: Dimensions.get('window').width/9,
        marginRight:Dimensions.get('window').width/20,
        backgroundColor:'#1B2796',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
    },
    txtAdicionar:{
        fontSize:35 ,
        alignItems:'center',
        justifyContent:'center',
        fontWeight:'bold',
        color:"#fff",
        paddingBottom:6,
    },
    //Tela de Evento
    containerEventos:{
        flex:20,

    },
    containerEventos:{
        flex:17
    },
    containerAdicionarEvento:{
        flex:3,
        alignItems:'flex-end'
    }
})
