import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './index.scss';

const propTypes = {
	placement: PropTypes.oneOf(['left','right','top','bottom'])
}

const defaultProps = {
	placement: 'left'
}

class Drawer extends Component{
    constructor(props){
		super(props);
		this.state = {
			showDrawer: true
		};
		this.fMaskClick = this.fMaskClick.bind(this);
	}
	fMaskClick(){
		const {onClose} = this.props;
		onClose && onClose();
	}
	render(){
		const {children,placement,show} = this.props;
		//位置样式
		const drawerClass = classNames('drawer',`drawer-${placement}`);
		const drawerStyle = {
			display: (show ? 'block' : 'none')
		}

		return (
			<div className="drawerc" style={drawerStyle}>
				<div className="drawer-mask" onClick={this.fMaskClick}></div>
				<div className={drawerClass}>
					<div className="drawer-header"></div>
					<div className="drawer-body">
						{children}
					</div>
				</div>
			</div>
		)
	}
}

Drawer.propTypes = propTypes;
Drawer.defaultProps = defaultProps;


export default Drawer;
