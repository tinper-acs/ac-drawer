/**
 *
 * @title Drawer5
 * @description Drawer信息展示
 *
 */

import React, { Component } from 'react';
import Drawer from '../../src/index';

class Demo5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            placement: 'right',
            showDrawer: false,
            title: 'Basic Drawer',
            list: [
                {id:1, name: 'xiaoming', age:23},
                {id:2, name: 'xiaozhang', age:25}
            ]
        };
        this.fPopDrawer = this.fPopDrawer.bind(this);
        this.fCloseDrawer = this.fCloseDrawer.bind(this);
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
    render () {
        let {list,title,placement,showDrawer} = this.state;

        return (
            <div className="demoPadding demo1">
                <div className="btnc">  
                    <button className="btn" onClick={this.fPopDrawer}>打开</button>
                </div>
                <ul className="infos">
                    {
                        list.map(item => {
                            return  (<li key={item.id} className="info-item">
                                        <a href="javascript:;">{item.name}</a>
                                    </li>)
                        })
                    }
                </ul>
                <Drawer width={500} title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>
                    <div className="con">
                        
                    </div>
                </Drawer>
            </div>
        )
    }
}

export default Demo5;
