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
import AuthLoadingScreen from './pages/AuthLoader.js'


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
  ActivityIndiactor,
  AsyncStorage
} from 'react-native';

//import { createAppContainer} from '@react-navigation/native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
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
  //SignUp:SignUp,
  Register:Register,
  DashBoard:DashBoard,

},
{
  initialRouteName:'DashBoard',
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:'#ba2d65'
    }
  }
}

);

const AuthStack = createStackNavigator({SignUp:SignUp})




//export default createAppContainer(RootStack);
//const AppConatiner= createAppContainer(RootStack);
export default createAppContainer(createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: RootStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

