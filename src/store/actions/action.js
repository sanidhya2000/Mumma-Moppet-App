import {SETUUID,GETUUID} from './actionTypes'



export const setUuid=(userId)=>{
    return{
        type:SETUUID,
        userId:userId
    }
}

export const getUuid=()=>{
	return{
		type:GETUUID
	}
}


