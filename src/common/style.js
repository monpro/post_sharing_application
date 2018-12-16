import styled from "styled-components"
import logoPic from "../statics/logo.png"
export const HeaderWrapper = styled.div`
    position: relative;
    height:58px;
    border-bottom:1px solid #f0f0f0
    `;

export const Logo = styled.a.attrs({
    href: "/"
})`
     position: absolute;
     top: 0px;
     left: 0px;
     display: block;
     width: 100px;
     height: 56px;
     background: url(${logoPic});
     background-size: contain;
    `;

export const Nav = styled.div`
    width: 900px;
    margin: 0 auto;
    height: 100%;
    box-sizing: border-box;
    padding-right: 70px;
    
    `;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
    
    `;

export const NavSearch = styled.input.attrs({
    placeholder:"search"
})`
    margin-top: 9px;
    padding: 0 20px;
    width: 160px;
    height: 38px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    margin-left: 20px;
    &::placeholder{
        color: #999;
    }
`

export const Addition = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    height: 56px;
`

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    font-size: 14px;
    border: 1px solid #ec6149;
    &.reg {
        color: #ec6149;
    }
    &.writting{
        color: #fff;
        background: #ec6149;
    }
`;