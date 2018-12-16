import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {HeaderWrapper,Logo, Nav,NavItem,NavSearch,Addition, Button,SearchWrapper} from "./style";

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            focused: false
        };
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }
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
                            in ={this.state.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch className = {this.state.focused? 'focused': ''}
                            onFocus = {this.handleInputFocus}
                            onBlur = {this.handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className = {this.state.focused? 'focused iconfont': 'iconfont'}>&#xe636;</i>
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
    handleInputFocus(){
        this.setState({
            focused: true
        })
    };
    handleInputBlur(){
        this.setState({
            focused:false
        })
    };



}



export default Header;
