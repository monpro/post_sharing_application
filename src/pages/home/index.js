import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import {actionCreators} from "./store";
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from "./style"


//pureComponent have implemented should component update
class Home extends PureComponent{


    handleScrollTop(){
        window.scrollTo(0,0);
    }
    render() {
        const {showScroll} = this.props;
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img alt ="" className= "banner-img" src = "data:image/jpeg;base64,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"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                    right
                </HomeRight>
                {showScroll ? <BackTop onClick = {this.handleScrollTop}>Back to Top</BackTop>: null}
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();

    }
    bindEvents(){
        window.addEventListener("scroll", this.props.changeScrollTopShow)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.props.changeScrollTopShow);
    }
}



const mapDispatchToProps = (dispatch) => ({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 100){
            dispatch(actionCreators.BackTopShow(true));
    }else{
            dispatch(actionCreators.BackTopShow(false))
    }}
});

const mapStateToProps = (state) => ({
   showScroll: state.getIn(['home','showScroll'])
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);