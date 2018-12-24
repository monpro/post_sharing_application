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
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
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

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER

});

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
});

export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page: page
});
