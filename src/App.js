/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import SignUp from './pages/signup'
import Login from './pages/login'
import Register from './pages/register'
import DashBoard from './pages/DashBoard'



import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  FlatList
} from 'react-native';

import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';


class App extends Component{

  constructor(props){
    super();

  }


  render(){
    return(

      <View style={styles.container}>
      <StatusBar backgroundColor="#ba2d65" barStyle="light-content" />
        <AppConatiner/>

      </View>


      )
  }

}

//export default App;

const styles=StyleSheet.create({
  container : {
    backgroundColor : '#f48fb1',
    flex : 1,
    alignItems:'center',
    justifyContent:'center'
  }
})


const RootStack=createStackNavigator(
{
  Login:Login,
  SignUp:SignUp,
  Register:Register,
  DashBoard:DashBoard,

},
{
  initialRouteName:'SignUp',
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:'#ba2d65'
    }
  }
}

);
export default createAppContainer(RootStack);
//const AppConatiner= createAppContainer(RootStack);