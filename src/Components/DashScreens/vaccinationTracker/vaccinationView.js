import React,{Component} from 'react'
import {View,Text,ScrollView,ToastAndroid} from 'react-native'
import VaccineBlock from './vacinationHolder.js'
import axios from 'axios'
import {connect} from 'react-redux'

const initialState={
	vaccineData:[]
}

class VaccinationView extends Component{
	constructor(props){
		super(props);
		this.state = initialState
	}

	componentDidMount(){

		axios.get(`https://backtestbaby.herokuapp.com/api/vaccination/${this.props.uuid}`)
		.then(data=>{
			this.setState({vaccineData:data.data})
		})
		//console.log("Mounting")
	}

	updateToDone = (v_id) =>{
		console.log(v_id)
		let x = this.state.vaccineData;
		x[v_id-1].user_response=true;
		this.setState({vaccineData:x})
		 axios.post('https://backtestbaby.herokuapp.com/api/vaccination/update_vaccination_detailes',{
		 	uuid:x[v_id-1].uuid,
		 	vaccination_id:v_id
		 }).then(data=>{
		 	if(data.data.user_response!=true){
		 		ToastAndroid.show('Some Error!!', ToastAndroid.SHORT);
		 		let x = this.state.vaccineData;
				x[v_id-1].user_response=false;
				this.setState({vaccineData:x})
		 	}
		 }).catch(err=>{
		 	console.log(err)
		 	ToastAndroid.show('Some Error!!', ToastAndroid.SHORT);
		 		let x = this.state.vaccineData;
				x[v_id-1].user_response=false;
				this.setState({vaccineData:x})
		 })
	}

	doneUpdateError = (v_id) =>{
		console.log(v_id)
		ToastAndroid.show('Already Done!!', ToastAndroid.SHORT);
	}

	timeExceedError = (v_id) =>{
		console.log(v_id)
		ToastAndroid.show('Its Not the right Time!!', ToastAndroid.SHORT);
	}


	render(){
		let vaccineList = this.state.vaccineData.map((d)=>{
			let today = new Date();
			let exp_date = new Date(d.expected_date);
			let passDate= exp_date.getDate()+'-'+(exp_date.getMonth()+1)+'-'+exp_date.getFullYear()

			if(today < exp_date){
				return <VaccineBlock key={d.vaccination_id} sNo={d.vaccination_id} name={d.vaccination_name} duration={d.duration} date={passDate} status="notAllowed" pressEvent={this.timeExceedError}/>
			}
			else{
				if(d.user_response){
					return <VaccineBlock key={d.vaccination_id} sNo={d.vaccination_id} name={d.vaccination_name} duration={d.duration} date={passDate} status="done" pressEvent={this.doneUpdateError}/>	
				}
				else{
					return <VaccineBlock key={d.vaccination_id} sNo={d.vaccination_id} name={d.vaccination_name} duration={d.duration} date={passDate} status="notDone" pressEvent={this.updateToDone}/>
				}
			}

		})

		console.log(vaccineList)
		return(
				<ScrollView>
					{vaccineList}
				</ScrollView>

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


export default connect(mapStateToProps,mapDispatchToProps)(VaccinationView);