import React,{Component} from 'react'
import {Text,View,StyleSheet} from 'react-native'

class NotesCard extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
				<View style={styles.conatiner}>
					<View style={styles.header}>
						<Text style={{marginLeft:10}}>S.No. {this.props.sno}</Text>
					</View>

					<View style={styles.section}>
						<Text style={styles.noteStyle}>{this.props.title}</Text>

					</View>
				</View>

			)
	}

}

const styles = StyleSheet.create({
	conatiner :{
		
		//borderWidth : 2,
		height:100,
		borderRadius : 15,
		marginRight : 10,
		marginLeft:10,
		marginTop:10,
		marginBottom:5,
		shadowColor:'black',
        shadowOffset:{width:10,height:20},
        shadowOpacity:0.2,
        elevation:5,
        backgroundColor:'#636e72'
	},
	header:{
		//borderWidth:2,
		height:30,
		borderRadius:15,
		shadowColor:'black',
        shadowOffset:{width:10,height:20},
        shadowOpacity:0.2,
        elevation:5,
        justifyContent:'center',
        backgroundColor:'#6c5ce7',
        width:100,
        marginLeft:2,
        marginTop:3
	},
	section:{
		//borderWidth:2,
		height:70,
		justifyContent:'center',


	},
	noteStyle:{
		fontSize:20,
		paddingLeft:10
	}
})

export default NotesCard;