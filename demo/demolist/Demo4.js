/**
 *
 * @title Drawer
 * @description Drawer多层抽屉
 *
 */

import React, { Component } from 'react';
import Drawer from '../../src/index';

class Demo4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            placement: 'right',
            showDrawer: false,
            title: 'Basic Drawer',
            secondTitle: 'Second Drawer',
            showSecondDrawer: false,
            secondPlacement: 'right'
        };
        this.fPopDrawer = this.fPopDrawer.bind(this);
        this.fCloseDrawer = this.fCloseDrawer.bind(this);
        this.fPopSecondDrawer = this.fPopSecondDrawer.bind(this);
        this.fCloseSecondDrawer = this.fCloseSecondDrawer.bind(this);
    }
    fPopDrawer(){
        this.setState({
            showDrawer: true
        })
    }
    fCloseDrawer(){
        this.setState({
            showDrawer: false
        })
    }
    fPopSecondDrawer(){
        this.setState({
            showSecondDrawer: true
        })
    }
    fCloseSecondDrawer(){
        this.setState({
            showSecondDrawer: false
        })
    }
    render () {
        let {placement,showDrawer,title,secondTitle,showSecondDrawer,secondPlacement} = this.state;

        return (
            <div className="demoPadding demo1">
                <div className="btnc">  
                    <button className="btn" onClick={this.fPopDrawer}>打开</button>
                </div>
                <Drawer width={500} title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>
                    <div className="con">
                        <button onClick={this.fPopSecondDrawer} className="btn">二级抽屉</button>
                    </div>
                </Drawer>
                <Drawer width={'320px'} zIndex={1000001} title={secondTitle} show={showSecondDrawer} placement={secondPlacement} onClose={this.fCloseSecondDrawer}>
                    <div className="con">
                        <p>锦瑟无端五十弦，一弦一柱思华年。</p>
                        <p>庄生晓梦迷蝴蝶，望帝春心托杜鹃。</p>
                        <p>沧海月明珠有泪，蓝田日暖玉生烟。</p>
                        <p>此情可待成追忆，只是当时已惘然。</p>
                    </div>
                </Drawer>  
            </div>
        )
    }
}

export default Demo4;
