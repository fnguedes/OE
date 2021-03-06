import { Cinzel_400Regular } from '@expo-google-fonts/cinzel'
import { Courgette_400Regular } from '@expo-google-fonts/courgette'
import { Parisienne_400Regular } from '@expo-google-fonts/parisienne'
import { Unna_400Regular } from '@expo-google-fonts/unna'
import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:"#B3DDE3"
    },
    //*Tela Inicial 
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
        fontFamily:'DancingScript_600SemiBold'
    },
    TxtTitulo:{
        fontSize:20,
        fontWeight:'500',
        paddingLeft:Dimensions.get('window').width*0.05,
        fontFamily: 'DancingScript_600SemiBold'
    },
        
    
    //*TabBar

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
    //*Tela Hor??rio

    containerTabelaHorarios:{
        flex:12,
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
        marginBottom:20,
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
        elevation:4
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
        alignSelf:'center',
        fontFamily:'Unna_400Regular'
    },
    txtHoras:{
        maxHeight:'100%',
        fontSize:8,
        textAlignVertical:'center',
        alignSelf:'center',
        fontFamily:'Tinos_400Regular'
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
        alignItems:'center',
        elevation:4
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
        borderBottomRightRadius:10,
        elevation:4
    },

    //*Componente Evento
    containerComponenteEvento:{
        width: (Dimensions.get('window').width/20)*17,
        height: (Dimensions.get('window').width/20)*2,
        backgroundColor:'#fff',
        borderRadius:25,
        elevation:4,
        marginTop:10
    },
    nivelPrioridade:{
        width: "6.5%",
        height: "100%",
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        backgroundColor:"#2CEA37"
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
        justifyContent:'center',
        marginRight:5
    },
    txtInfoEventoTitulo:{
        paddingLeft:5,
        paddingTop:2,
        flex:1,
        fontFamily:'Courgette_400Regular',
        fontSize:13
    },
    txtInfoEventoDesc:{
        fontSize:9,
        paddingLeft:5,
        flex:1,
        fontFamily:'Cinzel_400Regular'
    },
    txtHorarioEvento:{
        fontWeight:'700'
    },
    txtHoraEvento:{
        fontWeight:'500',
        fontFamily:'Cinzel_400Regular',
        fontSize:10
    },

    //*Componente Materia
    containerComponenteMateria:{
        width: (Dimensions.get('window').width/20)*17,
        height: (Dimensions.get('window').width/20)*2,
        flexDirection:'row',
        backgroundColor:'#ACAFFF',
        borderRadius:30,
        marginTop:15,
        elevation:4
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
        justifyContent:'center',
    },
    txtSigla:{
        fontSize:30,
        color:'#fff',
        fontFamily:'Merriweather_900Black'
    },
    boxNomeProf:{
        height:'100%',
        width: '53.5%',
        justifyContent:'center'
    },
    txtNomeProf:{
        marginLeft:7,
        fontSize:13,
        fontFamily:'Courgette_400Regular'
    },
    boxHoraAula:{
        height:'100%',
        width: '25%',
        justifyContent:'center'
    },
    txtHoraAula:{
        fontSize:10,
        fontFamily:'Cinzel_400Regular',
    },
    lixoImage:{
        width: (Dimensions.get('window').width/10),
        height: Dimensions.get('window').width/10 
    },
    //*Componente Mat??ria Cadastrada

    ContainerMatCadastrada:{
        width: (Dimensions.get('window').width/20)*17.5,
        height: (Dimensions.get('window').width/20)*2.5,
        backgroundColor:'#acaFFF',
        marginTop:20,
        borderRadius:11,
        elevation:4
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
        fontSize:10,
        marginLeft:7,
        fontFamily:'Cinzel_400Regular'
    },
    lixo:{
        height: '100%',
        width: '10%',
        alignItems:'center',
        justifyContent:'center',
        marginRight:10
    },
    
    //*Bot??o Adicionar
    BotaoAdicionar:{
        width: Dimensions.get('window').width/9,
        height: Dimensions.get('window').width/9,
        marginRight:Dimensions.get('window').width/20,
        backgroundColor:'#1B2796',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        elevation:4,
        
    },
    txtAdicionar:{
        fontSize:26 ,
        alignItems:'center',
        justifyContent:'center',
        fontWeight:'500',
        color:"#fff",
        paddingBottom:2
    },
    //*Tela de Evento
    
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
        height: (Dimensions.get('window').width/20)*5.5,
        backgroundColor:'#fff',
        borderRadius:19,
        marginTop:20,
        elevation:4
        },
    boxEventoCad:{
        width: '100%',
        height: '25%',
        backgroundColor:'#6AEA77',
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:19,
        borderTopRightRadius:19
    },
    boxDescEventoCad:{
        width: '100%',
        height: '50%',
        padding: 5,
        justifyContent:'center'
    },
    containerHorarioEventoCad:{
        width: '100%',
        height: '25%',
        backgroundColor:'#D9D9D9',
        flexDirection:'row',
        borderBottomRightRadius:19,
        borderBottomLeftRadius:19,
        elevation:4
    },
    boxEventoData:{
        height: '100%',
        width: '70%',
        paddingLeft:15,
        alignItems:'center',
        flexDirection:'row'
    },
    lixoEventoCad:{
        height: '100%',
        width: '30%',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:10

    },
    txtTituloEventoCad:{
        fontFamily:'Courgette_400Regular',
    },
    txtDescEvento:{
        height: '100%',
        width: '100%',
        fontSize:14,
        fontFamily:'Parisienne_400Regular',
        textAlignVertical:'center',
        color:'#000'
    },
    txtEvento:{
        fontSize:10,
        fontFamily:'Cinzel_400Regular',
        marginRight:15
    },
    lixinho:{
        width: Dimensions.get('window').width/20,
        height: Dimensions.get('window').width/20,
        marginRight:12
    },
    //*Componente do bot??o de voltar p??gina
    containerButtonBack:{
        backgroundColor:'#B3DDE3'
    },
    buttonBack:{
        width: Dimensions.get('window').width/11,
        height: Dimensions.get('window').width/11,
        marginTop:8,
        marginLeft:8
    },
    //*Tela Materia cadastrada
    containerTituloMC:{
        flexDirection:'row',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/15,
    },
    contTituloPagNv2:{
        width: (Dimensions.get('window').width/11)*10,
        height: '100%',
    },
    tituloPagNV2:{
        alignSelf:'center',
        paddingTop:10,
        flex:1,
        fontSize:26,
        fontFamily:'DancingScript_600SemiBold',
    },
    containerInfos:{
        width: '100%',
        height:'30%',
        flexDirection:'row',
        marginTop:5
    },
    containerNomeDesc:{
        width: '55%',
        height: '100%',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginLeft:'5%'
    } ,
    containerNome:{
        width: '100%',
        height: '12%',
        backgroundColor:'#fff',
        borderRadius:20,
        marginTop:'10%',
        alignItems:'flex-start',
        justifyContent:'center',
        paddingLeft:8,
        paddingRight:8
    },
    containerDesc:{
        width: '100%',
        height: '79%',
        backgroundColor:'#fff',
        borderRadius:20,
        padding: 10,
        color:'#9C9C9C',
        fontFamily: 'Courgette_400Regular',
        fontSize:13,
        textAlignVertical:'top',
        textDecorationLine:'underline'
    },
    containerHrs:{
        width: '30%',
        height: '100%',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginRight:'5%',
        marginLeft:'5%'
    },
    tabHrs:{
        width: '100%',
        height: '100%',
        backgroundColor:'#fff',
        borderRadius:20
    },
    txtMiniTitle:{
        fontFamily:'Courgette_400Regular',
        fontSize:13,
        marginTop:5,
        marginBottom:3,
        alignSelf:'center'
    },
    txtNomeProfMatInfo:{
        fontFamily:'Courgette_400Regular',
        fontSize:11,
        color: '#9C9C9C'
    },
    containerAtividades:{
        width: '100%',
        height:'45%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    },
    listAtividades:{
        width: '90%',
        height:'80%',
        backgroundColor:'#fff',
        borderRadius:20,
        padding:20,
        
    },
    buttonSave:{
        width: '100%',
        height:'10%',
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:10
    },




    //*But??o Generico pra cadastrar e salvar
    containerButtonGe:{
        width: Dimensions.get('window').width/5,
        height: Dimensions.get('window').width/10,
        backgroundColor:'#1B2796',
        justifyContent:'center',
        alingnItems:'center',
        borderRadius:15,
        elevation:4
    },
    txtButtonGe:{
        fontSize:17,
        color:'#fff',
        alignSelf:'center',
        fontWeight:'bold',
    },
    //*Componente Tarefa
    containerGeralTarefa:{
        width: '100%',
        height: '21%',
        paddingBottom:'4%',
        flexDirection:'row'
    },
    containerTarefa:{
        width: '72%',
        height: '100%',
        backgroundColor:'#9DF5A6',
        borderRadius:25,
        flexDirection:'row',
        elevation:2
    },
    prioridadeTarefa:{
        backgroundColor:'#2BED3F',
        width: '10%',
        height:'100%',
        borderRightWidth:1,
        borderRightColor:'#909090',
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25
    },
    tituloTarefa:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start',
        paddingLeft:3
    },
    txtTituloTarefa:{
        fontFamily:'EmilysCandy_400Regular',
        fontSize:13
    },
    dataTarefa:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        flexDirection:'row'
    },
    txtDataTarefa:{
        fontFamily:'Cinzel_400Regular',
        fontSize:10,
        paddingRight:6,
    },
    concluirTarefa:{
        height:'100%',
        width: '11%',
        backgroundColor:'#2BED3F',
        marginLeft:10,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    deletarTarefa:{
        height:'100%',
        width: '11%',
        backgroundColor:'#f00',
        marginLeft:10,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'

    },
    imageTarefa:{
        width: Dimensions.get('window').width/14,
        height: Dimensions.get('window').width/14
    },
    botaoAdicionarTarefa:{
        width:(Dimensions.get('window').width/10)*8.7,
        height: '12%',
        justifyContent:'center',
        alignItems:'flex-end'
    }
    
})
