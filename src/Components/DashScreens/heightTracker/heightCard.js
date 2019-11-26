import React,{Component} from 'react'
import {View,StyleSheet,Text,TextInput,Image,TouchableOpacity,ToastAndroid} from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

const initialState={
	height:"",
	done:{image:require('../../../assets/correctUse.png'),style:{height:100,width:120}},
	submit:{image:require('../../../assets/arrow.png'),style:{height:200,width:200}},
	notAllowed:{image:require('../../../assets/stp.png'),style:{height:130,width:130}}
}

class HeightCard extends Component {
	constructor(props){
		super(props);
		this.state = initialState;
		
	}

	componentDidMount(){
		this.setState({height:this.props.heightFeed.toString()})
	}

	heightHandler=(value)=>{
		
		this.setState({height:value})
	}

	changeStatus=()=>{
		
		if(this.state.height != "" && this.state.height!="0")
			{this.props.pressEvent(this.props.sno,this.state.height)}
		else{
			ToastAndroid.show('Enter Valid Height!!', ToastAndroid.SHORT);
			this.setState({height:""})
		}
	}

	render(){
		console.log(this.state.height)
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
								 	<Image style={{height:56,width:35,marginRight:5}}source={require('../../../assets/height2.png')}/>
									<View style={styles.heightBox}>
										<TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
								        placeholder="Height!!"
								        placeholderTextColor='rgba(0,0,0,0.6)'
								        value={this.state.height}
								        onChangeText={this.heightHandler}
								        editable={this.props.isEditable}
								        />
								        <Text style={{marginLeft:6,fontSize:20}}>Cm</Text>
								     </View>
								</View>

								<View style={styles.submitData}>
									<TouchableOpacity onPress={this.changeStatus}>
									<Image style={this.state[this.props.status].style}source={this.state[this.props.status].image}/> 
									</TouchableOpacity>
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
		width:115,
		height:50,
		alignItems:'center',


	},
	snText:{
		fontSize:15,

	},
	inputBox:{
    width:100,//320max
    backgroundColor:'rgba(255,255,255,0.5)',
    borderRadius: 5,
    paddingHorizontal:16,
    fontSize:15,
    color:'black',
  
    height:40

  },
  dateHead:{
  	//borderWidth:2,
  	width:225,
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
  },
  heightBox:{
  	//borderWidth:2,
  	backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius: 5,
    fontSize:16,
    color:'#ffffff',
    marginVertical:5,
    width:140,
    flexDirection:'row',
    alignItems:'center',

  }
})


export default HeightCard