import React,{Component} from 'react'
import Logo from '../Components/logo'
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
  ToastAndroid
} from 'react-native';
import LoginForm from '../Components/LoginForm'
import { NavigationActions,StackActions  } from 'react-navigation'
import axios from 'axios'
import {connect} from 'react-redux'
import {setUuid,setUserDetail} from '../store/actions/index'


const initialState={
   showSpinner:false
}


class Login extends Component{

	constructor(props){
		super();
		this.state=initialState;
	}

static navigationOptions={
      header:null
    }

validateInputs=(email,password)=>{

  if(email==""){
    ToastAndroid.show('Please Enter Valid Email', ToastAndroid.SHORT);
    return false;
  }
  else if(password=="" ){
      ToastAndroid.show('Please Enter valid password', ToastAndroid.SHORT);
      return false;
    }
  else{
    return true;
  }

}

onLogin=(email,password)=>{

      this.setState({showSpinner:true})    
      if(this.validateInputs(email,password)){
      
      axios.post('https://backtestbaby.herokuapp.com/api/login/exists',{
        email:email,
        password:password
      })
      .then(data=>{
        console.log(data)
         if(data.data.uuid!="Invalid Credentials"){
           this.setState({showSpinner:false})
           this.props.setingUuid(data.data.uuid)
           axios.get(`https://backtestbaby.herokuapp.com/api/dashBoard/userInfo/${data.data.uuid}`)
           .then(data=>this.props.settingUserDetail(data.data.userName,data.data.babyName,data.data.avtarId));
           ToastAndroid.show('Login Successfull :)', ToastAndroid.SHORT);
        
           //this.props.navigation.navigate('DashBoard')
           this.props.navigation.dispatch(StackActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName: 'DashBoard' })]
}))
         }
         else{
           this.setState({showSpinner:false})
         ToastAndroid.show('Login UnSuccessfull :( Invalid Credentials or Network Connection!!', ToastAndroid.SHORT);
        
         }
      })
      .catch(err=>{
        this.setState({showSpinner:false})
        ToastAndroid.show('Login UnSuccessfull :( Invalid Credentials or Network Connection!!', ToastAndroid.SHORT);
        console.log(err);
      })

  }
    

    else{
      this.setState({showSpinner:false})
      //ToastAndroid.show('Login UnSuccessfull :( check Entries or Network Connection!!', ToastAndroid.SHORT);
    }


    }

	render(){
		return(

			<View style={styles.container}>
	          <Logo/>
	          <LoginForm onLogin={this.onLogin} showSpinner={this.state.showSpinner}/>
	          <View style={styles.loginTextCont}>
	           <Text style={styles.loginText}>Not a Member ? </Text>
	           <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')}>
	           <Text style={styles.loginButton}>SignUp</Text>
	           </TouchableOpacity>
	          </View>
           
      		</View>

			)
	}


}



const styles=StyleSheet.create({
  container : {
    backgroundColor : '#f48fb1',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  loginTextCont:{
    flexGrow:1,
    alignItems:'flex-end',
    justifyContent:'center',
    color:'#ffffff',
    paddingVertical:16,
    flexDirection:'row'
  },
  loginText:{
    color:'rgba(255,255,255,0.7)',
    fontSize:16
  },
  loginButton:{
    color:'#ffffff',
    fontSize:16,
    fontWeight:"bold"
  }
})

const mapStateToProps=state=>{
  return{
    uuid:state.userReducer.uuid
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    setingUuid:(userId)=>dispatch(setUuid(userId)),
    settingUserDetail:(userName,babyName,avtaarId)=>dispatch(setUserDetail(userName,babyName,avtaarId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
