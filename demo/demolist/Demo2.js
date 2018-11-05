/**
 *
 * @title Drawer
 * @description Drawer自定义位置示例
 *
 */

import React, { Component } from 'react';
import Drawer from '../../src/index';
import Radio from './Radio/index';

class Demo2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            placement: 'right',
            showDrawer: false,
            title: 'Drawer'
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
        let {placement,showDrawer,title} = this.state;
        title = placement[0].toUpperCase() + placement.slice(1) + ' ' + title;

        return (
            <div className="demoPadding demo1">
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
                <div className="btnc">  
                    <button className="btn" onClick={this.fPopDrawer}>打开</button>
                </div>
                <Drawer title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>
                    <div className="con">
                        <p>撑着油纸伞，独自彷徨在悠长、悠长 又寂寥的雨巷</p>
                        <p>我希望逢着 一个丁香一样地 结着愁怨的姑娘 </p>
                        <p>她是有 丁香一样的颜色 丁香一样的芬芳 丁香一样的忧愁 </p>                                                 
                    </div>
                </Drawer>
            </div>
        )
    }
}

export default Demo2;
