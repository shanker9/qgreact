import React, { Component } from 'react';
import dagre from 'dagre';
import * as dagreD3 from 'dagre-d3';
import * as d3Local from 'd3';
import format from 'format-number';

class DagreD3 extends Component {

    constructor(props) {
        super(props);
        props.resizeEventHandler(this.componentResizeHandler.bind(this));
        this.state = {
            parentNodeData: this.props.qGraphData.parentNodeData,
            parentNodeSources: this.props.qGraphData.parentNodeSources,
            childNodesArray: this.props.qGraphData.childNodesArray,
            isInitialSVGRender: true
        }

        this.dagreD3Renderer = this.dagreD3Renderer.bind(this);
        this.dagreGraphTreeLayout = this.dagreGraphTreeLayout.bind(this);
        this.gLayout = undefined;
        this.svg = undefined;
        this.selectedNodeKey = undefined;
        this.isInitialSVGRender = true;
        this.initialSvg = undefined;


        this.props.reference(this);
    }

    componentDidMount() {
        // this.dagreGraphTreeLayout();
    }

    componentDidUpdate() {
        const { parentNodeData, parentNodeSources, childNodesArray } = this.state;
        if (!parentNodeData || !parentNodeSources || !childNodesArray) {
            this.clearSvg();
            return;
        }

        this.dagreGraphTreeLayout();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isInitialSVGRender: true });
    }

    componentResizeHandler(p) {
        console.log(p);
    }

    formatNumber(number) {
        let myFormat = format({ prefix: '$', integerSeparator: ',' });
        let formattedNum = myFormat(number);
        return formattedNum;
    }

    dagreGraphTreeLayout() {
        // Create a new directed graph 
        var g = new dagre.graphlib.Graph();

        let parentNodeData = this.state.parentNodeData,
            parentNodeSources = this.state.parentNodeSources,
            childNodesArray = this.state.childNodesArray;

        // Set an object for the graph label
        g.setGraph({ rankdir: "BT" });

        // Default to assigning a new object as a label for each new edge.
        g.setDefaultEdgeLabel(function () { return {}; });

        //setting ParentNode
        g.setNode(parentNodeData.getId(), {
            shape: "rect",
            label: `${parentNodeData.getShortId()}\n ${this.formatNumber(parentNodeData.getPrice().toFixed(2))}`,
            // label: `${parentNodeData.shortId}`,
            width: 180,
            height: 50,
            data: parentNodeData,
            labelStyle: "font-size: 1.5em; font-family:verdana",
            style: "stroke-width: 4px; stroke:#650922; fill:white"
        });

        //setting edges to parentNode
        parentNodeData.getSources().forEach(source => {
            // g.setEdge(rootNode.id, source.source);
            g.setEdge(source.getSource(), parentNodeData.getId(), {
                style: "stroke-width: 3px; fill-opacity: 0; stroke:lightgrey",
                // lineInterpolate: 'basis'
            });
        });
        this.setNodesAndEdges(g, parentNodeSources, childNodesArray);

        dagre.layout(g);

        this.gLayout = g;
        this.dagreD3Renderer();
    }

    setNodesAndEdges(gElement, nodeIdArray, nodeDataArray) {
        let nodeData;

        nodeIdArray.forEach(nodeId => {
            nodeData = nodeDataArray.find(item => {
                return item.getId() === nodeId;
            });

            if (nodeData.isFunctionVertex()) {
                gElement.setNode(nodeId, {
                    shape: "rect",
                    label: nodeData.getShortId(),
                    // width: 180,
                    // height: 40,
                    data: nodeData,
                    labelStyle: "font-size: 1.5em; font-family:verdana",
                    style: "stroke-width: 4px; stroke:#650922; fill:white"
                });
            } else {
                gElement.setNode(nodeId, {
                    label: nodeData.getShortId(),
                    // width: 180,
                    // height: 40,
                    data: nodeData,
                    labelStyle: "font-size: 1.5em",
                    style: "stroke-width: 4px; stroke:#650922; fill:white"
                });
            }

            if (nodeData.getSources()) {
                nodeData.getSources().forEach(source => {
                    // gElement.setEdge(nodeData.id, source.source);
                    gElement.setEdge(source.getSource(), nodeData.getId(), {
                        style: "stroke-width: 3px; fill-opacity: 0; stroke:lightgrey",
                        // lineInterpolate: 'basis'
                    });
                })
            }
        });
        return gElement;
    }

    dagreD3Renderer() {
        // Create a new directed graph
        // var g = new dagreD3.graphlib.Graph().setGraph(this.gLayout);
        var g = this.gLayout;

        g.nodes().forEach(function (v) {
            let node = g.node(v);
            if (node.data.isFunctionVertex()) {
                // Round the corners of the nodes
                node.rx = node.ry = 40;
            }
        });

        // d3Local.selectAll("g")
        //     .attr("stroke", "black");

        // this.svg = d3Local.select('.dagreContainer').append('svg');
        let translateX, translateY, scale;
        if (this.svg === undefined) {
            this.svg = d3Local.select("svg.treeSvg");
        } else {
            translateX = d3Local.transform(this.svg.select('g').attr("transform")).translate[0];
            translateY = d3Local.transform(this.svg.select('g').attr("transform")).translate[1];
            scale = d3Local.transform(this.svg.select('g').attr("transform")).scale[0];
            // isInitialSVGRender = false;
        }

        this.svg
            .attr("width", document.getElementById("dagreContainer").clientWidth)
            .attr("height", document.getElementById("dagreContainer").clientHeight - 4)
            .attr("fill", "white");

        let inner = this.svg.select("g").attr("stroke", "black");

        // Set up zoom support
        var zoom = d3Local.behavior.zoom().on("zoom", function () {
            inner.attr("transform", "translate(" + d3Local.event.translate + ")" +
                "scale(" + d3Local.event.scale + ")");
        });
        this.svg.call(zoom);



        // Create the renderer
        var render = new dagreD3.render();

        // Run the renderer. This is what draws the final graph.
        render(inner, g);

        if (this.selectedNodeKey) {
            let nodeData = this.gLayout.node(this.selectedNodeKey);
            let selectedNodeElem = nodeData.elem;
            selectedNodeElem.style.fill = "lightblue";
            selectedNodeElem.children[0].style.stroke = "red";
            this.updateObjectBrowserData(nodeData.data.getDeserializedJson());
        }

        let selectedNode = inner.selectAll("g.node");
        selectedNode.on('click', this.nodeClickHandler.bind(this));

        d3Local.selectAll("text")
            .attr("fill", "black")
            .style("font")

        // d3Local.selectAll("g")
        //     .attr("stroke", "black");

        // Center the graph
        if (this.state.isInitialSVGRender) {
            let initialScale = 0.90;

            if (g.graph().width > this.svg.attr("width")) {
                let initialScaleX = (this.svg.attr("width") - 100) / g.graph().width;
                let initialScaleY = (this.svg.attr("height") - 20) / g.graph().height;
                let y = (this.svg.attr('height') - g.graph().height) / 2;
                let temp = zoom
                    .translate([50, y])
                    .scale(initialScaleX, initialScaleY);
                temp.event(this.svg);
            } else {
                let temp = zoom
                    .translate([(this.svg.attr("width") - g.graph().width * initialScale) / 2, (this.svg.attr("height") - g.graph().height * initialScale) / 2])
                    .scale(initialScale, initialScale);
                temp.event(this.svg);
            }
            // this.isInitialSVGRender = false;
        } else {
            let temp = zoom
                .translate([translateX, translateY])
                .scale(scale);
            temp.event(this.svg);
        }
        // this.svg.attr('height', g.graph().height * initialScale + 100);
    }



    updateGraphData(graphData) {
        let objectBrowserReference = this.props.objectBrowserComponentReference();
        if (objectBrowserReference) {
            this.props.objectBrowserComponentReference().updateData({});
        }
        // this.clearSvg();

        const { parentNodeData, parentNodeSources, childNodesArray } = graphData;
        this.gLayout = undefined;
        this.selectedNodeKey = undefined;
        // this.isInitialSVGRender = true;

        // if (!parentNodeData || !parentNodeSources || !childNodesArray) {
        //     this.clearSvg();
        //     return;
        // }

        this.setState({ parentNodeData: parentNodeData, parentNodeSources: parentNodeSources, childNodesArray: childNodesArray, isInitialSVGRender: true });
    }

    updateParentNodeData(parentNodeData) {
        // this.clearSvg();
        // this.isInitialSVGRender = false;
        this.setState({
            parentNodeData: parentNodeData,
            isInitialSVGRender: false
        });
    }

    clearSvg() {
        if (this.svg !== undefined) {
            // Clearing the group element in svg
            let svg = document.getElementById('treeSvg');
            svg.removeChild(svg.childNodes[0]);

            //appending the new group element to svg
            // let newsvg = 
            d3Local.select('.treeSvg').append('g');

            // this.svg = undefined;
        }

        //Clear the view in Object Browser
        let objectBrowserReference = this.props.objectBrowserComponentReference();
        if (objectBrowserReference) {
            this.props.objectBrowserComponentReference().updateData({});
        }

        //Clear chart view

    }

    nodeClickHandler(nodeKey) {
        let jsonStringForObjectBrowser;

        if (this.selectedNodeKey) {
            let selectedNodeElem = this.gLayout.node(this.selectedNodeKey).elem;
            selectedNodeElem.style.fill = "";
            selectedNodeElem.children[0].style.stroke = "#650922";
        }

        this.selectedNodeKey = nodeKey;

        let nodeData = this.gLayout.node(this.selectedNodeKey);
        let g = nodeData.elem;
        g.style.fill = "lightblue";
        g.children[0].style.stroke = "red";

        jsonStringForObjectBrowser = nodeData.data.getDeserializedJson();

        this.updateObjectBrowserData(jsonStringForObjectBrowser);
        this.updateChartComponent(jsonStringForObjectBrowser);
    }

    updateObjectBrowserData(nodeData) {
        let objectBrowserReference = this.props.objectBrowserComponentReference();
        if (objectBrowserReference) {
            this.props.objectBrowserComponentReference().updateData(nodeData);
        }
    }

    updateChartComponent(nodeData) {
        let datePathComponent, dataArrayKey, shortId, startingWith;
        shortId = nodeData.vertex.shortId;
        startingWith = shortId.substring(0, 2);

        switch (startingWith) {
            case 'TS':
                datePathComponent = 'dateTime';
                dataArrayKey = 'entriesList';
                this.props.chartComponentReference().drawChartWithData({
                    chartData:
                        {
                            data: nodeData.vertex.data.data.value[dataArrayKey],
                            datePathComponent: datePathComponent
                        },
                    chartType: '2D'
                }
                );
                break;
            case 'RC':
                datePathComponent = 'date';
                dataArrayKey = 'pointsList';
                this.props.chartComponentReference().drawChartWithData({
                    chartData:
                        {
                            data: nodeData.vertex.data.data.value[dataArrayKey],
                            datePathComponent: datePathComponent
                        },
                    chartType: '2D'
                }
                );
                break;
            case 'VS':
                dataArrayKey = 'curvesList';
                this.props.chartComponentReference().drawChartWithData({
                    chartData:
                        {
                            data: nodeData.vertex.data.data.value[dataArrayKey],
                        },
                    chartType: '3D'
                }
                );
                break;
            default:
                console.log('Unmatched shortId type');
        }

        // if (nodeData.vertex.shortId.startsWith('TS')) {
        //     datePathComponent = 'dateTime';
        //     dataArrayKey = 'entries';
        //     this.props.chartComponentReference().drawChartWithData({
        //         chartData:
        //             {
        //                 data: nodeData.vertex.data.data.value[dataArrayKey],
        //                 datePathComponent: datePathComponent
        //             },
        //         chartType: '2D'
        //     }
        //     );
        // }
        // else if (nodeData.vertex.shortId.startsWith('RC')) {
        //     datePathComponent = 'date';
        //     dataArrayKey = 'points';
        //     this.props.chartComponentReference().drawChartWithData({
        //         chartData:
        //             {
        //                 data: nodeData.vertex.data.data.value[dataArrayKey],
        //                 datePathComponent: datePathComponent
        //             },
        //         chartType: '2D'
        //     }
        //     );
        // } else if (nodeData.data.shortId.startsWith('VS')) {
        //     dataArrayKey = 'curves';
        //     this.props.chartComponentReference().drawChartWithData({
        //         chartData:
        //             {
        //                 data: nodeData.data.data[dataArrayKey],
        //             },
        //         chartType: '3D'
        //     }
        //     );
        // }
        // if (datePathComponent && dataArrayKey) {
        //     this.props.chartComponentReference().renderChartWithData(nodeData.data.data[dataArrayKey], datePathComponent);
        // }
    }

    render() {
        console.log('graph render');
        return (
            <div id="dagreContainer" className="dagreContainer">
                <svg id='treeSvg' className='treeSvg'>
                    <g></g>
                </svg>
            </div>
        );
    }

}

export default DagreD3;