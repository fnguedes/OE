import { DancingScript_600SemiBold } from '@expo-google-fonts/dancing-script'
import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:"#B3DDE3"
    },
    //Tela Inicial 
    container:{
        flex:18,
        alignItems:'center'

    },
    containerEventoDia:{
        flex:23,
        alignItems:'center'

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
        fontFamily:DancingScript_600SemiBold
    },
    TxtTitulo:{
        fontSize:14,
        fontWeight:'500',
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
    //*Tela Horário

    containerTabelaHorarios:{
        flex:12,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        marginBottom:20
    },
    containerTabela:{
        width: "90%",
        height: '100%',
        alignItems:'center',
        justifyContent:'center',
    },
    eventosSemanais:{
        flex:8,
        marginTop:10
    },
    dias:{
        flexDirection:'row',
        width: '100%',
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
        width: '100%',
        height: '100%',
        flexDirection:'row',
    },
    horas:{
        width: '12.5%',
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
    boxTxtHoras:{
        width: "100%",
        height: "90%",
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
        fontSize:8.5,
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
        width: '12.5%',
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
    //*Componente Evento
    containerComponenteEvento:{
        width: (Dimensions.get('window').width/20)*17,
        height: (Dimensions.get('window').width/20)*2,
        backgroundColor:'#fff',
        borderRadius:25,
        elevation:2,
        marginTop:10
    },
    nivelPrioridade:{
        width: "8%",
        height: "100%",
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        backgroundColor:"#0f0"
    },
    boxInfoEvento:{
        width: "72%",
        height: "100%",
    },
    boxHorarioEvento:{
        width: "20%",
        height: "100%",
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
        alignItems:'center',
        justifyContent:'center'
    },
    txtInfoEventoTitulo:{
        fontWeight:'bold',
        paddingLeft:5,
        paddingTop:2,
        flex:1
    },
    txtInfoEventoDesc:{
        fontSize:11,
        paddingLeft:5,
        flex:1
    },
    txtHorarioEvento:{
        fontWeight:'700'
    },
    txtHoraEvento:{
        fontWeight:'600'
    },
    //Componente Materia
    containerComponenteMateria:{
        width: (Dimensions.get('window').width/20)*17,
        height: (Dimensions.get('window').width/20)*2,
        flexDirection:'row',
        backgroundColor:'#ACAFFF',
        borderRadius:30,
        elevation:2
    },
    boxSiglaMat:{
        height:'100%',
        width: '21.5%',
        backgroundColor:'#1B2796',
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        alignItems:'center',
        justifyContent:'center'
        
    },
    txtSigla:{
        fontSize:30,
        fontWeight:'bold',
        color:'#fff'
    },
    boxNomeProf:{
        height:'100%',
        width: '53.5%',
        justifyContent:'center'
    },
    txtNomeProf:{
        marginLeft:7,
        fontWeight:'600',
        fontSize:13
    },
    boxHoraAula:{
        height:'100%',
        width: '25%',
        justifyContent:'center'
    },
    txtHoraAula:{
        fontSize:12,
        fontWeight:'500'
    },
    //Componente Matéria Cadastrada

    ContainerMatCadastrada:{
        width: (Dimensions.get('window').width/20)*17.5,
        height: (Dimensions.get('window').width/20)*2.5,
        backgroundColor:'#ACAFFF',
        marginTop:10,
        borderRadius:11,
        elevation:2
    }, 
    boxSiglaMatCad:{
        height:'100%',
        width: '20%',
        backgroundColor:'#1B2796',
        borderRadius:11,
        alignItems:'center',
        justifyContent:'center'
    },
    txtNomeMat:{
        fontSize:11,
        marginLeft:7
    },
    lixo:{
        height: '100%',
        width: '15%',
        alignItems:'center',
        justifyContent:'center'
    },
    
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
        fontSize:26 ,
        alignItems:'center',
        justifyContent:'center',
        fontWeight:'500',
        color:"#fff",
        paddingBottom:2
    },
    //Tela de Evento
    
    containerEventos:{
        flex:17,
        alignItems:'center'
    },
    containerAdicionarEvento:{
        flex:3,
        alignItems:'flex-end'
    },

    //*Componente Evento Cadastrado

    containerEventoCad:{
        width: (Dimensions.get('window').width/20)*17,
        height: (Dimensions.get('window').width/20)*6.5,
        backgroundColor:'#fff',
        borderRadius:19
        },
    boxEventoCad:{
        width: '100%',
        height: '20%',
        backgroundColor:'#6AEA77',
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:19,
        borderTopRightRadius:19
    },
    boxDescEventoCad:{
        width: '100%',
        height: '60%',
        padding: 5
    },
    containerHorarioEventoCad:{
        width: '100%',
        height: '20%',
        backgroundColor:'#D9D9D9',
        flexDirection:'row',
        borderBottomRightRadius:19,
        borderBottomLeftRadius:19
    },
    boxEventoData:{
        height: '100%',
        width: '70%',
        paddingLeft:15,
        justifyContent:'center'
    },
    lixoEventoCad:{
        height: '100%',
        width: '30%',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:10

    },
    txtTituloEventoCad:{
        fontWeight:'600'
    },
    txtDescEvento:{
        height: '100%',
        width: '100%',
        fontSize:12
    },
    txtEvento:{
        fontSize:12,
        fontWeight:'600'
    }
})
