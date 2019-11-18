import React,{Component} from 'react'

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




const initialState={
   
}


class TabScreenTwo extends Component{

	constructor(props){
		super();
		this.state=initialState;
	}

static navigationOptions={
    
    }


    

	render(){
		return(

			 <View style={styles.Component}>
          <View style={styles.container}>
            <StatusBar backgroundColor="#bf5f82" barStyle="light-content" /> 
                <View style={styles.dash}>
               <Text style={styles.dashText}>TabScreen2 </Text>
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


export default TabScreenTwo;
