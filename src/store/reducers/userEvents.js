import axios from 'axios'
import {SETUUID,GETUUID,SETUSERDETAIL} from '../actions/actionTypes'
const initialState={
	uuid:'',
	userName:'',
	avtaarId:1,
	babyName:'',

}



const reducer = (state=initialState,action)=>{
	switch(action.type){
		case SETUUID:
			return {
				...state,
				uuid:action.userId
			};


		case GETUUID:
			return {
				...state
			}

		case SETUSERDETAIL:
			return{
				...state,
				userName : action.userName,
				babyName : action.babyName,
				avtaarId : action.avtaarId
			}


		default:
            return state;
	}

}

export default reducer;
