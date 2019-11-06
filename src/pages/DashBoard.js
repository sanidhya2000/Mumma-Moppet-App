import React,{Component} from 'react'
import Logo from '../Components/logo'
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


class DashBoard extends Component{

	constructor(props){
		super();
		this.state=initialState;
	}

static navigationOptions={
      header:null,
      headerLeft : null
    }


    

	render(){
		return(

			<View style={styles.container}>
	          <Logo/>
	          <View style={styles.dash}>
           <Text style={styles.dashText}>DASHBOARD UNDER CONSTRUCTION </Text>
           </View>
      		</View>

			)
	}


}



const styles=StyleSheet.create({
  container : {
    backgroundColor : '#f48fb1',
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


  }
  
})



export default DashBoard;
