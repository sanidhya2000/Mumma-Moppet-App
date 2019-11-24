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
import WeightView from './weightView.js'
import  WeightGraph from './weightGraph.js'
import Icon from 'react-native-vector-icons/Ionicons';

class WeightTracker extends Component{

	constructor(props){
		super(props);
	}

	static navigationOptions={
      title:'WeightTracker'
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
    screen : WeightView,
     navigationOptions:{
      tabBarLabel : 'Feed Data',
      tabBarIcon:({tintColor})=>(
        <Icon name="md-create" size={30} color={tintColor}/>)
    }
  },
  'Graph':{
    screen : WeightGraph,
    navigationOptions:{
      tabBarLabel : 'Graph',
      tabBarIcon:({tintColor})=>(
        <Icon name="md-stats" size={30} color={tintColor}/>)
    }
  }
  
},
{
  initialRouteName: 'Entries',

 tabBarOptions: {
  activeTintColor: '#ba2d65',
  inactiveTintColor :'grey',
  labelStyle: {
    fontSize: 17
  },
  tabStyle: {
    
  },
  style: {
   borderTopWidth:0,
    
    borderRadius:25,
   
    height:60,
    shadowColor:'black',
        shadowOffset:{width:10,height:20},
        shadowOpacity:0.2,
        elevation:4,
        marginBottom:8,
        marginLeft:10,
        marginRight:10,
    
  },

}
}



)

const TabConatiner = createAppContainer(myTabNavigator);

export default WeightTracker