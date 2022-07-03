import React from 'react'
import { View, Image, Text } from 'react-native'
import style from '../Style/style'

export default function Button(props) {
   
    return (
        
        
                <View style={props.ativo?style.ContainerButtonAtivo:style.ContainerButton}>
                    <View style={style.ButtonTab}>
                        {props.inicial ? <Image source={props.caminho} style={style.image} /> : <Image source={props.caminho} style={style.imageMe} />}
                    </View>
                </View> 
                // :<View style={style.ContainerButton}>
                //     <View style={style.ButtonTab}>
                //         {props.inicial ? <Image source={props.caminho} style={style.image} /> : <Image source={props.caminho} style={style.imageMe} />}
                //     </View>
                // </View>
        

    )
}
