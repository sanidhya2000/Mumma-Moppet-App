
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';

class AvtaarCard extends Component{

	constructor(props){
		super(props)
	}

	avtaarSelected=()=>{
		this.props.closeModal(this.props.avtaarId);
		
	}

	render(){
		return(
			<TouchableOpacity onPress={this.avtaarSelected}>
				<View style={styles.container} >
				 
					<Image style={styles.avtaarsList} source={{ uri: 'https://backtestbaby.herokuapp.com/api/dashBoard/getAvtaar/'+this.props.avtaarId}} />		
				
				</View>
			</TouchableOpacity>
		)
	}

}

export default AvtaarCard

const styles=StyleSheet.create({
	container:{	
    	backgroundColor : '#e35183',
		margin:7,
		borderWidth:1,
        borderRadius:25,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.1,
        shadowRadius:2,
        elevation:1,
        paddingHorizontal:10,
        paddingVertical:5,
        justifyContent:'center'
	},
	avtaarsList:{

    width:100,
    height:100,

  }
})