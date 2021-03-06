import React from 'react';
import TableView from './Grid/View/TableView.jsx';
import '../styles/light.css';
import DagreD3 from './Graph/View/dagreD3.jsx';
import ObjectBrowser from './ObjectBrowser/View/ObjectBrowser.jsx';
import ChartHOC from './Charts/View/ChartHOC.jsx';
import FlexLayout from "flexlayout-react";


class App extends React.Component {

    constructor(props) {
        super(props);
        var json = {
            global: { enableEdgeDock: true, splitterSize: 4 ,tabSetEnableTabStrip:true},
            borders: [
                {
                    "type": "border",
                    "location": "right",
                    enableDrop: true,
                    "children": [
                        {
                            "type": "tab",
                            "enableClose": false,
                            "name": "Object Browser",
                            "component": "objectbrowser",
                        }
                    ]
                }
            ],
            layout: {
                "type": "row",
                "weight": 100,
                children: [{
                    type: 'row',
                    weight: 100,
                    "children": [
                        {
                            "type": "row",
                            "weight": 50,
                            "children": [
                                {
                                    "type": "tabset",
                                    "weight": 100,
                                    "selected": 0,
                                    "children": [
                                        {
                                            "type": "tab",
                                            "name": "Blotter",
                                            "component": "blotter",
                                            enableClose: false
                                        }
                                    ]
                                }]
                        },
                        {
                            "type": "row",
                            "weight": 50,
                            "children": [
                                {
                                    "type": "tabset",
                                    "weight": 50,
                                    "selected": 0,
                                    "children": [
                                        {
                                            "type": "tab",
                                            "name": "Graph",
                                            "component": "graph",
                                            enableClose: false
                                        }
                                    ]
                                },
                                {
                                    "type": "tabset",
                                    "weight": 50,
                                    "selected": 0,
                                    "children": [
                                        {
                                            "type": "tab",
                                            "name": "Chart",
                                            "component": "chart",
                                            enableClose: false
                                        }
                                    ]
                                },
                                // {
                                //     "type": "tabset",
                                //     "weight": 50,
                                //     "selected": 0,
                                //     "children": [
                                //         {
                                //             "type": "tab",
                                //             "name": "Object Browser",
                                //             "component": "objectbrowser",
                                //             enableClose: false
                                //         }
                                //     ]
                                // }
                            ]
                        }
                    ]
                }]

            }
        };
        this.state = {
            model: FlexLayout.Model.fromJson(json),
            rowHeight: 20,
            subscriptionTopic: 'ProductUI'
        };
        this.graphReference = undefined;
        this.objectBrowserReference = undefined;
        this.chartReference = undefined;

        //EventHandler references
        this.chartResizeEventHandler = undefined;
        this.graphResizeEventHandler = undefined;
    }

    componentDidMount() {
    }

    getObjectBrowserComponentReference() {
        return this.objectBrowserReference;
    }

    getGraphTreeComponentReference() {
        return this.graphReference;
    }

    getChartComponentReference() {
        return this.chartReference;
    }

    getGridView() {
        return (
            <div className="tablecontainer">
                <TableView ref='tableViewRef'
                    graphTreeComponentReference={this.getGraphTreeComponentReference.bind(this)}
                    chartComponentReference={this.getChartComponentReference.bind(this)}
                    subscriptionTopic={this.state.subscriptionTopic}
                    rowHeight={this.state.rowHeight} />
            </div>
        );
    }

    getGraphView() {
        return (
            // <div className="graphContainer">
                <DagreD3 ref="graphTree"
                    reference={ref => this.graphReference = ref}
                    objectBrowserComponentReference={this.getObjectBrowserComponentReference.bind(this)}
                    chartComponentReference={this.getChartComponentReference.bind(this)}
                    resizeEventHandler={(handler => this.graphResizeEventHandler=handler)}
                    qGraphData={{}} />
            // </div>
        )
    }

    getChartView() {
        return (
            <div className="chartContainer">
                <ChartHOC ref='chartHOC'
                    reference={ref => this.chartReference = ref}
                    resizeEventHandler={handler => this.chartResizeEventHandler=handler}
                />
            </div>
        )
    }

    getObjectBrowserView() {
        return (
            <div className="objectBrowserContainer">
                <ObjectBrowser ref="objectBrowser"
                    reference={ref => this.objectBrowserReference = ref}
                />
            </div>
        )
    }


    factory(node) {
        var component = node.getComponent();
        node.setEventListener('visibility',p=>console.log('visibility event handler',p))
        let view;
        switch (component) {
            case 'blotter':
                view = this.getGridView();
                break;

            case 'graph':
                view = this.getGraphView();
                node.setEventListener('resize',p=>{
                    if(this.graphResizeEventHandler)
                    this.graphResizeEventHandler(p);
                    console.log('resize Chart');
                })
                break;

            case 'chart':
                view = this.getChartView();
                node.setEventListener('resize',p=>{
                    if(this.chartResizeEventHandler)
                    this.chartResizeEventHandler(p);
                    console.log('resize Chart');
                })
                break;

            case 'objectbrowser':
                view = this.getObjectBrowserView();
                break;

            default:
                console.log('invalid view type');
                view = (<div />)
        }
        return view;
    }

    render() {
        return (
            <FlexLayout.Layout model={this.state.model} factory={this.factory.bind(this)} />
        )
    }

}

export default App;