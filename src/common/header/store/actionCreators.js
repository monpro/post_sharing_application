import {actionTypes} from './index'
import axios from 'axios';
import {fromJS} from 'immutable';
export const searchFocus = ()=>({
    type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = ()=>({
    type: actionTypes.SEARCH_BLUR
});

const changeList = (data)=>({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data)
});
//if you want actionCreator return a function
//use redux-thunk
export const getList = () =>{
    return (dispatch) =>{
        axios.get('/api/headerList.json').then((res) =>{
            const data = res.data;
            dispatch(changeList(data.data));
            //if you changed the value of store
            //must use dispatch - store - reducer
        }).catch(()=>{
            console.log("error");
        });
    }
};

