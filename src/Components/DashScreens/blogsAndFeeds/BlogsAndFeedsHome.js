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

import VideoItem from './videoItem';
import data from './data.json';
import Icon from 'react-native-vector-icons/Ionicons';
import BlogCard from './blogCard.js'
import Axios from 'axios';

const initialState={
	blogsList:[],
	names:[]
}

class BlogsAndFeedsHome extends Component{

	constructor(props){
		super(props);
		this.state = initialState;
	}

	static navigationOptions={
        header:null
	  }
	  
	componentDidMount(){
		Axios.get('https://backtestbaby.herokuapp.com/api/blogs')
		.then(data=>{
			this.setState({blogsList:data.data})
			this.getUserName()
			

	})

		
	

}

	addIcon=()=>{
    	this.props.navigation.navigate('AddBlogs')
	}
	
	getUserName = ()=>{
		this.state.blogsList.map((d)=>{
		Axios.get(`https://backtestbaby.herokuapp.com/api/dashBoard/userInfo/${d.uuid}`)
		.then(data=>{
			let x = this.state.names
			x.push(data.data.userName)
			this.setState({names : x})
			
		})
		})
	}

	openFullWebPage=(link)=>{
		console.log(link)
		this.props.navigation.navigate('WebCard',{
			weblink:link
		});
	}

	render(){
		
		const blogCards = this.state.blogsList.map((d,index)=>{
		
			return <BlogCard 
					imageLink={d.image_link}
					weblink={d.video_link}
					title={d.blog_title} subTitle={d.blog_sub_title} content={d.blog_content} by={this.state.names[index]} openWeb={this.openFullWebPage}/> 
					
		})

		return(

				<View style={styles.container}>

 					<View style={styles.body}>
          				<ScrollView>
							{blogCards}
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

const styles = StyleSheet.create({

	container :{
		//borderWidth : 2
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

export default BlogsAndFeedsHome