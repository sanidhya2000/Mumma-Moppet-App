import {SETUUID,GETUUID,SETUSERDETAIL} from './actionTypes'



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

export const setUserDetail=(userName,babyName,avtaarId)=>{
	return{
		type : SETUSERDETAIL,
		userName : userName,
		babyName : babyName,
		avtaarId : avtaarId
	}
}

