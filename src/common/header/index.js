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
     getListArea(){
         const{focused, list, page, totalPage, mouseIn, handleMouseEnter,handleMouseLeave, handleChangePage} = this.props;
         const jsList = list.toJS();
         const pageList = [];

         if(jsList.length){
             for( let i = (page - 1) * 10; i < page * 10; i++){
                 pageList.push(<SearchInfoItem key ={i}>{jsList[i]}</SearchInfoItem>)
             }
         }



         if(focused || mouseIn){
            return(
                <SearchInfo
                    onMouseEnter = {handleMouseEnter}
                    onMouseLeave = {handleMouseLeave}
                >
                    <SearchInfoTitle>
                        Hot Topic
                        <SearchInfoSwitch onClick = {() => handleChangePage(page,totalPage, this.spinIcon)}>
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                            Change
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}

                    </SearchInfoList>
                </SearchInfo>
            )

        }else{
            return null;

        }

    };
    render(){
        const {focused, list, handleInputFocus, handleInputBlur} = this.props;
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
                            in ={focused}
                            timeout={200}
                            classNames="slide">
                            <NavSearch className = {focused? 'focused': ''}
                                       onFocus = {() => handleInputFocus(list)}
                                       onBlur = {handleInputBlur}>
                            </NavSearch>
                        </CSSTransition>
                        <i className = {focused? 'focused iconfont zoom': 'iconfont zoom'}>&#xe636;</i>
                        {this.getListArea()}
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

//store state to props
const mapStateToProps = (state) =>{
    return {
        //get data from focused in header
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage: state.getIn(['header','totalPage'])
    }
};

const mapDispatchToProps = (dispatch) => {
  return{
      handleInputFocus(list){
          (list.size === 0) && dispatch(actionCreators.getList());


          dispatch(actionCreators.searchFocus());
      },
      handleInputBlur(){
          dispatch(actionCreators.searchBlur());
      },
      handleMouseEnter(){
          dispatch(actionCreators.mouseEnter());

      },
      handleMouseLeave(){
          dispatch(actionCreators.mouseLeave());
      },
      handleChangePage(page, totalPage,spin){
          console.log(spin);
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,"");
            if (originAngle ){
                originAngle = parseInt(originAngle, 10);
            }
            else{
                originAngle = 0;
            }
            console.log(originAngle);
            spin.style.transform = 'rotate(' + (originAngle + 180) + 'deg)';
          if (page < totalPage){
              dispatch(actionCreators.changePage(page + 1));
          }else{
              dispatch(actionCreators.changePage(1));
          }
      }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);
