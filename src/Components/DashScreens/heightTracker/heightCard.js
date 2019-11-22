import React,{Component} from 'react'
import {View,StyleSheet,Text,TextInput,Image} from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

const initialState={
	height:0,
	done:{image:require('../../../assets/correct.png'),style:{height:100,width:120}},
	submit:{image:require('../../../assets/submit.png'),style:{height:100,width:100}},
	notAllowed:{image:require('../../../assets/notAllowed.png'),style:{height:130,width:130}}
}

class HeightCard extends Component {
	constructor(props){
		super(props);
		this.state = initialState;
		this.state.height = this.props.heightFeed
	}

	heightHandler=(value)=>{
		this.setState({height:value})
	}
	render(){
		return(
				<View style={styles.component}>
					<View style={styles.container}>
						<View style={styles.header}>
							<View style={styles.entryNo}>
								<Text style={styles.snText}>#Entry No. : {this.props.sno}</Text>
							</View>
							<View style={styles.dateHead}>
								<Text style={{fontSize:18,fontWeight:'bold',textAlign:'right'}}>{this.props.date}</Text>
							</View>
						</View>
						<View style={styles.section}>

								<View style={styles.heightEntry}>
								 	<Image style={{height:45,width:45,marginRight:5}}source={require('../../../assets/height.png')}/>
									<TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
							        placeholder="Enter Height!!"
							        placeholderTextColor='rgba(255,255,255,0.9)'
							        value={this.state.height}
							        onChange={this.heightHandler}
							        editable={this.props.isEditable}
							        />
								</View>

								<View style={styles.submitData}>
									<Image style={this.state[this.props.status].style}source={this.state[this.props.status].image}/> 
								</View>
						</View>
						<View style={styles.footer}>
							<Text style={{color:'rgba(0,0,0,0.6)'}}>{this.props.footer}</Text>
						</View>
					</View>
				</View>

			)
	}
}

const styles = StyleSheet.create({
	component:{
		flex : 1,
		marginBottom:10
		
	},
	container :{
	
		borderRadius: 15,
		height : 200,
		marginLeft: 10,
		marginRight : 10,
		shadowColor:'black',
        shadowOffset:{width:10,height:20},
        shadowOpacity:0.2,
        elevation:5,
        marginTop:10,
        backgroundColor:'#d5acf9',
        //borderWidth:2
	},
	header:{
		//borderWidth:2,
		height:50,
		backgroundColor:'#99d6ee',
		borderRadius:15,
		shadowColor:'black',
        shadowOffset:{width:10,height:20},
        shadowOpacity:0.2,
        elevation:3,
        flexDirection:'row'
	},
	section:{
		//borderWidth:2,
		height:130,
		flexDirection:'row',
		
	},
	footer:{
		//borderWidth:2,
		height:20,
		justifyContent:'center',
		alignItems:'center'
	},
	entryNo:{
		//borderWidth:2,
		width:90,
		height:50,
		alignItems:'center',


	},
	snText:{
		fontSize:15,

	},
	inputBox:{
    width:150,//320max
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius: 5,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical:5

  },
  dateHead:{
  	//borderWidth:2,
  	width:245,
  	alignItems:'flex-end',
  	justifyContent:'flex-end',

  },
  submitData:{
  	//borderWidth:2,
  	width:123,
  	justifyContent:'center',
  	alignItems:'center'
  },
  heightEntry:{
  	//borderWidth:2,
  	width:215,
  	alignItems:'center',
  	justifyContent:'center',
  	flexDirection:'row'
  }
})


export default HeightCard