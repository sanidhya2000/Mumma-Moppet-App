import React,{Component} from 'react'
import {
  Image,
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
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from '@react-navigation/native';
import HeightView from './heightView.js'
import  HeightGraph from './heightGraph.js'

class HeightTracker extends Component{

	constructor(props){
		super(props);
	}

	static navigationOptions={
      title:'HeightTracker'
    }

	render(){
		return(

			<TabConatiner/>

			)
	}

}

const styles = StyleSheet.create({

	component:{
		flex : 1,
		backgroundColor : '#fce4ec'
	},

	container :{
	
		borderRadius: 20,
		height : 200,
		marginLeft: 10,
		marginRight : 10,
		shadowColor:'black',
        shadowOffset:{width:10,height:20},
        shadowOpacity:0.2,
        elevation:5,
        marginTop:10,
        backgroundColor:'#FFB1D8'
	}

})

const myTabNavigator= createBottomTabNavigator(
{
  Entries:{
    screen : HeightView
  },
  'Graph':{
    screen : HeightGraph
  }
  
},
{
  initialRouteName: 'Entries',

 tabBarOptions: {
 	activeTintColor: '#ffffff',
 	inactiveTintColor :'black',
  labelStyle: {
    fontSize: 20,
    paddingBottom:10
  },
  tabStyle: {
    width: 120,
  },
  style: {
    backgroundColor: '#bc477b',
    
  },

}
}



)

const TabConatiner = createAppContainer(myTabNavigator);

export default HeightTracker