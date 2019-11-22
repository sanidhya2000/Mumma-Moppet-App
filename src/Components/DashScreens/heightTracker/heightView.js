import React,{Component} from 'react'
import {View,Text,ScrollView,StyleSheet} from 'react-native'
import HeightCard from './heightCard.js'

class HeightView extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
				<ScrollView >
					<HeightCard sno={1} date="23-06-2000" heightFeed="23.0" status="done" isEditable={false} footer="You have already Submitted this data !!"/>
					<HeightCard sno={2} date="25-06-2000" heightFeed="25.0" status="submit" isEditable={true} footer="Click on Arrow Icon to Submit Height !!"/>
					<HeightCard sno={3} date="28-06-2000" heightFeed="0.0" status="notAllowed" isEditable={false} footer="Not Allowed Right Now !!"/>
					
				</ScrollView>

			)
	}
}

const styles = StyleSheet.create({
	container:{
		flex : 1,
		borderWidth : 5
	}
})

export default HeightView;