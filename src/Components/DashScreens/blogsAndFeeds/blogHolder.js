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

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';
import BlogsAndFeedsHome from './BlogsAndFeedsHome.js';
import AddBlogs from './AddBlogs.js'
import WebCard from './webView.js';

const initialState={
   
}


class BlogHolder extends Component{

	constructor(props){
		super();
		this.state=initialState;
	}



    

	render(){
    console.log(this.props)
		return(
      <View style={styles.Component}>
     
              
          <AppCont screenProps={this.props.navigation}/>
    			


      </View>
       
        

			)
	}


}

// const myTabNavigator= createMaterialTopTabNavigator({
//   Home:{
//     screen : BlogsScreen
//   },<View style={styles.container}>
           // <StatusBar backgroundColor="#ba3f8f" barStyle="light-content" /> 
            //<FunctionalCard key="vaccine" image="vaccine" text="Vaccinations"/>
            //<FunctionalCard key="height" image="height" text="Height Tracker"/>
            //<FunctionalCard key="weight" image="weight" text="Weight Tracker"/>
            //<FunctionalCard key="blogs" image="blogs" text="Blogs and Feeds"/>
          //</View>

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

const RootStack=createStackNavigator(
{
  AddBlogs:{
    screen:AddBlogs,
    navigationOptions: () => ({
      headerTitleStyle:{color:'#FFF7FB',fontWeight:'bold',fontSize:23},
      headerTintColor:'#FFF7FB'
    }),
  },
  WebCard:{
    screen:WebCard,
    navigationOptions: () => ({
      headerTitleStyle:{color:'#FFF7FB',fontWeight:'bold',fontSize:23},
      headerTintColor:'#FFF7FB'
    }),
  },
  HomeScreen:{
    screen:BlogsAndFeedsHome,
  },
  
},
{
  initialRouteName:'HomeScreen',
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:'#ba2d65'
    }
  }
}

);
const AppCont = createAppContainer(RootStack);

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



export default BlogHolder;
