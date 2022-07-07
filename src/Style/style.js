import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:"#B3DDE3"
    },
    //Tela Inicial 
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
        height:Dimensions.get('window').height/25 ,
        width: "100%"
    },
    tituloPag:{
        alignSelf:'center',
        paddingTop:10,
        fontSize:26,
    },
    TxtTitulo:{
        fontSize:17,
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
    //Tela Horário

    containerTabelaHorarios:{
        flex:12,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10
    },
    eventosSemanais:{
        flex:8,
        marginTop:10
    },
    dias:{
        flexDirection:'row',
        width: (Dimensions.get('window').width/10)*8,
        height: "7.69%",
    },
    boxVazia:{
        width: '12.5%',
        height :'100%' ,    
        backgroundColor:'#fff',
        borderColor:"#808080",
        borderBottomWidth:1,
        borderRightWidth:1,
        borderTopLeftRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    boxDias:{
        width: '12.5%',
        backgroundColor:'#fff',
        height :'100%' ,    
        borderColor:"#808080",
        borderWidth:1,
        borderLeftWidth:0,
        borderTopWidth:0,
        justifyContent:'center',
        alignItems:'center'
    },
    boxDiasFinal:{
        width: '12.5%',
        height :'100%' ,    
        backgroundColor:'#fff',
        borderColor:"#808080",
        borderBottomWidth:1,
        borderTopRightRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    containerColunasHorarios:{
        flex:1,
        flexDirection:'row'
    },
    horas:{
        width: (Dimensions.get('window').width/10)*1,
        height: "100%"
    },
    boxHoras:{
        width: '100%',
        height: '8.3%',
        backgroundColor:"#fff",
        borderColor:"#808080",
        borderBottomWidth:1,
        borderRightWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    boxHorasFinal:{
        width: '100%',
        height: '8.3%',
        backgroundColor:"#fff",
        borderColor:"#808080",
        borderRightWidth:1,
        borderBottomLeftRadius:10,
        justifyContent:'center',
        alignItems:'center',

    },
    txtDias:{
        fontSize:12,
        textAlignVertical:'center',
        alignSelf:'center'
    },
    txtHoras:{
        maxHeight:'100%',
        fontSize:9,
        textAlignVertical:'center',
        alignSelf:'center'
    },
    txtHorasBarra:{
        height: '0.5%',
        fontSize:9,
        textAlignVertical:'center',
        alignSelf:'center'
    },
    aulasDaSemana:{
        width: (Dimensions.get('window').width/10)*1,
        height: "100%"
    },
    boxAulas:{
        width: '100%',
        height: '8.3%',
        backgroundColor:"#fff",
        borderColor:"#808080",
        borderBottomWidth:1,
        borderRightWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    boxAulasUltimaLinha:{
        width: '100%',
        height: '8.3%',
        backgroundColor:"#fff",
        borderColor:"#808080",
        borderRightWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    boxAulasUltimo:{
        width: '100%',
        height: '8.3%',
        backgroundColor:"#fff",
        borderColor:"#808080",
        borderBottomWidth:1,    
        justifyContent:'center',
        alignItems:'center'
    },
    boxAulasUltimoCanto:{
        width: '100%',
        height: '8.3%',
        backgroundColor:"#fff",
        borderColor:"#808080",
        justifyContent:'center',
        alignItems:'center',
        borderBottomRightRadius:10
    },
    //Componente Evento

    
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
