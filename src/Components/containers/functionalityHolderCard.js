import React,{Component} from 'react'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
  Image
} from 'react-native';




const initialState={
   
}


const FunctionalCard =(props)=>{

    const state={
      'vaccine':require('../../assets/san12.png'),
      'height' :require('../../assets/san.png'),
      'weight' :require('../../assets/san1.png'),
      'blogs'  :require('../../assets/san1.png')
    }

		return(

			 <View style={styles.container}>
        
        <TouchableOpacity onPress={props.pressEvent}>  
          <View style={styles.iconHolder}>
            <Image style={styles.imageIcon} source={state[props.image]}/>
          </View>

          <View style={styles.textConatiner}>
            <Text style={styles.textMain}> {props.text} </Text>
          </View>
        </TouchableOpacity>
      </View>
			)
	


}



const styles=StyleSheet.create({
    
    container:{
      marginLeft:20,
      marginRight:10,
      marginBottom:20
    },

    iconHolder:{
      width:150,
      height:150,
      borderRadius:100,
    },

    textConatiner:{
      
      
      


    },
    textMain:{
      textAlign:'center',
      fontWeight:'bold',
      fontSize:18
    },

    imageIcon:{
      width:220,
      height:220,
      marginLeft:-34,
      marginTop:-32
    }

})


export default FunctionalCard;
