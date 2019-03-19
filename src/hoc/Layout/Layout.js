import React, {Component} from 'react';
import Aux from '../Auxx/Auxx';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer:false})
    }

    sideDraweToggleHandler = () => {
        this.setState((prevState)=>{ return {showSideDrawer: !prevState.showSideDrawer}})
    }


    render() {
        return (
            <Aux>   
                <Toolbar open={this.sideDraweToggleHandler}></Toolbar>
                <SideDrawer clicked = {this.sideDrawerCloseHandler} open={this.state.showSideDrawer}/>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
} 

export default Layout;