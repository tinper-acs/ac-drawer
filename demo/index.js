
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import './demo.scss';
const pkg = require('../package.json')




const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


import Demo1 from "./demolist/Demo1";import Demo2 from "./demolist/Demo2";import Demo3 from "./demolist/Demo3";import Demo4 from "./demolist/Demo4";
var DemoArray = [{"example":<Demo1 />,"title":" Drawer","code":"/**\n *\n * @title Drawer\n * @description Drawer基本示例\n *\n */\n\nimport React, { Component } from 'react';\nimport Drawer from '../../src/index';\n\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            placement: 'right',\n            showDrawer: false,\n            title: 'Basic Drawer'\n        };\n        this.fPopDrawer = this.fPopDrawer.bind(this);\n        this.fCloseDrawer = this.fCloseDrawer.bind(this);\n    }\n    fPopDrawer(){\n        this.setState({\n            showDrawer: true\n        })\n    }\n    fCloseDrawer(){\n        this.setState({\n            showDrawer: false\n        })\n    }\n    render () {\n        let {placement,showDrawer,title} = this.state;\n\n        return (\n            <div className=\"demoPadding demo1\">\n                <div className=\"btnc\">  \n                    <button className=\"btn\" onClick={this.fPopDrawer}>打开</button>\n                </div>\n                <Drawer title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>\n                    <div className=\"con\">\n                        <p>撑着油纸伞，独自彷徨在悠长、悠长 又寂寥的雨巷</p>\n                        <p>我希望逢着 一个丁香一样地 结着愁怨的姑娘 </p>\n                        <p>她是有 丁香一样的颜色 丁香一样的芬芳 丁香一样的忧愁 </p>                                                 \n                    </div>\n                </Drawer>\n            </div>\n        )\n    }\n}\n\n\n","desc":" Drawer基本示例"},{"example":<Demo2 />,"title":" Drawer","code":"/**\n *\n * @title Drawer\n * @description Drawer自定义位置示例\n *\n */\n\nimport React, { Component } from 'react';\nimport Drawer from '../../src/index';\nimport Radio from './Radio/index';\n\nclass Demo2 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            placement: 'right',\n            showDrawer: false,\n            title: 'Drawer'\n        };\n        this.fPositionChange = this.fPositionChange.bind(this);\n        this.fPopDrawer = this.fPopDrawer.bind(this);\n        this.fCloseDrawer = this.fCloseDrawer.bind(this);\n    }\n    fPopDrawer(){\n        this.setState({\n            showDrawer: true\n        })\n    }\n    fPositionChange(value){\n        this.setState({\n            placement: value\n        })\n    }\n    fCloseDrawer(){\n        this.setState({\n            showDrawer: false\n        })\n    }\n    render () {\n        let {placement,showDrawer,title} = this.state;\n        title = placement[0].toUpperCase() + placement.slice(1) + ' ' + title;\n\n        return (\n            <div className=\"demoPadding demo1\">\n                <div className=\"placementc\">\n                    <Radio.RadioGroup\n                        name=\"placement\"\n                        selectedValue={placement}\n                        onChange={this.fPositionChange}>\n                        <Radio value=\"left\" >left</Radio>\n                        <Radio value=\"right\" >right</Radio>\n                        <Radio value=\"top\" >top</Radio>\n                        <Radio value=\"bottom\" >bottom</Radio>\n                    </Radio.RadioGroup>\n                </div>\n                <div className=\"btnc\">  \n                    <button className=\"btn\" onClick={this.fPopDrawer}>打开</button>\n                </div>\n                <Drawer title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>\n                    <div className=\"con\">\n                        <p>撑着油纸伞，独自彷徨在悠长、悠长 又寂寥的雨巷</p>\n                        <p>我希望逢着 一个丁香一样地 结着愁怨的姑娘 </p>\n                        <p>她是有 丁香一样的颜色 丁香一样的芬芳 丁香一样的忧愁 </p>                                                 \n                    </div>\n                </Drawer>\n            </div>\n        )\n    }\n}\n\n\n","desc":" Drawer自定义位置示例"},{"example":<Demo3 />,"title":" Drawer","code":"/**\n *\n * @title Drawer\n * @description Drawer基本示例\n *\n */\n\nimport React, { Component } from 'react';\nimport Drawer from '../../src/index';\n\nclass Demo3 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            placement: 'right',\n            showDrawer: false,\n            title: '表单'\n        };\n        this.fPopDrawer = this.fPopDrawer.bind(this);\n        this.fCloseDrawer = this.fCloseDrawer.bind(this);\n    }\n    fPopDrawer(){\n        this.setState({\n            showDrawer: true\n        })\n    }\n    fCloseDrawer(){\n        this.setState({\n            showDrawer: false\n        })\n    }\n    render () {\n        let {placement,showDrawer,title} = this.state;\n\n        return (\n            <div className=\"demoPadding demo3\">\n                <div className=\"btnc\">  \n                    <button className=\"btn\" onClick={this.fPopDrawer}>打开</button>\n                </div>\n                <Drawer title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>\n                    <div className=\"con\">\n                        <div className=\"form\">\n                            <div className=\"form-row\">\n                                <div className=\"form-col\">\n                                    <label>Name：</label>\n                                    <div>\n                                        <input className=\"input\" />\n                                    </div>\n                                </div>\n                                <div className=\"form-col\">\n                                    <label>Age：</label>\n                                    <div>\n                                        <input className=\"input\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div className=\"form-row\">\n                                <div className=\"form-col\">\n                                    <label>Job：</label>\n                                    <div>\n                                        <input className=\"input\" />\n                                    </div>\n                                </div>\n                                <div className=\"form-col\">\n                                    <label>Hometown: </label>\n                                    <div>\n                                        <input className=\"input\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div className=\"form-row\">\n                                <div className=\"form-col\">\n                                    <label>Major:</label>\n                                    <div>\n                                        <input className=\"input\" />\n                                    </div>\n                                </div>\n                                <div className=\"form-col\">\n                                    <label>Hobby:</label>\n                                    <div>\n                                        <input className=\"input\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div className=\"form-row\">\n                                <label>Description: </label>\n                                <div>\n                                    <textarea className=\"input\"></textarea>\n                                </div>\n                            </div>       \n                        </div>\n                        <div className=\"form-btnc\">\n                            <button className=\"btn\" onClick={this.fCloseDrawer}>Cancel</button>\n                            <button className=\"btn btn-sumbit\" onClick={this.fCloseDrawer}>Submit</button>\n                        </div>                                      \n                    </div>\n                </Drawer>\n            </div>\n        )\n    }\n}\n\n\n","desc":" Drawer基本示例"},{"example":<Demo4 />,"title":" Drawer","code":"/**\n *\n * @title Drawer\n * @description Drawer基本示例\n *\n */\n\nimport React, { Component } from 'react';\nimport Drawer from '../../src/index';\n\nclass Demo4 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            placement: 'right',\n            showDrawer: false,\n            title: 'Basic Drawer',\n            showSecondDrawer: false,\n            secondPlacement: 'right'\n        };\n        this.fPopDrawer = this.fPopDrawer.bind(this);\n        this.fCloseDrawer = this.fCloseDrawer.bind(this);\n        this.fPopSecondDrawer = this.fPopSecondDrawer.bind(this);\n        this.fCloseSecondDrawer = this.fCloseSecondDrawer.bind(this);\n    }\n    fPopDrawer(){\n        this.setState({\n            showDrawer: true\n        })\n    }\n    fCloseDrawer(){\n        this.setState({\n            showDrawer: false\n        })\n    }\n    fPopSecondDrawer(){\n        this.setState({\n            showSecondDrawer: true\n        })\n    }\n    fCloseSecondDrawer(){\n        this.setState({\n            showSecondDrawer: false\n        })\n    }\n    render () {\n        let {placement,showDrawer,title} = this.state;\n\n        return (\n            <div className=\"demoPadding demo1\">\n                <div className=\"btnc\">  \n                    <button className=\"btn\" onClick={this.fPopDrawer}>打开</button>\n                </div>\n                <Drawer title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>\n                    <div className=\"con\">\n                        <button className=\"btn\">二级抽屉</button>\n                        <Drawer title={'二级抽屉'} show={showSecondDrawer} placement={secondPlacement} onClose={this.fCloseSecondDrawer}>\n                            <div className=\"con\">\n                                <p>锦瑟无端五十弦，一弦一柱思华年。</p>\n                                <p>庄生晓梦迷蝴蝶，望帝春心托杜鹃。</p>\n                                <p>沧海月明珠有泪，蓝田日暖玉生烟。</p>\n                                <p>此情可待成追忆，只是当时已惘然。</p>\n                            </div>\n                        </Drawer>                                               \n                    </div>\n                </Drawer>\n            </div>\n        )\n    }\n}\n\n\n","desc":" Drawer基本示例"}]


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
