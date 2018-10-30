/**
 *
 * @title toast
 * @description toast基本示例
 *
 */

import React, { Component } from 'react';
import Drawer from '../../src/index';
import Radio from './Radio/index';

class Demo1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            placement: 'left',
            showDrawer: false
        };
        this.fPositionChange = this.fPositionChange.bind(this);
        this.fPopDrawer = this.fPopDrawer.bind(this);
        this.fCloseDrawer = this.fCloseDrawer.bind(this);
    }
    fPopDrawer(){
        this.setState({
            showDrawer: true
        })
    }
    fPositionChange(value){
        this.setState({
            placement: value
        })
    }
    fCloseDrawer(){
        this.setState({
            showDrawer: false
        })
    }
    render () {
        let {placement,showDrawer} = this.state;

        return (
            <div className="demoPadding">
                <div className="placementc">
                    <Radio.RadioGroup
                        name="placement"
                        selectedValue={placement}
                        onChange={this.fPositionChange}>
                        <Radio value="left" >left</Radio>
                        <Radio value="right" >right</Radio>
                        <Radio value="top" >top</Radio>
                        <Radio value="bottom" >bottom</Radio>
                    </Radio.RadioGroup>
                </div>
                <button className="btn" onClick={this.fPopDrawer}>基本消息</button>
                <Drawer show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>
                    <p>撑着油纸伞，独自彷徨在悠长、悠长 又寂寥的雨巷</p>
                    <p>我希望逢着 一个丁香一样地 结着愁怨的姑娘 </p>
                    <p>她是有 丁香一样的颜色 丁香一样的芬芳 丁香一样的忧愁 </p>
                </Drawer>
            </div>
        )
    }
}

export default Demo1;
