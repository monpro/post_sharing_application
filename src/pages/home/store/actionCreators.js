import axios from "axios";
import * as constants from "./constants";
import {fromJS} from "immutable";

const changeHomeData = (result) => {
    return ({
            type: constants.CHANGE_HOME_DATA,
            topicList: result.topicList,
            articleList: result.articleList,
            recommendList: result.recommendList
        })
};



export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get("/api/home.json").then((res) =>{
            const result = res.data.data;
            const action = changeHomeData(result);
            dispatch(action);
        })
    }
};

const addHomeList = (list, nextPage) => {
    return({
        type: constants.CHANGE_ARTICLE_LIST,
        list: fromJS(list),
        nextPage: fromJS(nextPage)
    })
};

export const getMoreList = (page) => {
    return (dispatch) =>{
        axios.get("/api/homeList.json?page=" + page).then((res) =>{
            const result = res.data.data;
            dispatch(addHomeList(result, page + 1));

        })
    }
};