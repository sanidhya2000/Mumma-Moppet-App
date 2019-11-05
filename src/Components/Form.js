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
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

const initialState={

  name:"",
  email:"",
  password:""

}

class Form extends Component{

  constructor(props){
    super();
    this.state=initialState
  }

  nameHandler=(value)=>{
    this.setState({name:value})
  }

  emailHandler=(value)=>{
    this.setState({email:value})
  }

  passwordHandler=(value)=>{
    this.setState({password:value})
  }

  signingUp=()=>{
    this.props.SignUp(this.state.email,this.state.name,this.state.password)
  }

  render(){
    return(

      <View style={styles.container}>
        
        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder="Email"
        placeholderTextColor='#ffffff'
        value={this.state.email} 
        onChangeText={this.emailHandler}
        />
        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder="Name"
        placeholderTextColor='#ffffff'
        value={this.state.name} 
        onChangeText={this.nameHandler}
        />
        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder="Password"
        placeholderTextColor='#ffffff'
        secureTextEntry={true}
        value={this.state.password} 
        onChangeText={this.passwordHandler}
        />

        {this.props.showSpinner ? 
         <ActivityIndicator style={styles.spinner} size="small" color="#ffffff" />:
        <TouchableOpacity style={styles.button} onPress={this.signingUp}>
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
      }
      </View>


      )
  }

}

export default Form;

const styles=StyleSheet.create({
  container : {
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center'
  },
  inputBox:{
    width:300,//320max
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical:5

  },
  buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center',

  },
  button:{
    width:150,
    backgroundColor:'#ba2d65',
    borderRadius: 25,
    color:'#ffffff',
    marginVertical:10,
    paddingVertical:12
  },
  spinner:{
    width:150,
    borderRadius: 25,
    color:'#ffffff',
    marginVertical:10,
    paddingVertical:12,
    backgroundColor:'#ba2d65'
  }
  
})
