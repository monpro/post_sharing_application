import React, {Component} from 'react';
import {HeaderWrapper,Logo, Nav,NavItem,NavSearch,Addition, Button} from "./style";

class Header extends Component{
    render(){
        return(
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className = "left active">Main</NavItem>
                    <NavItem className = "left">Download</NavItem>
                    <NavItem className = "right">Login</NavItem>
                    <NavItem className = "right">Aa</NavItem>
                    <NavSearch></NavSearch>
                </Nav>
                <Addition>
                    <Button className = "reg">Sign Up</Button>
                    <Button className = "writting">Make a post</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header;
