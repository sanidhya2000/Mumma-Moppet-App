import React,{Component} from 'react'
import {View,Text,ScrollView,StyleSheet,ToastAndroid} from 'react-native'
import WeightCard from './weightCard.js'
import axios from 'axios'
import {connect} from 'react-redux'

const initialState={
	weightData:[]
}

class WeightView extends Component{
	constructor(props){
		super(props);
		this.state=initialState
	}

	componentDidMount(){
		axios.get(`https://backtestbaby.herokuapp.com/api/overallGrowth/${this.props.uuid}`)
		.then(data=>{
			this.setState({weightData:data.data})
		})
	}

	submitWeight=(index,weight)=>{
		let tempdata = this.state.weightData;
		tempdata[index-1].weight = Number(weight);
		this.setState({weightData:tempdata})
		axios.post('https://backtestbaby.herokuapp.com/api/overallGrowth/submitData/weight',{
		 	uuid:tempdata[index-1].uuid,
		 	currDate:tempdata[index-1].date,
		 	weight:Number(weight)
		 }).then(data=>{
		 	if(data.data.status!="done"){
		 		ToastAndroid.show('Some Error!!', ToastAndroid.SHORT);
		 		let x = this.state.weightData;
				tempdata[index-1].weight = 0;
				this.setState({weightData:tempdata})
		 	}
		 }).catch(err=>{
		 	console.log(err)
		 	ToastAndroid.show('Some Error!!', ToastAndroid.SHORT);
		 		let x = this.state.weightData;
				tempdata[index-1].height = 0;
				this.setState({weightData:tempdata})
		 })
	}

	doneAlready=()=>{
		ToastAndroid.show('Already Done!!', ToastAndroid.SHORT);
	}

	render(){
		console.log(this.state.weightData)
		let WeightCardList = this.state.weightData.map((d,i)=>{
			let today = new Date();
			let exp_date = new Date(d.date);
			let passDate= exp_date.getDate()+'-'+(exp_date.getMonth()+1)+'-'+exp_date.getFullYear()
			if(today < exp_date){
				return <WeightCard key={i} sno={i+1} date={passDate} weightFeed="" status="notAllowed" isEditable={false} footer="Not Allowed Right Now !!"/>
			}
			else{
				console.log(d.weight.toString())
				if(d.weight.toString() == "0"){
				return <WeightCard key={i} sno={i+1} date={passDate} weightFeed="" status="submit" isEditable={true} footer="Click on Arrow Icon to Submit Height !!" pressEvent={this.submitWeight}/>
				}
				else{
				return	<WeightCard key={i} sno={i+1} date={passDate} weightFeed={d.weight}  status="done" isEditable={false} footer="You have already Submitted this data !!" pressEvent={this.doneAlready}/>
					
				}
			}

		})
		console.log(WeightCardList)

		return(
				<ScrollView >
					{WeightCardList}
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


export default connect(mapStateToProps,mapDispatchToProps)(WeightView);