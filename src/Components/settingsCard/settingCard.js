import React,{Component} from 'react'
import {
	StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  ToastAndroid,
  ActivityIndicator,
ScrollView} from 'react-native'
import DateTimePicker from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/Ionicons';
import ModalDropdown from 'react-native-modal-dropdown';
import axios from 'axios'
import Modal from "react-native-modal";
import AvtaarCard from '../AvtaarCards.js'
import {connect} from 'react-redux'
import {getUuid,setUserDetail} from '../../store/actions/index'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const initialState={
	refreshing:false,
  isDateTimePickerVisible:false,
  modalVisible:false,
  selectedInputs:{
    uuid:"",
    babyName:"",
    fathersName:"",
    mothersName:"",
    dateOfBirth:"Date of Birth",
    gender:"Choose your Gender",
    mobileNumber:"",
    city:"",
    avtarLink:1
  }
  

}
const genderOptions=['male','female','other'];
const genderObject={0:'m',1:'f',2:'o'};
const genderReverse={'m':0,'f':1,'o':2}

class SettingCard extends Component{

	constructor(props){
		super(props);
		this.state=initialState
	}

	componentDidMount(){
		axios.get(`https://backtestbaby.herokuapp.com/api/register/${this.props.uuid}`)
		.then(data=>{
			if(data.data.data!=undefined){
				let temp = this.state.selectedInputs;
				temp.babyName = data.data.data.baby_name;
				temp.fathersName = data.data.data.fathers_name;
				temp.mothersName = data.data.data.mothers_name;
				temp.dateOfBirth = this.formatDate(data.data.data.date_of_birth);
				temp.gender = genderOptions[genderReverse[data.data.data.gender]];
				temp.mobileNumber = data.data.data.mobile_number;
				temp.city = data.data.data.city;
				temp.avtarLink = data.data.data.avtar_link;
				this.setState({selectedInputs:temp})
			}
		})
	}

	onRefresh = () => {
    this.setState({refreshing : true})
    axios.get(`https://backtestbaby.herokuapp.com/api/register/${this.props.uuid}`)
		.then(data=>{
			if(data.data.data!=undefined){
				let temp = this.state.selectedInputs;
				temp.babyName = data.data.data.baby_name;
				temp.fathersName = data.data.data.fathers_name;
				temp.mothersName = data.data.data.mothers_name;
				temp.dateOfBirth = this.formatDate(data.data.data.date_of_birth);
				temp.gender = genderOptions[genderReverse[data.data.data.gender]];
				temp.mobileNumber = data.data.data.mobile_number;
				temp.city = data.data.data.city;
				temp.avtarLink = data.data.data.avtar_link;
				this.setState({selectedInputs:temp,refreshing:false})
			}
		})
    
    
  	}

	babyNameHandler=(value)=>{
    let temp=this.state.selectedInputs;
    temp.babyName=value;
    this.setState({selectedInputs:temp})
  }

  fathersNameHandler=(value)=>{
    let temp=this.state.selectedInputs;
    temp.fathersName=value;
    this.setState({selectedInputs:temp})
  }

  mothersNameHandler=(value)=>{
    let temp=this.state.selectedInputs;
    temp.mothersName=value;
    this.setState({selectedInputs:temp})
  }

  mobileNumberHandler=(value)=>{
    let temp=this.state.selectedInputs;
    temp.mobileNumber=value;
    this.setState({selectedInputs:temp})
  }

  cityNameHandler=(value)=>{
    let temp=this.state.selectedInputs;
    temp.city=value;
    this.setState({selectedInputs:temp})
  }

  genderOptionsHandler=(value)=>{
    let temp=this.state.selectedInputs;
    temp.gender=genderObject[value];
    this.setState({selectedInputs:temp})
  }

  formatDate=(date)=> {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}


  showDateTimePicker = () => {
      this.setState({ isDateTimePickerVisible: true });
    };

  hideDateTimePicker = () => {
      this.setState({ isDateTimePickerVisible: false });
    };

  handleDatePicked = date => {
    let temp=this.state.selectedInputs;
    temp.dateOfBirth=this.formatDate(date);
    this.setState({selectedInputs:temp})
    this.hideDateTimePicker();
    };

  closeModal=(avtaarId)=>{
    let temp=this.state.selectedInputs;
    temp.avtarLink=avtaarId;
    this.setState({modalVisible:false,selectedInputs:temp})
  }

  renderAvtaars=({item})=>{

   return <AvtaarCard avtaarId={item} closeModal={this.closeModal}/>

  }

  validateInputs=(inputList)=>{

  const {babyName,fathersName,mothersName,dateOfBirth,gender,mobileNumber,city,avtarLink}=inputList;

  if(babyName==""){
    ToastAndroid.show('Please Enter Name of your Baby', ToastAndroid.SHORT);
    return false;
  }
  else if(fathersName==""){
    ToastAndroid.show('Please Enter Name of Father', ToastAndroid.SHORT);
    return false;
  }
  else if(mothersName==""){
    ToastAndroid.show('Please Enter Name of Mother', ToastAndroid.SHORT);
    return false;
  }
  else if(dateOfBirth=="Date of Birth"){
    ToastAndroid.show('Please Enter Valid Date of Birth', ToastAndroid.SHORT);
    return false;
  }
  // else if(Date(dateOfBirth).getTime() > Date().getTime()){
  //   ToastAndroid.show('Please Enter Valid Date of Birth', ToastAndroid.SHORT);
  //   return false;
  // }
  else if(gender=="Gender"){
    ToastAndroid.show('Please Select Gender of your Baby', ToastAndroid.SHORT);
    return false;
  }
  else if(mobileNumber=="" || mobileNumber.length>10 || mobileNumber.length<10 ){
    ToastAndroid.show('Please Enter Valid Mobile Number', ToastAndroid.SHORT);
    return false;
  }
  else if(city==""){
    ToastAndroid.show('Please Enter City', ToastAndroid.SHORT);

    return false;
  }
  else{
  return true;}


}

  updateForm=(inputs)=>{
      this.setState({showSpinner:true})
      if(this.validateInputs(inputs)){
          inputs.uuid=this.props.uuid;
          axios.post('https://backtestbaby.herokuapp.com/api/register',inputs)
          .then(data=>{
            if(data.data.status=="done"){
              this.setState({showSpinner:false})
              ToastAndroid.show('Updation Successfull !!', ToastAndroid.SHORT);
              //this.props.navigation.navigate('DashBoard')
            axios.get(`https://backtestbaby.herokuapp.com/api/dashBoard/userInfo/${this.props.uuid}`)
           .then(data=>this.props.settingUserDetail(data.data.userName,data.data.babyName,data.data.avtarId));
            
            // axios.post('https://backtestbaby.herokuapp.com/api/vaccination',{
            //   uuid:this.props.uuid,
            //   birthDate:inputs.dateOfBirth
            // })
            // .catch(err=>{
            //   console.log(err);
            //   ToastAndroid.show('Registartion UnSuccessfull :(!!', ToastAndroid.SHORT);
            //   this.props.navigation.navigate('SignUp')
            // })

            }
            else{
              this.setState({showSpinner:false})
              ToastAndroid.show('Updation UnSuccessfull :( check Entries!!', ToastAndroid.SHORT);
            }
          })
          .catch(err=>{
            this.setState({showSpinner:false})
            ToastAndroid.show('Updation UnSuccessfull :( check Entries or Network Connection!!', ToastAndroid.SHORT);
            console.log(err)
          })
      }
      else{
        this.setState({showSpinner:false})
      }
      
    }

  openModelAvtaar=()=>{
  	this.setState({modalVisible : true})
  }

	render(){
		console.log(this.state)
		return(


      <KeyboardAwareScrollView
        
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={true}
      >

				<View style={styles.conatiner}>

				<ScrollView style={styles.conatiner}
					refreshControl={
				          <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
				        }>

					<View style={styles.header}>
						
						<View style={styles.avtaarSelection}>
							<View style={styles.dispalyAvtaar}>
								<Image style={{height:100,width:100}} source={{uri:`https://backtestbaby.herokuapp.com/api/dashBoard/getAvtaar/${this.state.selectedInputs.avtarLink}`}}/>
							</View>
							<View style={styles.selectButton}>
								<TouchableOpacity style={styles.avtaarButton} onPress={this.openModelAvtaar}>
							          
							           <Text style={styles.buttonText}>Change Avtaar</Text> 
							         
							        </TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={styles.section}>
							
							<View style={styles.Inputhandler}>
								<Icon name="logo-reddit" size={30} color="rgba(0,0,0,0.7)"/> 
								<TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
						        placeholder="Baby Name"
						        placeholderTextColor='#ffffff'
						        value={this.state.selectedInputs.babyName}
						        onChangeText={this.babyNameHandler}
						        />
					        </View>
					        <View style={styles.Inputhandler}>
					        	<Icon name="md-man" size={40} color="rgba(0,0,0,0.7)"/> 
						        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
						        placeholder="Father's Name"
						        placeholderTextColor='#ffffff'
						        value={this.state.selectedInputs.fathersName} 
						        onChangeText={this.fathersNameHandler}
						        />
						     </View>
						     <View style={styles.Inputhandler}>
					        	<Icon name="md-woman" size={40} color="rgba(0,0,0,0.7)"/> 
						        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
						        placeholder="Mother's Name"
						        placeholderTextColor='#ffffff'
						        value={this.state.selectedInputs.mothersName} 
						        onChangeText={this.mothersNameHandler}
						        />
					        </View>
					        <View style={styles.Inputhandler}>
					        	<Icon name="md-calendar" size={30} color="rgba(0,0,0,0.7)"/> 
						        <TouchableOpacity style={styles.dateButton} onPress={this.showDateTimePicker}>
						          <Text style={styles.dateText}>{this.state.selectedInputs.dateOfBirth}</Text>
						        </TouchableOpacity>

					        <DateTimePicker
					          isVisible={this.state.isDateTimePickerVisible}
					          onConfirm={this.handleDatePicked}
					          onCancel={this.hideDateTimePicker}
					          mode={'date'}
					        />
					        </View>

					        <View style={styles.Inputhandler}>
					        	<Icon name="md-body" size={30} color="rgba(0,0,0,0.7)"/> 
						        <ModalDropdown style={styles.genderPicker} 
						        textStyle={styles.genderPickerText} 
						        dropdownStyle={styles.genderPickerDropDownStyle}
						        dropdownTextStyle={styles.genderPickerdropdownTextStyle}
						        options={genderOptions} 
						        defaultValue={this.state.selectedInputs.gender}
						        onSelect={this.genderOptionsHandler}
						        >
					         </ModalDropdown>
					        </View>
										        
							<View style={styles.Inputhandler}>
					        	<Icon name="md-call" size={30} color="rgba(0,0,0,0.7)"/> 
						        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
							        placeholder="Mobile Number"
							        placeholderTextColor='#ffffff'
							        value={this.state.selectedInputs.mobileNumber} 
							        onChangeText={this.mobileNumberHandler}
							        keyboardType="numeric"
							        />
							</View>
							<View style={styles.Inputhandler}>
					        	<Icon name="ios-home" size={30} color="rgba(0,0,0,0.7)"/> 
						        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
						        placeholder="City"
						        placeholderTextColor='#ffffff'
						        value={this.state.selectedInputs.city} 
						        onChangeText={this.cityNameHandler}
						        />
						    </View>
						    <Modal isVisible={this.state.modalVisible}>
					        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
					        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
						          <Text style={styles.avtaarText}>Choose Avtaar </Text>
						          <TouchableOpacity onPress={()=> {this.setState({modalVisible:false})}    }>
						          	<Icon name="md-close-circle" size={40} color="white" style={{marginLeft:80}}/>
						    	  </TouchableOpacity>
						    </View>
					          <FlatList
					            data={[1,2,3,4,5,6,7,8,9,10,11]}
					            style={styles.avtaarsList}
					            renderItem={this.renderAvtaars}
					            numColumns={2}
					          />
					          </View>
					        </Modal>
					</View>

					<View style={styles.footer}>
								{this.props.showSpinner ? 
						          <ActivityIndicator style={styles.spinner} size="small" color="#ffffff" />:
							        <TouchableOpacity style={styles.button} onPress={()=>this.updateForm(this.state.selectedInputs)}>
							          
							           <Text style={styles.buttonText}>Update</Text> 
							         
							        </TouchableOpacity>
						      	}
					</View>
				</ScrollView>

        </KeyboardAwareScrollView>

			)
	}


}

const styles = StyleSheet.create({
	conatiner:{
    //borderWidth : 2,
    height: 680
	},
	header:{
		//borderWidth : 2,
		height : 150,
		flexDirection :'row',
		justifyContent:'center',
		alignItems:'center'
	},
	section:{
		//borderWidth : 2,
		height : 400,
		justifyContent:'center',
		alignItems:'center'
	},
	footer:{
		//borderWidth : 2,
		height : 80,
		justifyContent:'center',
		alignItems:'center'
	},
	avtaarSelection:{
		borderColor : 'red',
		//borderWidth : 2,
		
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'center'

	},
	headerText:{
		borderWidth : 2,
		width:0
	},
	dispalyAvtaar:{
		
		justifyContent:'center',
		alignItems:'center'
	},
	selectButton:{
		//borderWidth:2,
		height:30
	},
	 inputBox:{
	 	marginLeft:10,
    width:280,//320max
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical:3

  },buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center',

  },
  button:{
    width:150,
    backgroundColor:'#ba2d65',
    borderRadius: 25,
    color:'#ffffff',
    paddingVertical:12
  },
  dateButton:{
    width:280,
    marginLeft:10,
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical:5,
    paddingVertical:12
  },
  dateText:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
  },
  genderPicker:{
    width:280,
    marginLeft:10,
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical:5,
    paddingVertical:12
  },
  genderPickerText:{
    fontSize:16,
    color:'#ffffff',
  },
  genderPickerDropDownStyle:{

    width:280,
    height:133,
    backgroundColor:'#ba2d65',
  

  },
  genderPickerdropdownTextStyle:{
    backgroundColor:'rgba(255,255,255,0.3)',
    fontSize:16,
    color:'#ffffff',
    textAlign:'center',
  },
  avtaarsList:{
    flex: 1,
    marginVertical: 20,
  },
  avtaarText:{
    fontSize:30,
    color:'#ffffff',
    textAlign:'center',
    fontWeight:'bold',
    letterSpacing:2.0,
 
  },
  spinner:{
    width:150,
    borderRadius: 25,
    color:'#ffffff',
    marginVertical:10,
    paddingVertical:12,
    backgroundColor:'#ba2d65'
  },
  avtaarButton:{
  	width:120,
    backgroundColor:'#ba2d65',
    borderRadius: 25,
    color:'#ffffff',
    paddingVertical:4,
  },
  Inputhandler:{
  	flexDirection:'row',
  	justifyContent:'center',
    alignItems:'center',
    marginTop:'1%'
  }
})

const mapStateToProps=state=>{
  return{
    uuid:state.userReducer.uuid
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    toGetUuid:(userId)=>dispatch(getUuid()),
    settingUserDetail:(userName,babyName,avtaarId)=>dispatch(setUserDetail(userName,babyName,avtaarId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SettingCard);
