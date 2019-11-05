/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import Logo from '../Components/logo'
import Form from '../Components/Form'
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
  ToastAndroid
} from 'react-native';
import axios from 'axios'
import {connect} from 'react-redux'
import {setUuid} from '../store/actions/index'


const initialState={
   showSpinner:false
}
class SignUp extends Component{

  constructor(props){
    super();
    this.state=initialState;
  }
static navigationOptions={
      header:null
    }


validateInputs=(email,name,password)=>{

  if(email=="" || !email.includes('@') || !email.includes('.') ){
    ToastAndroid.show('Please Enter Valid Email', ToastAndroid.SHORT);
    return false;
  }
  else if(name==""){
    ToastAndroid.show('Please Enter Your Name', ToastAndroid.SHORT);
    return false;
  }
  else if(password=="" || password.length < 6 ){
      ToastAndroid.show('Please Enter valid password must be greater than 6', ToastAndroid.SHORT);
      return false;
    }
  else{
    return true;
  }

}


onSignUp=(email,name,password)=>{

      this.setState({showSpinner:true})    
      if(this.validateInputs(email,name,password)){
      
      axios.post('https://backtestbaby.herokuapp.com/api/signup',{
        email:email,
        name:name,
        password:password
      })
      .then(data=>{
        console.log(data)
        if(data.data.exists==false){
          this.setState({showSpinner:false})
          this.props.setingUuid(data.data.uuid)
          this.props.navigation.navigate('Register')
        }
        else{
          this.setState({showSpinner:false})
        ToastAndroid.show('SignUp UnSuccessfull :( check Entries or Network Connection!!', ToastAndroid.SHORT);
        
        }
      })
      .catch(err=>{
        this.setState({showSpinner:false})
        ToastAndroid.show('SignUp UnSuccessfull :( check Entries or Network Connection!!', ToastAndroid.SHORT);
        //console.log(err);
      })
    }

    else{
      this.setState({showSpinner:false})
      //ToastAndroid.show('SignUp UnSuccessfull :( check Entries or Network Connection!!', ToastAndroid.SHORT);
    }


    }

  render(){

    console.log(this.props)

    return(

      <View style={styles.container}>
           <StatusBar backgroundColor="#ba2d65" barStyle="light-content" /> 
          <Logo/>
          <Form SignUp={this.onSignUp} showSpinner={this.state.showSpinner}/>
          <View style={styles.loginTextCont}>
           <Text style={styles.loginText}>Already a Member ? </Text>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
           <Text style={styles.loginButton}>Login</Text>
           </TouchableOpacity>
          </View>
           
      </View>


      )
  }

}



const styles=StyleSheet.create({
  container : {
    backgroundColor : '#f48fb1',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  loginTextCont:{
    flexGrow:1,
    alignItems:'flex-end',
    justifyContent:'center',
    color:'#ffffff',
    paddingVertical:16,
    flexDirection:'row'
  },
  loginText:{
    color:'rgba(255,255,255,0.7)',
    fontSize:16
  },
  loginButton:{
    color:'#ffffff',
    fontSize:16,
    fontWeight:"bold"
  }
})

const mapStateToProps=state=>{
  return{
    uuid:state.userReducer.uuid
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    setingUuid:(userId)=>dispatch(setUuid(userId)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);