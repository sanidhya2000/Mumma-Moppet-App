import React,{Component} from 'react'
import {
  Image,
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
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const initialState={
	icons:{
		done : {image:require('../../../assets/correctUse.png'),style:{height:120,width:120}},
		notDone :{image:require('../../../assets/crosss.png'),style:{height:170,width:170}},
		notAllowed :{image:require('../../../assets/stp.png'),style:{height:120,width:120}}
	}
}

class VaccineBlock extends Component{

	constructor(props){
		super(props);
		this.state=initialState
	}

	static navigationOptions={
      title:'VaccinationTracker'
    }

    changeStatus=()=>{
    	this.props.pressEvent(this.props.sNo)
    }


	render(){
		return(

			<View style={styles.component}>
				<View style={styles.container}>

					<View style={styles.header}>
						<View style={styles.hh1}>						
							<Text style={styles.textS1}>S.No. : {this.props.sNo}</Text>
							<Image style={{height:70,width:70,marginTop:-8,marginLeft:-10}} source={require('../../../assets/injection.png')} />

						</View>
						<View style={styles.hh2}>
							<Text style={styles.textS2}>{this.props.name}</Text>
						</View>
					</View>

					<View style={styles.content}>

						<View style={styles.detailText}>

								<View style={styles.duration}>
									<Icon name="md-alarm" size={30} color="rgba(255,255,255,0.8)" style={{marginRight:5}}/>
									<Text style={{fontSize:16}}>Duration : </Text>
									<Text style={{fontWeight: 'bold',fontSize:20}}>{this.props.duration}</Text>
								</View>

								<View style={styles.expectedDate}>
									<Text style={{fontSize:14}}>Expected Date : </Text>
									<Text style={{fontWeight: 'bold',fontSize:18}}>{this.props.date}</Text>
								</View>

						</View>

						<View style={styles.response}>
							<TouchableOpacity onPress={this.changeStatus}>
								<Image style={this.state.icons[this.props.status].style} source={this.state.icons[this.props.status].image} />
							</TouchableOpacity>

						</View>

					</View>

					<View style={styles.footer}>
						<Text>Click on Icon to Update Status !! </Text>
					</View>
					
				</View>
			</View>

			)
	}

}

const styles = StyleSheet.create({

	component:{
		flex : 1,
		backgroundColor : '#fce4ec',

	},

	container :{
	
		borderRadius: 20,
		height : 200,
		marginLeft: 10,
		marginRight : 10,
		shadowColor:'black',
        shadowOffset:{width:10,height:20},
        shadowOpacity:0.2,
        elevation:5,
        marginTop:10,
        backgroundColor:'#a29bfe'
	},

	header:{
		//borderWidth : 2,
		height:50,
		flexDirection :'row',
		backgroundColor:'#74b9ff',
		borderRadius:15,
		shadowColor:'black',
        shadowOffset:{width:10,height:20},
        shadowOpacity:0.2,
        elevation:3,
      
	},

	content:{
		//borderWidth : 2,
		height:130,
		flexDirection :'row'
	},

	hh1:{
		//sborderWidth :2,
		width : 100,
		color:'yellow',
		flexDirection:'row'
	},

	hh2:{
		// borderWidth :2,
		width:236,
		textAlign:'center'
	},

	textS1:{
		color:'rgba(100,40,100,0.8)',
		fontSize:15,
		fontWeight : 'bold',
		paddingTop:7,
		paddingLeft:8
	},

	textS2:{
		fontSize:21,
		textAlign:'center',
		paddingTop:5,
		color:'rgba(255,255,255,0.8)',
		fontWeight:'bold',
		borderBottomWidth:2,
		borderColor:'rgba(77,14,32,0.8)',
		paddingBottom:4
	},
	detailText:{
		//borderWidth : 2,
		width:200,
		flexDirection : 'column',
		justifyContent : 'center',
		alignItems : 'center'
	},
	response:{
		//borderWidth : 2,
		width:140,
		justifyContent : 'center',
		alignItems : 'center'
	},
	duration:{

		//borderWidth : 2,
		width:180,
		height:60,
		textAlign:'center',
		justifyContent : 'center',
		alignItems : 'center',
		flexDirection:'row'
	},
	expectedDate:{
		//borderWidth : 2,
		width:180,
		height:60,
		textAlign:'center',
		justifyContent : 'center',
		alignItems : 'center',
		flexDirection:'row'
	},
	correctIcon:{
		width:180,
		height:180
	},
	footer:{
		//borderWidth:2,
		height:20,
		alignItems : 'center',
	}


})

export default VaccineBlock