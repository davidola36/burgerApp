import React, {Component} from 'react';
import classes from './Modal.css'
import Aux from '../../../hoc/Auxx/Auxx'
import Backdrop from '../Backdrop/Backdrop'


class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show
    }

    // componentWillUpdate() {
    //     console.log('[Modal] component updated')
    // }

    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)'}}
                >
                {this.props.children}
            </div>
            </Aux>
           
        )
    }
}


export default Modal