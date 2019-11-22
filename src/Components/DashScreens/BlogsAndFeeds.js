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


class BlogsAndFeeds extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return(

				<View style={styles.container}>

					<Text>Blogs and Feeds </Text>

				</View>

			)
	}

}

const styles = StyleSheet.create({

	container :{
		borderWidth : 2
	}

})

export default BlogsAndFeeds