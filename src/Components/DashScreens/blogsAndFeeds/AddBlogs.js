/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  ToastAndroid
} from 'react-native';



const initialState={

  
  selectedInputs:{
    uuid:"",
    blogTitle:"",
    blogSubTitle:"",
    blogContent:"",
    imageLink:"",
    videoLink:"",
    description:""
  },

  showSpinner : false
  

}
 
  class AddBlogs extends Component{
  
    constructor(props){
      super(props);
      this.state=initialState
    }

    static navigationOptions={
      header:null
    }


    validateInputs=(inputList)=>{

      const {blogTitle, blogSubTitle, blogContent}=inputList;
    
      if(blogTitle==""){
        ToastAndroid.show('Please Enter Blog Title', ToastAndroid.SHORT);
        return false;
      }
      else if(blogSubTitle==""){
        ToastAndroid.show('Please Enter Blog Sub Title', ToastAndroid.SHORT);
        return false;
      }
      else if(blogContent==""){
        ToastAndroid.show('Please Enter Blog Content', ToastAndroid.SHORT);
        return false;
      }
    
      else{
      return true;}
    
    
    }
    

    blogTitleHandler=(value)=>{
        let temp=this.state.selectedInputs;
        temp.blogTitle=value;
        this.setState({selectedInputs:temp})
      }


    
    blogSubTitleHandler=(value)=>{
        let temp=this.state.selectedInputs;
        temp.blogSubTitle=value;
        this.setState({selectedInputs:temp})
      }

  
    blogContentHandler=(value)=>{
        let temp=this.state.selectedInputs;
        temp.blogContent=value;
        this.setState({selectedInputs:temp})
      }

    imageLinkHandler=(value)=>{
        let temp=this.state.selectedInputs;
        temp.imageLink=value;
        this.setState({selectedInputs:temp})
      }

    videoLinkHandler=(value)=>{
        let temp=this.state.selectedInputs;
        temp.videoLink=value;
        this.setState({selectedInputs:temp})
      }


    DescriptionHandler=(value)=>{
        let temp=this.state.selectedInputs;
        temp.description=value;
        this.setState({selectedInputs:temp})
      }


    
    loggingUp=()=>{
        this.setState({showSpinner:true})
        if(this.validateInputs(this.state.selectedInputs))
        {
          axios.post('https://backtestbaby.herokuapp.com/api/blogs',{
            uuid:this.props.uuid,
            blog_title:this.state.selectedInputs.blogTitle,
            blog_sub_title:this.state.selectedInputs.blogSubTitle,
            blog_content:this.state.selectedInputs.blogContent,
            image_link:this.state.selectedInputs.imageLink,
            video_link:this.state.selectedInputs.videoLink,
            description:this.state.selectedInputs.description 
        }).then(data =>{
            console.log(data.data)
            if(data.data[0].uuid==this.props.uuid){
                this.setState({showSpinner:false})
                ToastAndroid.show('Blog Added Successfully :)', ToastAndroid.SHORT);
                this.props.navigation.navigate('HomeScreen')
            }
            else{
                this.setState({showSpinner:false})
                ToastAndroid.show('Blog Added UnSuccessfully :( check Connection or Fields!!', ToastAndroid.SHORT);  
            }
        })
        .catch(err=>{
            this.setState({showSpinner:false})
                ToastAndroid.show('Blog Added UnSuccessfully :( check Connection or Fields!!', ToastAndroid.SHORT);
        })

        }
        
    }
  
    render(){

        console.log(this.state)

      return(

  
        <KeyboardAwareScrollView
        style={{ backgroundColor: '#4c69a5' }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={true}
      >

        <View style={styles.container}>
          
          <View style={styles.Inputhandler}>
          <Icon name="md-bookmarks" size={30} color="rgba(0,0,0,0.7)"/> 
          <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Blog Title"
          placeholderTextColor='#ffffff'
          value={this.state.blogTitle} 
          onChangeText={this.blogTitleHandler}
          />
          </View>

          <View style={styles.Inputhandler}>
          <Icon name="md-bookmark" size={30} color="rgba(0,0,0,0.7)"/> 
          <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Blog Sub Title"
          placeholderTextColor='#ffffff'
          value={this.state.blogSubTitle} 
          onChangeText={this.blogSubTitleHandler}
          />
          </View>


         


          <View style={styles.Inputhandler}>
          <Icon name="md-photos" size={30} color="rgba(0,0,0,0.7)"/> 
          <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Image Link"
          placeholderTextColor='#ffffff'
          value={this.state.imageLink} 
          onChangeText={this.imageLinkHandler}
          /> 
          </View>


          <View style={styles.Inputhandler}>
          <Icon name="md-videocam" size={30} color="rgba(0,0,0,0.7)"/> 
          <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Web Link"
          placeholderTextColor='#ffffff'
          value={this.state.VideoLink} 
          onChangeText={this.videoLinkHandler}
          />
          </View>


          <View style={styles.Inputhandler}>
          <Icon name="md-clipboard" size={30} color="rgba(0,0,0,0.7)"/> 
          <TextInput style={styles.inputBoxs} underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Blog Content"
          placeholderTextColor='#ffffff'
          value={this.state.blogContent} 
          onChangeText={this.blogContentHandler}
          />
          </View>

{/*           
          <View style={styles.Inputhandler}>
          <Icon name="md-text" size={30} color="rgba(0,0,0,0.7)"/> 
          <TextInput style={styles.inputBoxs} multiline underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Description"
          placeholderTextColor='#ffffff'
          value={this.state.description} 
          onChangeText={this.DescriptionHandler}
          />
          </View> */}
          

  
          {this.props.showSpinner ? 
           <ActivityIndicator style={styles.spinner} size="small" color="#ffffff" />:
          <TouchableOpacity style={styles.button} onPress={this.loggingUp}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        }
        </View>

        </KeyboardAwareScrollView>
  
  
        )
    }
  
  }

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
  
  
  export default  connect(mapStateToProps,mapDispatchToProps)(AddBlogs)
  
  const styles=StyleSheet.create({
    container : {
      flexGrow:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor : '#f48fb1',
      
    },
    inputBox:{
      width:300,//320max
      backgroundColor:'rgba(255,255,255,0.3)',
      borderRadius: 25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#ffffff',
      marginVertical:10,
      marginLeft:10
  
    },
    
    
    inputBoxs:{
        width:300,//320max
        height:150,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius: 15,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical:8,
        marginLeft:10,
      },

      Inputhandler:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },

    buttonText:{
      fontSize:18,
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
    spinner:{
      width:150,
      borderRadius: 25,
      color:'#ffffff',
      marginVertical:10,
      paddingVertical:12,
      backgroundColor:'#ba2d65'
    }
    
  })
  