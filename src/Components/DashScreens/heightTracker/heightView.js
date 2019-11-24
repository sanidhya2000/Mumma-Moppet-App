import React,{Component} from 'react'
import {View,Text,ScrollView,StyleSheet,ToastAndroid} from 'react-native'
import HeightCard from './heightCard.js'
import axios from 'axios'
import {connect} from 'react-redux'

const initialState={
	heightData:[]
}

class HeightView extends Component{
	constructor(props){
		super(props);
		this.state=initialState
	}

	componentDidMount(){
		axios.get(`https://backtestbaby.herokuapp.com/api/overallGrowth/${this.props.uuid}`)
		.then(data=>{
			this.setState({heightData:data.data})
		})
	}

	submitHeight=(index,height)=>{
		let tempdata = this.state.heightData;
		tempdata[index-1].height = Number(height);
		this.setState({heightData:tempdata})
		axios.post('https://backtestbaby.herokuapp.com/api/overallGrowth/submitData/height',{
		 	uuid:tempdata[index-1].uuid,
		 	currDate:tempdata[index-1].date,
		 	height:Number(height)
		 }).then(data=>{
		 	if(data.data.status!="done"){
		 		ToastAndroid.show('Some Error!!', ToastAndroid.SHORT);
		 		let x = this.state.heightData;
				tempdata[index-1].height = 0;
				this.setState({heightData:tempdata})
		 	}
		 }).catch(err=>{
		 	console.log(err)
		 	ToastAndroid.show('Some Error!!', ToastAndroid.SHORT);
		 		let x = this.state.heightData;
				tempdata[index-1].height = 0;
				this.setState({heightData:tempdata})
		 })
	}

	doneAlready=()=>{
		ToastAndroid.show('Already Done!!', ToastAndroid.SHORT);
	}

	render(){
		console.log(this.state.heightData)
		let heightCardList = this.state.heightData.map((d,i)=>{
			let today = new Date();
			let exp_date = new Date(d.date);
			let passDate= exp_date.getDate()+'-'+(exp_date.getMonth()+1)+'-'+exp_date.getFullYear()

			if(today < exp_date){
				return <HeightCard key={i} sno={i+1} date={passDate} heightFeed="" status="notAllowed" isEditable={false} footer="Not Allowed Right Now !!"/>
			}
			else{
				console.log(d.height.toString())
				if(d.height.toString() == "0"){
				return <HeightCard key={i} sno={i+1} date={passDate} heightFeed="" status="submit" isEditable={true} footer="Click on Arrow Icon to Submit Height !!" pressEvent={this.submitHeight}/>
				}
				else{
				return	<HeightCard key={i} sno={i+1} date={passDate} heightFeed={d.height}  status="done" isEditable={false} footer="You have already Submitted this data !!" pressEvent={this.doneAlready}/>
					
				}
			}

		})
		console.log(heightCardList)

		return(
				<ScrollView >
					{heightCardList}
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


export default connect(mapStateToProps,mapDispatchToProps)(HeightView);