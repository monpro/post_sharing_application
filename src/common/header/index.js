import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {HeaderWrapper,Logo, Nav,NavItem,NavSearch,Addition, Button,SearchWrapper} from "./style";
import {connect} from "react-redux";
import {actionCreators} from './store/index';
//stateless component
const Header = (props) =>{
    return(
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className = "left active">Main</NavItem>
                <NavItem className = "left">Download</NavItem>
                <NavItem className = "right">Login</NavItem>
                <NavItem className = "right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in ={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch className = {props.focused? 'focused': ''}
                                   onFocus = {props.handleInputFocus}
                                   onBlur = {props.handleInputBlur}
                        >
                        </NavSearch>
                    </CSSTransition>
                    <i className = {props.focused? 'focused iconfont': 'iconfont'}>&#xe636;</i>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className = "reg">
                    Sign Up
                </Button>
                <Button className = "writting">
                    <i className="iconfont">&#xe825;</i>
                    Make a post
                </Button>
            </Addition>
        </HeaderWrapper>
    )
};

//store state to props
const mapStateToProps = (state) =>{
    return {
        focused: state.getIn(['header','focused'])
    }
};

const mapDispatchToProps = (dispatch) => {
  return{
      handleInputFocus(){
          dispatch(actionCreators.searchFocus());
      },
      handleInputBlur(){
          dispatch(actionCreators.searchBlur());
      }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);
