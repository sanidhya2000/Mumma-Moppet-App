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
  ToastAndroid,
  Image,
  AsyncStorage
} from 'react-native';

import { createDrawerNavigator, DrawerItems, DrawerNavigation  } from 'react-navigation-drawer';
import HomeScreen from '../Components/containers/HomeScreen'
import SettingScreen from '../Components/containers/SettingScreen'
import NotesHolder from '../Components/DashScreens/notesScreen/notesHolder.js'
import { createAppContainer } from '@react-navigation/native';
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';

const initialState={
   
}

let userDetail={
  userName:'',
  avtaarId:null,
  babyName:''
}

class DashBoard extends Component{

  constructor(props){
    super();
    this.state=initialState;
  }

static navigationOptions={
      header:null,
      headerLeft : null
    }


  // componentDidMount(){
  //  console.log(this.props)
  //   if(this.props.babyName== undefined){
  //           this.props.navigation.navigate('Register');
  //           ToastAndroid.show('First Complete Your Registration :)', ToastAndroid.SHORT);
        
  //   }  
  // }

	render(){
    userDetail.userName=this.props.userName
    userDetail.avtaarId=this.props.avtaarId
    userDetail.babyName=this.props.babyName
    console.log(userDetail)
		return(

            <AppContainer screenProps={this.props.navigation}/>
      		

			)
	}


}

const DrawerContent = (props) => {
  
  const logOut =async()=>{
    console.log("myprops",props)
    await AsyncStorage.setItem('UserLoggedIn',"false");
    const UserLoggedIn = await AsyncStorage.getItem('UserLoggedIn');
    props.screenProps.navigate('SignUp');
      console.log(UserLoggedIn)
  }
  

  return(
  <View style={{flex:1}}>
    <View
      style={{
        backgroundColor: '#ba2d65',
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image style={styles.avtaarsList} source={{ uri: 'https://backtestbaby.herokuapp.com/api/dashBoard/getAvtaar/'+userDetail.avtaarId}} />
      <View style={styles.avtaarHolder}>
      <Text style={styles.avtaarText}>{userDetail.babyName}</Text>
      </View>
    </View>
    <DrawerItems {...props} />
    <TouchableOpacity onPress={logOut} style={{height:50,flex:1,marginBottom:10,justifyContent: 'flex-end',position:'absolute',bottom:0,left:0,width:'100%'}}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
      <Icon name="md-power" size={35} color="#ba2d65" style={{marginLeft:10}}/>
      <Text style={{marginLeft:20,fontWeight:'bold',fontSize:15,textAlign:'center'}}>Logout</Text>
      </View>
    </TouchableOpacity>
      
  </View>);
}


const myApp= createDrawerNavigator({
  DashBoard:{
    screen : HomeScreen
  },
  Settings:{
    screen : SettingScreen
  },
  Notes:{
    screen : NotesHolder
  }
}
,
  {
    initialRouteName:'DashBoard',
    contentComponent: DrawerContent,
    drawerOpenRoute : 'DrawerOpen',
    drawerCloseRoute : 'DrawerClose',
    drawerToggleRoute : 'DrawerToggle',
  }

)

const AppContainer =createAppContainer(myApp);

const styles=StyleSheet.create({
  container : {
    backgroundColor : '#f48fb1',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
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
  avtaarsList:{

    width:100,
    height:100,
    marginBottom:10

  },
  avtaarText:{
    color:'#ffffff',
    fontSize:22,
    fontWeight:"900",
    textAlign:'center',
      justifyContent:'center',
      paddingBottom:10
  },
  avtaarHolder:{
    backgroundColor:'#560027',
    flexDirection:'row',
        
        paddingTop:10,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative',
        width:280,
        marginBottom:-11,
        textAlign:'center',
          justifyContent:'center'
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


export default connect(mapStateToProps,mapDispatchToProps)(DashBoard);
