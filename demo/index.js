
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import './demo.scss';
const pkg = require('../package.json')




const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


import Demo1 from "./demolist/Demo1";import Demo2 from "./demolist/Demo2";
var DemoArray = [{"example":<Demo1 />,"title":" toast","code":"/**\n *\n * @title toast\n * @description toast基本示例\n *\n */\n\nimport React, { Component } from 'react';\nimport Drawer from '../../src/index';\nimport Radio from './Radio';\nimport MyRadio from './MyRadio';\n\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            placement: '',\n            radioValue: 'small',\n        };\n        this.fPositionChange = this.fPositionChange.bind(this);\n        this.handleRadioChange = this.handleRadioChange.bind(this);\n        this.handleMyRadioChange = this.handleMyRadioChange.bind(this);\n    }\n    fPopDrawer(){\n        \n    }\n    fPositionChange(event){\n        this.setState({\n            placement: event.target.value\n        })\n    }\n    handleRadioChange(value) {\n        this.setState({ radioValue: value });\n    }\n    handleMyRadioChange(value) {\n        this.setState({ myRadioValue: value });\n    }\n    render () {\n        let {placement,radioValue,myRadioValue} = this.state;\n\n        return (\n            <div className=\"demoPadding\">\n                <div>\n                    <Radio value={radioValue} onRadioChange={this.handleRadioChange}>Choose a size</Radio>\n                    Result: {radioValue}\n                </div>\n                <div>\n                    <MyRadio value={myRadioValue} onRadioChange={this.handleMyRadioChange}>Choose a size</MyRadio>\n                    Result: {myRadioValue}\n                </div>\n                <button className=\"btn\" onClick={this.fPopDrawer}>基本消息</button>\n                <Drawer>\n                    <p>撑着油纸伞，独自彷徨在悠长、悠长 又寂寥的雨巷</p>\n                    <p>我希望逢着 一个丁香一样地 结着愁怨的姑娘 </p>\n                    <p>她是有 丁香一样的颜色 丁香一样的芬芳 丁香一样的忧愁 </p>\n                </Drawer>\n            </div>\n        )\n    }\n}\n\n\n","desc":" toast基本示例"},{"example":<Demo2 />,"title":" toast","code":"/**\n *\n * @title toast\n * @description toast基本示例\n *\n */\n\nimport React, { Component } from 'react';\nimport Drawer from '../../src/index';\n\nclass Demo2 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            placement: 'left'\n        };\n    }\n    fPopDrawer(){\n        \n    }\n    changeColor(e){\n        console.log(e.target.value);\n    }\n    render () {\n\n        return (\n            <div className=\"demoPadding\">\n                <div onChange={this.changeColor}>\n                    <h2>选择你喜欢的颜色</h2>    \n                    <input type=\"radio\" id=\"color1\" name=\"color\" value=\"red\" /> \n                    <label htmlFor=\"color1\" >red</label>\n                \n                    <input type=\"radio\" id=\"color2\" name=\"color\" value=\"yellow\"/>\n                    <label htmlFor=\"color2\">yellow</label>\n                \n                    <input type=\"radio\" id=\"color3\" name=\"color\" value=\"green\"/>\n                    <label htmlFor=\"color3\">green</label>\n                </div>\n            </div>\n        )\n    }\n}\n\n\n","desc":" toast基本示例"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ process.env.NODE_ENV==='development'?code:code.replace('../../src/index.js',pkg.name).replace('../../src/index',pkg.name) }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('root'));
