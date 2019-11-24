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
      'vaccine':{image:require('../../assets/vaccinea.png'),style:{width:220,height:220,marginLeft:-30,marginTop:-32}},
      'height' :{image:require('../../assets/heightTrack.png'),style:{width:200,height:200,marginLeft:-26,marginTop:-28}},
      'weight' :{image:require('../../assets/weightTrack.png'),style:{width:190,height:190,marginLeft:-20,marginTop:-22}},
      'blogs'  :{image:require('../../assets/weightTrack.png'),style:{width:185,height:185,marginLeft:-20,marginTop:-22}}
    }

		return(

			 <View style={styles.container}>
        
        <TouchableOpacity onPress={props.pressEvent}>  
          <View style={styles.iconHolder}>
            <Image style={state[props.image].style} source={state[props.image].image}/>
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
      marginBottom:20,
      //borderWidth:1
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
