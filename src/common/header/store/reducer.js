import {actionTypes} from "./index"
import {fromJS} from "immutable";


//immutable.js object cannot be changed
//developed by facebook
const defaultState = fromJS({
    focused: false
});

export default (state = defaultState, action) => {
    if(action.type === actionTypes.SEARCH_FOCUS){
        //immutable set will combine the value of immutable object and
        //value of set, return a new immutable object with the set value
        return state.set('focused',true);
    }
    else if(action.type === actionTypes.SEARCH_BLUR){
        return state.set('focused',false);
    }
    return state;
}

