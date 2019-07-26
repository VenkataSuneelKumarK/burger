/**
 * Created by kanamars on 18/07/19.
 */
import React, {Component} from 'react';
import Aux from '../../HOC/Aux';
import classes from './Layout.module.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component{
    state = {
        showSideDrawer: false
    };
    sideDrawerCloseHandler =()=>{
        this.setState({
            showSideDrawer : false
        })
    };
    menuClick = () => {
        this.setState((prevState)=>({
            showSideDrawer : !prevState.showSideDrawer
        }))
    };
    render(){
        return (
            <Aux>
                <ToolBar menuClick={this.menuClick}/>
                <SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }

}

export default Layout;