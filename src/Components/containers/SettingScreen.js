import React,{Component} from 'react'
import Header from './header.js'
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

import Icon from 'react-native-vector-icons/Ionicons';


const initialState={
   
}


class SettingScreen extends Component{

	constructor(props){
		super();
		this.state=initialState;
	}

static navigationOptions={
    drawerLabel: 'Settings',
     drawerIcon: ({ tintColor }) => (
      <Icon style={{width:40}} size={40}  name="md-settings" color='#ba2d65'/>
    ),
    }


    

	render(){
		return(

			 <View style={styles.Component}>
          <Header headerText="Settings" navigation={this.props.navigation}/>
          <View style={styles.container}>
            <StatusBar backgroundColor="#ba3f8f" barStyle="light-content" /> 
                <View style={styles.dash}>
               <Text style={styles.dashText}>SettingsScreen </Text>
               </View>
              </View>
      </View>
			)
	}


}



const styles=StyleSheet.create({
  Component:{
    backgroundColor : '#ffc1e3',
    flex:1,
  },
  container : {
    backgroundColor : '#ffc1e3',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
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
  }
  
})


export default SettingScreen;
