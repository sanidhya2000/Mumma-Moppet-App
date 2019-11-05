import React,{Component} from 'react'

import {Text} from 'react-native'

class Login extends Component{

	constructor(props){
		super();
	}

static navigationOptions={
      header:null
    }
	render(){
		return(

			<Text>Login Component </Text>

			)
	}


}

export default Login