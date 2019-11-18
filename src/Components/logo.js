/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';


class Logo extends Component{

  constructor(props){
    super();

  }

  render(){
    return(

      <View style={styles.container}>
        
        <Image style={styles.images} source={require('../assets/bb3.png')}/>
        <Text style={styles.logoText} > Welcome to Mumma Moppet</Text> 

      </View>


      )
  }

}

export default Logo;

const styles=StyleSheet.create({
  container : {
    flexGrow:1,
    justifyContent:'flex-end',
    alignItems:'center'

  },
  images:{
    width:100,
    height : 100
  },
  logoText:{
    marginVertical:15,
    fontSize:20,
    color:'rgba(255,255,255,0.7)',
    fontWeight:"bold"
  }
})
