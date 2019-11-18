import React,{Component} from 'react';
import {Router,Stack,Scene} from 'react-native-router-flux';

import Login from './Components/login';
import SignUp from './pages/signup';

class Routes extends Component{

	render(){
		return(

				<Router>
				    <Stack key="root">
				      <Scene key="register" component={SignUp} title="SignUp" inital={true}/>
				      <Scene key="login" component={Login} title="Login" />
				      
				    </Stack>
				 </Router>

			)
	}



}



export default Routes;
