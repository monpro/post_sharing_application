import {actionTypes} from "./index"
import {fromJS} from "immutable";


//immutable.js object cannot be changed
//developed by facebook
const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false
});

export default (state = defaultState, action) =>{
    switch(action.type) {
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false);
        case actionTypes.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
        case actionTypes.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state;
    }
}
