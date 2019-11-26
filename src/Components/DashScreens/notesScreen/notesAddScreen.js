import React,{Component} from 'react'
import {Text,View,StyleSheet,TextInput,TouchableOpacity,ToastAndroid} from 'react-native'
import axios from 'axios'
import {connect} from 'react-redux'

const initialState={
	note:""
}

class NotesAdd extends Component{
	constructor(props){
		super(props)
		this.state=initialState
	}

	textHandler=(value)=>{
		this.setState({note:value})
	}

	onSubmit=()=>{
		let x =this.state.note;
		x=x.trim();
		if(this.state.note!="" && this.state.note!=" " && x!=""){
		axios.post('https://backtestbaby.herokuapp.com/api/notes',{
			uuid:this.props.uuid,
			note_text:this.state.note
		})
		.then(data=>{
			if(data.data.length!=0){
				ToastAndroid.show('Note Added Successfully :) !!', ToastAndroid.SHORT);
			}
			else{
				ToastAndroid.show('Note not Added :(!!', ToastAndroid.SHORT);
			}
		})
		.catch(err=>{
			console.log(err);
			ToastAndroid.show('Note not Added :(!!', ToastAndroid.SHORT);
		})
	}
	else{
		ToastAndroid.show('Enter Valid Note :(!!', ToastAndroid.SHORT);
	}
	}

	render(){
		return(
				<View style={styles.container}>
					<TextInput style={styles.textBox}
						placeholder="NoteHere!!"
						multiline
						value={this.state.note}
						onChangeText={this.textHandler}
					/>
					<TouchableOpacity onPress={this.onSubmit}>
						<View style={styles.button}>
							<Text style={{fontSize:20,color:'white'}}>submit</Text>
						</View>
					</TouchableOpacity>
				</View>

			)
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		
	},
	textBox:{
		marginTop:10,
		backgroundColor:'#fa5788',
		marginRight:10,
		marginLeft:10,
		borderRadius:15,
		height:200,
		fontSize:25
	},
	button:{
		width:100,
		backgroundColor:'#8c0032',
		marginTop:20,
		height:50,
		borderRadius:25,
		justifyContent:'center',
		alignItems:'center',
		marginLeft:25

	}
})

const mapStateToProps=state=>{
  return{
    uuid:state.userReducer.uuid,
    userName : state.userReducer.userName,
    babyName : state.userReducer.babyName,
    avtaarId : state.userReducer.avtaarId
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    setingUuid:(userId)=>dispatch(setUuid(userId)),
    settingUserDetail:(userName,babyName,avtaarId)=>dispatch(setUserDetail(userName,babyName,avtaarId))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(NotesAdd);
