import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {bindAll} from './common';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './index.scss';

const propTypes = {
	placement: PropTypes.oneOf(['left','right','top','bottom']),
	hasHeader: PropTypes.bool,
	show: PropTypes.bool,
	title: PropTypes.string,
	className: PropTypes.string,
	showMask: PropTypes.bool,
	maskClosable: PropTypes.bool,
	zIndex: PropTypes.number,
	showClose: PropTypes.bool,
	width: PropTypes.string,
	height: PropTypes.string
}

const defaultProps = {
	placement: 'left',
	hasHeader: true,
	show: false,
	showMask: true,
	maskClosable: true,
	zIndex: 100000,
	showClose: false,
	width: 'auto',
	height: 'auto'
}

class Drawer extends Component{
    constructor(props){
		super(props);
		this.state = {
			showDrawer: true,
			width: '0'
		};
		this.drawer = null;
		bindAll(this,['fMaskClick','fDrawerTransitionEnd','renderMask','renderClose','fCloseClick']);
	}
	fMaskClick(){
		const {maskClosable} = this.props;
		if(maskClosable){
			const {onClose} = this.props;
			onClose && onClose();
		}
	}
	fCloseClick(){
		const {onClose} = this.props;
		onClose && onClose();
	}
	fDrawerTransitionEnd(e){
		
	}
	renderMask(){
		const {show,showMask,fMaskClick} = this.props;
		//mask样式
		let maskStyle;
		if(show){
			maskStyle = {
				opacity: 1,
				width: '100%'
			}
		}
		else{
			maskStyle = {
				opacity: 0,
				width: 0
			}
		}
		return (
			showMask ? <div className="drawer-mask" style={maskStyle} onClick={this.fMaskClick}></div> : null
		)
	}
	renderClose(){
		const {showClose} = this.props;
		return (
			showClose ? <i className="drawer-close" onClick={this.fCloseClick}>×</i> : null
		)
	}
	render(){
		let {children,placement,show,title,hasHeader,className,zIndex,width,height} = this.props;
		//容器类
		const drawercClass = classNames('drawerc',className);
		//容器样式
		let drawercStyle = {zIndex:zIndex}
		if(show){
			drawercStyle.width = '100%';
		}
		else{
			drawercStyle.width = 0;
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
		if(placement == 'top' || placement == 'bottom'){
			if(width == 'auto'){
				width = '100%';
			}
		}
		if(placement == 'left' || placement == 'right'){
			if(height == 'auto'){
				height = '100%';
			}
		}
		const drawerStyle = {
			transform: translate,
			webkitTransform: translate,
			width: width,
			height: height
		}

		return (
			<div className={drawercClass} style={drawercStyle}>
				{this.renderMask()}
				<div ref={(drawer) => {this.drawer = drawer}} onTransitionEnd={this.fDrawerTransitionEnd} className={drawerClass} style={drawerStyle}>
					{this.renderClose()}
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
