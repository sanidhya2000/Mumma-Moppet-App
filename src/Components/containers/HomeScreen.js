import React,{Component} from 'react'
import Header from './header.js'
import SettingScreen from './SettingScreen'
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

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from '@react-navigation/native';
import OverallGrowth from '../screens/heightWeight.js'
import BlogsScreen from '../screens/blogs.js'
import VaccinationScreen from '../screens/vaccination.js'
import Icon from 'react-native-vector-icons/Ionicons';
import FunctionalCard from  './functionalityHolderCard'

const initialState={
   
}


class HomeScreen extends Component{

	constructor(props){
		super();
		this.state=initialState;
	}

static navigationOptions={
      drawerLabel: 'DashBoard',
      drawerIcon: ({ tintColor }) => (
      <Icon style={{width:40}} size={40}  name="md-home" color='#ba2d65'/>
    ),
    
    }


    

	render(){
    console.log(this.props)
		return(
      <View style={styles.Component}>
      <Header headerText="Mumma's Moppet" navigation={this.props.navigation}/>
              
          
    			<View style={styles.container}>
            <StatusBar backgroundColor="#ba3f8f" barStyle="light-content" /> 
            <FunctionalCard key="growth" image="growthTarcker3.png"/>
            <FunctionalCard key="vaccine" image="vaccine.png"/>
          </View>



      </View>
       
        

			)
	}


}

const myTabNavigator= createMaterialTopTabNavigator({
  Home:{
    screen : BlogsScreen
  },
  'Overall Growth':{
    screen : OverallGrowth
  },
  'Vaccinations':{
    screen:VaccinationScreen
  }

  
},
{
  initialRouteName: 'Home',
  navigationOptions :{
    tabBarVisible : true
  },
  tabBarOptions: {
  labelStyle: {
    fontSize: 12,
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



const styles=StyleSheet.create({
  Component:{
    backgroundColor : '#ffc1e3',
    flex:1,
    flexDirection:'column',

  },
  container : {
    paddingTop:30,
    backgroundColor : 'rgba(255,255,255,0.8)',
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',

  },
  dash:{
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center'
  },
  dashText:{
    marginVertical:15,
    fontSize:20,
    color:'black',
    fontWeight:"bold"


  },
  icon: {
    width: 24,
    height: 24,
  },
  iconStyle:{
    width:40
  }
  
})



export default HomeScreen;
