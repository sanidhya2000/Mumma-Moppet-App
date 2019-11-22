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
  ToastAndroid,
  ActivityIndicator
} from 'react-native';
import axios from 'axios'
import {connect} from 'react-redux'
import {getUuid,setUserDetail} from '../store/actions/index'
import RegisterForm from '../Components/RegisterForm';
import { NavigationActions,StackActions  } from 'react-navigation'

const initialState={
   showSpinner:false
}
class Register extends Component{

  constructor(props){
    super();
    this.state=initialState;

  }
static navigationOptions={
      header:null
    }

validateInputs=(inputList)=>{

  const {babyName,fathersName,mothersName,dateOfBirth,gender,mobileNumber,city,avtarLink}=inputList;

  if(babyName==""){
    ToastAndroid.show('Please Enter Name of your Baby', ToastAndroid.SHORT);
    return false;
  }
  else if(fathersName==""){
    ToastAndroid.show('Please Enter Name of Father', ToastAndroid.SHORT);
    return false;
  }
  else if(mothersName==""){
    ToastAndroid.show('Please Enter Name of Mother', ToastAndroid.SHORT);
    return false;
  }
  else if(dateOfBirth=="Date of Birth"){
    ToastAndroid.show('Please Enter Valid Date of Birth', ToastAndroid.SHORT);
    return false;
  }
  // else if(Date(dateOfBirth).getTime() > Date().getTime()){
  //   ToastAndroid.show('Please Enter Valid Date of Birth', ToastAndroid.SHORT);
  //   return false;
  // }
  else if(gender=="Gender"){
    ToastAndroid.show('Please Select Gender of your Baby', ToastAndroid.SHORT);
    return false;
  }
  else if(mobileNumber=="" || mobileNumber.length>10 || mobileNumber.length<10 ){
    ToastAndroid.show('Please Enter Valid Mobile Number', ToastAndroid.SHORT);
    return false;
  }
  else if(city==""){
    ToastAndroid.show('Please Enter City', ToastAndroid.SHORT);

    return false;
  }
  else{
  return true;}


}

    completeRegistration=(inputs)=>{
      this.setState({showSpinner:true})
      if(this.validateInputs(inputs)){
          inputs.uuid=this.props.uuid;
          axios.post('https://backtestbaby.herokuapp.com/api/register',inputs)
          .then(data=>{
            if(data.data.status=="done"){
              this.setState({showSpinner:false})
              ToastAndroid.show('Registartion Successfull !!', ToastAndroid.SHORT);
              //this.props.navigation.navigate('DashBoard')
              this.props.navigation.dispatch(StackActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName: 'DashBoard' })]
}))
            axios.get(`https://backtestbaby.herokuapp.com/api/dashBoard/userInfo/${this.props.uuid}`)
           .then(data=>this.props.settingUserDetail(data.data.userName,data.data.babyName,data.data.avtarId));
            
            axios.post('https://backtestbaby.herokuapp.com/api/vaccination',{
              uuid:this.props.uuid,
              birthDate:inputs.dateOfBirth
            })
            .catch(err=>{
              console.log(err);
              ToastAndroid.show('Registartion UnSuccessfull :(!!', ToastAndroid.SHORT);
              this.props.navigation.navigate('SignUp')
            })

            }
            else{
              this.setState({showSpinner:false})
              ToastAndroid.show('Registartion UnSuccessfull :( check Entries!!', ToastAndroid.SHORT);
            }
          })
          .catch(err=>{
            this.setState({showSpinner:false})
            ToastAndroid.show('Registartion UnSuccessfull :( check Entries or Network Connection!!', ToastAndroid.SHORT);
            console.log(err)
          })
      }
      else{
        this.setState({showSpinner:false})
      }
      
    }

  render(){


    return(

      <View style={styles.container}>
           <StatusBar backgroundColor="#ba2d65" barStyle="light-content" /> 
          <Logo/>
          <RegisterForm completeRegistration={this.completeRegistration} showSpinner={this.state.showSpinner}/>
         
           
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
  
})

const mapStateToProps=state=>{
  return{
    uuid:state.userReducer.uuid
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    toGetUuid:(userId)=>dispatch(getUuid()),
    settingUserDetail:(userName,babyName,avtaarId)=>dispatch(setUserDetail(userName,babyName,avtaarId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);