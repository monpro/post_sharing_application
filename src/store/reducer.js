import {combineReducers} from "redux-immutable";
import {reducer as headerReducer} from "../common/header/store";
//redux-immutable make all state immutable
const reducer = combineReducers({
    header: headerReducer
});

export default reducer;

