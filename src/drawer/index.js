import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './index.scss';

const propTypes = {
	placement: PropTypes.oneOf(['left','right','top','bottom']),
	hasHeader: PropTypes.bool,
	show: PropTypes.bool,
	title: PropTypes.string
}

const defaultProps = {
	placement: 'left',
	hasHeader: true,
	show: false
}

class Drawer extends Component{
    constructor(props){
		super(props);
		this.state = {
			showDrawer: true,
			width: '0'
		};
		this.drawer = null;
		this.fMaskClick = this.fMaskClick.bind(this);
		this.fDrawerTransitionEnd = this.fDrawerTransitionEnd.bind(this);
	}
	fMaskClick(){
		const {onClose} = this.props;
		onClose && onClose();
	}
	fDrawerTransitionEnd(e){
		
	}
	render(){
		const {children,placement,show,title,hasHeader} = this.props;
		//容器样式
		let drawercStyle;
		//mask样式
		let maskStyle;
		if(show){
			drawercStyle = {
				width: '100%'
			}
			maskStyle = {
				opacity: 1,
				width: '100%'
			}
		}
		else{
			drawercStyle = {
				width: 0
			}
			maskStyle = {
				opacity: 0,
				width: 0
			}
		}
		//抽屉类
		const drawerClass = classNames('drawer',`drawer-${placement}`);
		//根据位置获取抽屉样式
		const translateHideMap = {
			left: 'translateX(-100%)',
			right: 'translateX(100%)',
			top: 'translateY(-100%)',
			bottom: 'translateY(100%)'
		}; 
		const translate = show ? 'translate(0,0)' : translateHideMap[placement];
		//抽屉面板样式
		const drawerStyle = {
			transform: translate
		}

		return (
			<div className="drawerc" style={drawercStyle}>
				<div className="drawer-mask" style={maskStyle} onClick={this.fMaskClick}></div>
				<div ref={(drawer) => {this.drawer = drawer}} onTransitionEnd={this.fDrawerTransitionEnd} className={drawerClass} style={drawerStyle}>
					{
						hasHeader ?
						(<div className="drawer-header">
							<div className="drawer-header-title">{title}</div>
						</div>) : ''
					}
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
