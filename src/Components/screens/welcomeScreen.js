import React,{Component} from 'react'
import Header from '../containers/header.js'
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
import Icon from 'react-native-vector-icons/Ionicons';
import FunctionalCard from  '../containers/functionalityHolderCard'

const initialState={
   
}


class WelcomeScreen extends Component{

  constructor(props){
    super();
    this.state=initialState;
  }

static navigationOptions={
      header:null
    }

goToVaccines=()=>{
  this.props.navigation.navigate('Vaccines')
}

goToHeight = ()=>{
  this.props.navigation.navigate('HeightTracker')
}

goToWeight = ()=>{
  this.props.navigation.navigate('WeightTracker')
}

goToBlogs = ()=>{
  this.props.navigation.navigate('BlogsAndFeeds')
}
    

  render(){
    console.log("Welcome",this.props)
    return(
      <View style={styles.Component}>
     
          <Header headerText="Mumma's Moppet" navigation={this.props.screenProps}/> 
          <View style={styles.container}>
            <StatusBar backgroundColor="#ba3f8f" barStyle="light-content" />
            <FunctionalCard key="vaccine" image="vaccine" text="Vaccinations" pressEvent={this.goToVaccines}/>
            <FunctionalCard key="height" image="height" text="Height Tracker" pressEvent={this.goToHeight}/>
            <FunctionalCard key="weight" image="weight" text="Weight Tracker" pressEvent={this.goToWeight}/>
            <FunctionalCard key="blogs" image="blogs" text="Blogs and Feeds" pressEvent={this.goToBlogs}/>

          </View>



      </View>
       
        

      )
  }


}

// const myTabNavigator= createMaterialTopTabNavigator({
//   Home:{
//     screen : BlogsScreen
//   },
//   'Overall Growth':{
//     screen : OverallGrowth
//   },
//   'Vaccinations':{
//     screen:VaccinationScreen
//   }

  
// },
// {
//   initialRouteName: 'Home',
//   navigationOptions :{
//     tabBarVisible : true
//   },
//   tabBarOptions: {
//   labelStyle: {
//     fontSize: 12,
//   },
//   tabStyle: {
//     width: 120,
//   },
//   style: {
//     backgroundColor: '#bc477b',
    
//   },
// }
// }


// )

// const TabConatiner = createAppContainer(myTabNavigator);



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
    fontWeight:'bold'


  },
  icon: {
    width: 24,
    height: 24,
  },
  iconStyle:{
    width:40
  }
  
})



export default WelcomeScreen;
