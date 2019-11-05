import axios from 'axios'
import {SETUUID,GETUUID} from '../actions/actionTypes'
const initialState={
	uuid:''
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

		default:
            return state;
	}

}

export default reducer;
