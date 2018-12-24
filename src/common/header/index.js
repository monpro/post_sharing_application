import React ,{Component}from 'react';
import {CSSTransition} from 'react-transition-group';
import {HeaderWrapper,
        Logo,
        SearchInfoList,
        SearchInfoItem,
        SearchInfoTitle,
        SearchInfoSwitch,
        SearchInfo,
        Nav,
        NavItem,
        NavSearch,
        Addition,
        Button,
        SearchWrapper} from "./style";
import {connect} from "react-redux";
import {actionCreators} from './store/index';
class Header extends Component{
     getListArea(show){
        if(show){
            return(
                <SearchInfo>
                    <SearchInfoTitle>
                        Hot Topic
                        <SearchInfoSwitch>Change</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        <SearchInfoItem>Education</SearchInfoItem>
                        <SearchInfoItem>Life</SearchInfoItem>
                        <SearchInfoItem>Education</SearchInfoItem>
                        <SearchInfoItem>Education</SearchInfoItem>
                        <SearchInfoItem>Education</SearchInfoItem>
                        <SearchInfoItem>Education</SearchInfoItem>
                        <SearchInfoItem>Education</SearchInfoItem>
                        <SearchInfoItem>Education</SearchInfoItem>
                    </SearchInfoList>
                </SearchInfo>
            )

        }else{
            return null;

        }

    };
    render(){
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
                            in ={this.props.focused}
                            timeout={200}
                            classNames="slide">
                            <NavSearch className = {this.props.focused? 'focused': ''}
                                       onFocus = {this.props.handleInputFocus}
                                       onBlur = {this.props.handleInputBlur}>
                            </NavSearch>
                        </CSSTransition>
                        <i className = {this.props.focused? 'focused iconfont': 'iconfont'}>&#xe636;</i>
                        {this.getListArea(this.props.focused)}
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

    }
}

//stateless component


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
