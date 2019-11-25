import React,{Component} from 'react';

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
  ActivityIndicator,
  AsyncStorage,
  Image
} from 'react-native';

import {connect} from 'react-redux'
import {setUuid,setUserDetail} from '../store/actions/index'
import axios from 'axios'


class AuthLoadingScreen extends Component {
  constructor(props){
    super(props);
    this.loadData();
  }

  static navigationOptions={
      header:null
    }
  


  loadData=async()=>{

      const UserLoggedIn = await AsyncStorage.getItem('UserLoggedIn');

      if(UserLoggedIn !=="true"){
        this.props.navigation.navigate('Auth')
      }
     else{
      const userId = await AsyncStorage.getItem('uuid');
      this.props.setingUuid(userId)
      axios.get(`https://backtestbaby.herokuapp.com/api/dashBoard/userInfo/${userId}`)
           .then(data=>{
            if(data.data.babyName == undefined){
              this.props.navigation.navigate('Register');
              ToastAndroid.show('First Complete Your Registration :)', ToastAndroid.SHORT);
            }
            else{
              
              this.props.settingUserDetail(data.data.userName,data.data.babyName,data.data.avtarId)}
              this.props.navigation.navigate('App')
      });
     }
     
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ba2d65" barStyle="light-content" /> 
        <View style={{flexGrow:1, alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../assets/innerLogo2.png') } style={{height:400,width:400}} />
        <Text style={{color:'#f48fb1',fontSize:25,fontWeight:'bold'}}> Welcome to Mumma's Moppet </Text>   
        </View>  
      </View>
    );
  }

}

const styles = StyleSheet.create({
  conatiner:{
    backgroundColor : '#f48fb1',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
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
    settingUserDetail:(userName,babyName,avtaarId)=>dispatch(setUserDetail(userName,babyName,avtaarId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthLoadingScreen);
