/**
 *
 * @title Drawer
 * @description Drawer基本示例
 *
 */

import React, { Component } from 'react';
import Drawer from '../../src/index';

class Demo3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            placement: 'right',
            showDrawer: false,
            title: '表单'
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
        let {placement,showDrawer,title} = this.state;

        return (
            <div className="demoPadding demo3">
                <div className="btnc">  
                    <button className="btn" onClick={this.fPopDrawer}>打开</button>
                </div>
                <Drawer title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>
                    <div className="con">
                        <div className="form">
                            <div className="form-row">
                                <div className="form-col">
                                    <label>Name：</label>
                                    <div>
                                        <input className="input" />
                                    </div>
                                </div>
                                <div className="form-col">
                                    <label>Age：</label>
                                    <div>
                                        <input className="input" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-col">
                                    <label>Job：</label>
                                    <div>
                                        <input className="input" />
                                    </div>
                                </div>
                                <div className="form-col">
                                    <label>Hometown: </label>
                                    <div>
                                        <input className="input" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-col">
                                    <label>Major:</label>
                                    <div>
                                        <input className="input" />
                                    </div>
                                </div>
                                <div className="form-col">
                                    <label>Hobby:</label>
                                    <div>
                                        <input className="input" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <label>Description: </label>
                                <div>
                                    <textarea className="input"></textarea>
                                </div>
                            </div>       
                        </div>
                        <div className="form-btnc">
                            <button className="btn" onClick={this.fCloseDrawer}>Cancel</button>
                            <button className="btn btn-sumbit" onClick={this.fCloseDrawer}>Submit</button>
                        </div>                                      
                    </div>
                </Drawer>
            </div>
        )
    }
}

export default Demo3;
