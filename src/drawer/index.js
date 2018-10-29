import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './index.scss';

const propTypes = {
	placement: PropTypes.oneOf(['left','right','top','bottom'])
}

const defaultPropsTypes = {
	placement: 'left'
}

class Drawer extends Component{
    constructor(props){
		super(props);
		this.state = {
			
		};
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
				<div className="drawer-mask"></div>
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
Drawer.defaultProps = defaultPropsTypes;


export default Drawer;
