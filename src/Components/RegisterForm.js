/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import DateTimePicker from "react-native-modal-datetime-picker";
import Modal from "react-native-modal";
import AvtaarCard from './AvtaarCards'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';

const initialState={

  isDateTimePickerVisible:false,
  modalVisible:true,
  selectedInputs:{
    uuid:"",
    babyName:"",
    fathersName:"",
    mothersName:"",
    dateOfBirth:"Date of Birth",
    gender:"Gender",
    mobileNumber:"",
    city:"",
    avtarLink:1
  }
  

}

const genderOptions=['male','female','other'];
const genderObject={0:'m',1:'f',2:'o'};

class RegisterForm extends Component{

  constructor(props){
    super();
    this.state=initialState
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

  registerForm=()=>{
    this.props.completeRegistration(this.state.selectedInputs)
  }

  render(){
    return(

      <View style={styles.container}>
        
        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder="Baby Name"
        placeholderTextColor='#ffffff'
        value={this.state.babyName} 
        onChangeText={this.babyNameHandler}
        />
        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder="Father's Name"
        placeholderTextColor='#ffffff'
        value={this.state.fathersName} 
        onChangeText={this.fathersNameHandler}
        />
        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder="Mother's Name"
        placeholderTextColor='#ffffff'
        value={this.state.mothersName} 
        onChangeText={this.mothersNameHandler}
        />
        
        <TouchableOpacity style={styles.dateButton} onPress={this.showDateTimePicker}>
          <Text style={styles.dateText}>{this.state.selectedInputs.dateOfBirth}</Text>
        </TouchableOpacity>

        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          mode={'date'}
        />

        <ModalDropdown style={styles.genderPicker} 
        textStyle={styles.genderPickerText} 
        dropdownStyle={styles.genderPickerDropDownStyle}
        dropdownTextStyle={styles.genderPickerdropdownTextStyle}
        options={genderOptions} 
        defaultValue="Choose your Gender"
        onSelect={this.genderOptionsHandler}
        >
           
        </ModalDropdown>
       
       <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder="Mobile Number"
        placeholderTextColor='#ffffff'
        value={this.state.mobileNumber} 
        onChangeText={this.mobileNumberHandler}
        keyboardType="numeric"
        />

        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder="City"
        placeholderTextColor='#ffffff'
        value={this.state.city} 
        onChangeText={this.cityNameHandler}
        />

        <Modal isVisible={this.state.modalVisible}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.avtaarText}>Choose Avtaar </Text>
          <FlatList
            data={[1,2,3,4,5,6,7,8,9,10,11]}
            style={styles.avtaarsList}
            renderItem={this.renderAvtaars}
            numColumns={2}
          />
          </View>
        </Modal>
        {this.props.showSpinner ? 
          <ActivityIndicator style={styles.spinner} size="small" color="#ffffff" />:
        <TouchableOpacity style={styles.button} onPress={this.registerForm}>
          
           <Text style={styles.buttonText}>Register</Text> 
         
        </TouchableOpacity>
      }



      </View>


      )
  }

}

export default RegisterForm;

const styles=StyleSheet.create({
  container : {
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center'
  },
  inputBox:{
    width:300,//320max
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical:3

  },
  buttonText:{
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
    marginVertical:10,
    paddingVertical:12
  },
  dateButton:{
    width:300,
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
    width:300,
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

    width:300,
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
  }
  
})
