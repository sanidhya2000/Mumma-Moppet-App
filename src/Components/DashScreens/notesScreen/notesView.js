import React,{Component} from 'react'
import {
	Text,
	View,
	StyleSheet,
	StatusBar,
	ScrollView,
	TouchableOpacity,
	ToastAndroid
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../containers/header.js'
import NotesCard from './noteCard.js'
import {connect} from 'react-redux'
import axios from 'axios'

const initialState={
	noteList:[]
}

class NotesScreen extends Component{
	constructor(props){
		super(props);
		this.state=initialState
	}

	
    static navigationOptions={
      header:null
    }

    componentDidMount(){
    	axios.get(`https://backtestbaby.herokuapp.com/api/notes/${this.props.uuid}`)
    	.then(data=>{
    		if(data.data.length){
    			console.log(data.data)
    			this.setState({noteList:data.data})
    		}
    		else{
    			ToastAndroid.show('Some Error :(!!', ToastAndroid.SHORT);
    		}
    	})
    }

    addIcon=()=>{
    	this.props.navigation.navigate('AddNotes')
    }

	render(){

		const notesList = this.state.noteList.map((d)=>{
			return <NotesCard  key={d.note_id} sno={d.note_id.toString()} title={d.note_text}/>
		})

		return(
			<View style={styles.Component}>
	          <Header headerText="Notes" navigation={this.props.screenProps}/>
	            <StatusBar backgroundColor="#ba3f8f" barStyle="light-content" /> 
	            <View style={{flex:1}}>
		          <ScrollView style={styles.container}>
		                {notesList}

		              </ScrollView>
		            
		            <View style={styles.addIcon}>  
		            <TouchableOpacity onPress={this.addIcon}>
		            <Icon  name="md-add" size={60} color="white"/>
		            </TouchableOpacity>
		            </View>
		            
		        </View>
	      </View>
			)
	}

}

const styles=StyleSheet.create({
  Component:{
    backgroundColor : 'rgba(255,255,255,0.8)',
    flex:1,
  },
  container : {
  	flex:1,
    backgroundColor : 'rgba(255,255,255,0.8)',
    
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
  },
  addIcon:{
  	position: "absolute",
  	backgroundColor:'#ba3f8f',
    borderRadius:100,
    right:10,
    bottom:10,
    shadowColor:'black',
    shadowOffset:{width:10,height:20},
    shadowOpacity:0.2,
    elevation:5,
    width:80,
    height:80,
    justifyContent:'center',
    alignItems:'center'
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

export default connect(mapStateToProps,mapDispatchToProps)(NotesScreen);
