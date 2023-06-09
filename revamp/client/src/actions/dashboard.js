import {FETCH_USERS} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const get = () => async (dispatch) => {
    try {
        const {data} = await api.get();
        dispatch({type: FETCH_USERS, payload: data});
    }
    catch(error){
        console.log(error);
    }
    
}
