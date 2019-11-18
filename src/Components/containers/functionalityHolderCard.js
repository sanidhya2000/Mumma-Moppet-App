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
  ToastAndroid,
  Image
} from 'react-native';




const initialState={
   
}


class FunctionalCard extends Component{

	constructor(props){
		super(props);
		this.state=initialState;
	}

static navigationOptions={
    
    }


    

	render(){
    console.log(this.props.image)
		return(

			 <View style={styles.container}>
          
        <View style={styles.iconHolder}>
          <Image style={styles.imageIcon} source={require(`../../assets/growthTracker3.png`)}/>
        </View>

        <View style={styles.textConatiner}>
          <Text style={styles.textMain}> Sanidhya </Text>
        </View>

      </View>
			)
	}


}



const styles=StyleSheet.create({
    
    container:{
      marginLeft:20,
      marginRight:10,
      marginBottom:20
    },

    iconHolder:{
      borderWidth:2,
      width:150,
      height:150,
      borderRadius:100,
      backgroundColor:'#ffab00'
    },

    textConatiner:{
      
      
      


    },
    textMain:{
      textAlign:'center',
    },

    imageIcon:{
      width:100,
      height:110,
      marginLeft:15,
      marginTop:10
    }

})


export default FunctionalCard;
