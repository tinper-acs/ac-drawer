/**
 *
 * @title toast
 * @description toast基本示例
 *
 */

import React, { Component } from 'react';
import Drawer from '../../src/index';

class Demo2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            placement: 'left'
        };
    }
    fPopDrawer(){
        
    }
    changeColor(e){
        console.log(e.target.value);
    }
    render () {

        return (
            <div className="demoPadding">
                <div onChange={this.changeColor}>
                    <h2>选择你喜欢的颜色</h2>    
                    <input type="radio" id="color1" name="color" value="red" /> 
                    <label htmlFor="color1" >red</label>
                
                    <input type="radio" id="color2" name="color" value="yellow"/>
                    <label htmlFor="color2">yellow</label>
                
                    <input type="radio" id="color3" name="color" value="green"/>
                    <label htmlFor="color3">green</label>
                </div>
            </div>
        )
    }
}

export default Demo2;
