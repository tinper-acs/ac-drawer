/**
 *
 * @title toast
 * @description toast基本示例
 *
 */

import React, { Component } from 'react';
import Drawer from '../../src/index';

class Demo1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            placement: 'left'
        };
        this.fPositionChange = this.fPositionChange.bind(this);
    }
    fPopDrawer(){
        
    }
    fPositionChange(e){
        console.log(e.target.value);
        this.setState({
            placement: e.target.value
        })
    }
    render () {
        let {placement} = this.state;
        console.log('placement:' + placement);
        console.log(placement == 'left');

        return (
            <div className="demoPadding">
                <div className="placementc">
                    <label><input type="radio" value="left" checked={placement==='left'} onChange={this.fPositionChange} name="rdplacement" />left</label>
                    <label><input type="radio" value="right" checked={placement==='right'} onChange={this.fPositionChange} name="rdplacement" />right</label>
                    <label><input type="radio" value="top" checked={placement==='top'} onChange={this.fPositionChange} name="rdplacement" />top</label>
                    <label><input type="radio" value="bottom" checked={placement==='bottom'} onChange={this.fPositionChange} name="rdplacement" />bottom</label>
                </div>
                <button className="btn" onClick={this.fPopDrawer}>基本消息</button>
                <Drawer>
                    <p>撑着油纸伞，独自彷徨在悠长、悠长 又寂寥的雨巷</p>
                    <p>我希望逢着 一个丁香一样地 结着愁怨的姑娘 </p>
                    <p>她是有 丁香一样的颜色 丁香一样的芬芳 丁香一样的忧愁 </p>
                </Drawer>
            </div>
        )
    }
}

export default Demo1;
