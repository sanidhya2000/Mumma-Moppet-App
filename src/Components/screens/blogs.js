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


class BlogsScreen extends Component{

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
            <StatusBar backgroundColor="#ba2d65" barStyle="light-content" /> 
                <View style={styles.dash}>
               <Text style={styles.dashText}>Blogs </Text>
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


export default BlogsScreen;
