import React from 'react';
import TableController from '../../../Controllers/TableController.js';
import BlotterInfo from './BlotterInfo.jsx';
import GridView from './GridView.jsx';
import ReactSimpleRange from 'react-simple-range';
import BlockUi from 'react-block-ui';
import ControlledSortableHeader from './ControlledSortableHeader.jsx'
import 'react-block-ui/style.css';

class TableView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gridDataSource: [],
            // topDivHeight: 0,
            // bottomDivHeight: 0,
            isGroupedView: false,
            blocking: false,
            loadingmessage: '',
            columns: [
                {
                    columnkey: "counterparty",
                    columnvalue: "Counterparty",
                    properties: {
                        isNumericColumn: false,
                        groupingEnable: true,
                        isSortable: true,
                    }
                },
                {
                    columnkey: "name",
                    columnvalue: "Name",
                    properties: {
                        isNumericColumn: false,
                        groupingEnable: true,
                        isSortable: true,
                    }
                },
                {
                    columnkey: "receiveIndex",
                    columnvalue: "ReceiveIndex",
                    properties: {
                        isNumericColumn: false,
                        groupingEnable: true,
                        isSortable: true,
                    }
                },
                {
                    columnkey: "underlier",
                    columnvalue: "Underlier",
                    properties: {
                        isNumericColumn: false,
                        groupingEnable: true,
                        isSortable: true,
                    }
                },
                {
                    columnkey: "rho10bps",
                    columnvalue: "Rho10bps",
                    properties: {
                        isNumericColumn: true
                    }
                },
                {
                    columnkey: "gamma1pct",
                    columnvalue: "Gamma1pct",
                    properties: {
                        isNumericColumn: true
                    }
                },
                {
                    columnkey: "delta1pct",
                    columnvalue: "Delta1pct",
                    properties: {
                        isNumericColumn: true
                    }
                },
                {
                    columnkey: "vega1pt",
                    columnvalue: "Vega1pt",
                    properties: {
                        isNumericColumn: true
                    }
                },
                {
                    columnkey: "lastUpdated",
                    columnvalue: "LastUpdated",
                    properties: {
                        isNumericColumn: false
                    }
                },
                {
                    columnkey: "receiveLeg",
                    columnvalue: "ReceiveLeg",
                    properties: {
                        isNumericColumn: true
                    }
                },
                {
                    columnkey: "vertex",
                    columnvalue: "Vertex",
                    properties: {
                        isNumericColumn: false,
                        isSortable: true,
                    }
                },
                {
                    columnkey: "price",
                    columnvalue: "Price",
                    properties: {
                        isNumericColumn: true
                    }
                },
                {
                    columnkey: "payLeg",
                    columnvalue: "PayLeg",
                    properties: {
                        isNumericColumn: true
                    }
                },
                {
                    columnkey: "volatility",
                    columnvalue: "Volatility",
                    properties: {
                        isNumericColumn: true
                    }
                },
                {
                    columnkey: "payCurrency",
                    columnvalue: "PayCurrency",
                    properties: {
                        isNumericColumn: false
                    }
                },
                {
                    columnkey: "payDiscountCurve",
                    columnvalue: "PayDiscountCurve",
                    properties: {
                        isNumericColumn: false
                    }
                },
                {
                    columnkey: "payFixedRate",
                    columnvalue: "PayFixedRate",
                    properties: {
                        isNumericColumn: false
                    }
                },
                {
                    columnkey: "maturityDate",
                    columnvalue: "MaturityDate",
                    properties: {
                        isNumericColumn: false
                    }
                },
                {
                    columnkey: "payNotional",
                    columnvalue: "PayNotional",
                    properties: {
                        isNumericColumn: true
                    }
                },
                {
                    columnkey: "receiveDiscountCurve",
                    columnvalue: "ReceiveDiscountCurve",
                    properties: {
                        isNumericColumn: false
                    }
                },
                {
                    columnkey: "receiveNotional",
                    columnvalue: "ReceiveNotional",
                    properties: {
                        isNumericColumn: true
                    }
                },
                {
                    columnkey: "receiveCurrency",
                    columnvalue: "ReceiveCurrency",
                    properties: {
                        isNumericColumn: false
                    }
                },
                {
                    columnkey: "receiveSpread",
                    columnvalue: "ReceiveSpread",
                    properties: {
                        isNumericColumn: false
                    }
                },
                {
                    columnkey: "amerOrEuro",
                    columnvalue: "AmerOrEuro",
                    properties: {
                        isNumericColumn: false
                    }
                },
                {
                    columnkey: "putOrCall",
                    columnvalue: "PutOrCall",
                    properties: {
                        isNumericColumn: false
                    }
                },
                {
                    columnkey: "contractSize",
                    columnvalue: "ContractSize",
                    properties: {
                        isNumericColumn: true
                    }
                },
                {
                    columnkey: "strike",
                    columnvalue: "Strike",
                    properties: {
                        isNumericColumn: true
                    }
                }
            ]
        }
        this.subscriptionTopic = this.props.subscriptionTopic;
        this.controller = new TableController(this, this.subscriptionTopic);
        this.sliderValue = 15;
        this.lastScrollTop = 0;

        this.updateDataGridWithDefaultView = this.updateDataGridWithDefaultView.bind(this);
        this.updateDataGridWithGroupedView = this.updateDataGridWithGroupedView.bind(this);
        this.loadDataGridWithGroupedView = this.loadDataGridWithGroupedView.bind(this);
        this.rowUpdate = this.rowUpdate.bind(this);
        this.aggRowUpdate = this.aggRowUpdate.bind(this);
        this.scrollEventHandler = this.scrollEventHandler.bind(this);
        this.makeDefaultSubscription = this.makeDefaultSubscription.bind(this);
        this.makeGroupSubscription = this.makeGroupSubscription.bind(this);
        this.updateAggregatedRowExpandStatus = this.updateAggregatedRowExpandStatus.bind(this);
    }

    componentDidMount() {
        this.makeGroupSubscription('name');
    }

    /*** EventHandler for scrolling of Tabledata ***/
    scrollEventHandler(event) {
        event.preventDefault();
        let headerNode = document.getElementById('scrollableHeaderDiv');
        let tableNode = document.getElementById('scrollableTableDiv');
        headerNode.scrollLeft = tableNode.scrollLeft;
    }

    /** NON-GROUPING METHODS**/

    makeDefaultSubscription() {
        let commandObject1 = {
            "command": 'sow_and_subscribe',
            "topic": this.subscriptionTopic,
            "orderBy": "/Name",
        }

        this.controller.ampsSubscribe(commandObject1);
    }

    loadDataGridWithDefaultView() {
        let gridDiv = document.getElementById('scrollableTableDiv');
        let startIndex = 0;
        let endIndex = startIndex + 50;
        gridDiv.scrollTop = 0;
        let { gridDataSource, topDivHeight, bottomDivHeight } = this.controller.getDefaultViewData(startIndex, endIndex, this.props.rowHeight);
        this.setState({
            gridDataSource: gridDataSource,
            topDivHeight: topDivHeight,
            bottomDivHeight: bottomDivHeight,
            isGroupedView: false
        });

        let viewableUpperLimit = Math.round(gridDiv.clientHeight / this.props.rowHeight);
        let lowerLimit = startIndex + 1;

        let upperLimit = viewableUpperLimit > gridDataSource.length ? startIndex + gridDataSource.length : startIndex + viewableUpperLimit;
        this.refs.blotterInfo.updateGroupedViewStateTo(false);
        this.refs.blotterInfo.updateRowViewInfo(lowerLimit, upperLimit, this.controller.getDatamapSize());
        if (this.state.blocking) {
            this.toggleBlockUI();
        }
    }

    updateDataGridWithDefaultView() {
        let gridDiv = document.getElementById('scrollableTableDiv');

        let startIndex = Math.round(gridDiv.scrollTop / this.props.rowHeight);
        let endIndex = startIndex + 50;
        let viewableUpperLimit = Math.round(gridDiv.clientHeight / this.props.rowHeight);
        let lowerLimit = startIndex + 1;

        let { gridDataSource, topDivHeight, bottomDivHeight } = this.controller.getDefaultViewData(startIndex, endIndex, this.props.rowHeight);
        this.setState({
            gridDataSource: gridDataSource,
            topDivHeight: topDivHeight,
            bottomDivHeight: bottomDivHeight,
        });

        let upperLimit = viewableUpperLimit > gridDataSource.length ? startIndex + gridDataSource.length : startIndex + viewableUpperLimit;
        this.refs.blotterInfo.updateRowViewInfo(lowerLimit, upperLimit, this.controller.getDatamapSize());
    }


    /** GROUPING METHODS  **/

    makeGroupSubscription(columnName) {
        this.controller.groupDataByColumnKey(columnName);
    }

    loadDataGridWithGroupedView() {
        let startIndex = 0;
        let endIndex = startIndex + 50;
        document.getElementById('scrollableTableDiv').scrollTop = 0;
        let { gridDataSource, topDivHeight, bottomDivHeight } = this.controller.getGroupedViewData(startIndex, endIndex, this.props.rowHeight, this.state.isGroupedView);
        this.setState({
            gridDataSource: gridDataSource,
            topDivHeight: topDivHeight,
            bottomDivHeight: bottomDivHeight,
            isGroupedView: true
        });
        this.refs.blotterInfo.updateGroupedViewStateTo(true);
        if (this.state.blocking) {
            this.toggleBlockUI();
        }
    }

    updateDataGridWithGroupedView() {
        let startIndex = Math.round(document.getElementById('scrollableTableDiv').scrollTop / this.props.rowHeight);
        let endIndex = startIndex + 50;
        this.setState(this.controller.getGroupedViewData(startIndex, endIndex, this.props.rowHeight, this.state.isGroupedView));
        // const { gridDataSource, topDivHeight, bottomDivHeight } = this.controller.getGroupedViewData(startIndex, endIndex, this.props.rowHeight, this.state.isGroupedView);
        // this.refs.gridViewRef.updateGridWithData(gridDataSource, topDivHeight, bottomDivHeight);
        if (this.state.blocking) {
            this.toggleBlockUI();
        }
    }

    clearGrouping() {
        this.toggleBlockUI('');
        /** Resetting temporal slider to default */
        // this.changeSliderValue(15);

        this.controller.clearGroupSubscriptions();
        this.controller.clearArray(this.controller.groupingColumnsByLevel);
        // this.loadDataGridWithDefaultView();
        this.makeDefaultSubscription();
        let columnDragToBar = this.refs.dragToBar;
        while (columnDragToBar.firstChild) {
            columnDragToBar.removeChild(columnDragToBar.firstChild);
        }
        columnDragToBar.appendChild(document.createTextNode("DRAG COLUMNS HERE TO START GROUPING"));
    }

    onColumnDrop(event) {
        if (event.dataTransfer.getData("groupingcolumndata")) {
            let columnData = JSON.parse(event.dataTransfer.getData("groupingcolumndata"));
            let columnIndexInGroupedList = this.controller.getGroupingColumnsArray().indexOf(columnData.celldata.columnkey);

            if (columnIndexInGroupedList === -1) {
                if (this.refs.dragToBar.firstChild.nodeName === '#text') {
                    this.refs.dragToBar.removeChild(this.refs.dragToBar.firstChild);
                }
                let groupedElem = document.createElement('div');
                groupedElem.innerHTML = columnData.celldata.columnvalue;
                groupedElem.className = 'groupedColumn';
                this.refs.dragToBar.appendChild(groupedElem);
                this.toggleBlockUI();
                this.makeGroupSubscription(columnData.celldata.columnkey);
            }
        }
    }

    allowDrop(event) {
        if (!event.dataTransfer.types.includes('groupingcolumndata')) {
            event.dataTransfer.dropEffect = 'none';
        }
        event.preventDefault();
    }

    selectionDataUpdateHandler(rowIndexValue, parentRowKey, event) {
        this.controller.updateRowSelectionData(rowIndexValue, parentRowKey, this.state.isGroupedView);
        this.updateGraphData(rowIndexValue, parentRowKey, this.state.isGroupedView);
    }

    /** ROW UPDATE HANDLER **/

    rowUpdate(data, selectState, rowReference) {
        let rowElem = this.refs.gridViewRef.refs.reactlist.refs['ref' + rowReference];
        if (rowElem !== undefined) {
            rowElem.triggerUpdate(data, selectState);
        }
    }

    aggRowUpdate(data, rowReference) {
        let rowElem = this.refs.gridViewRef.refs.reactlist.refs['ref' + rowReference];
        if (rowElem !== undefined) {
            rowElem.triggerUpdate(data);
        }
    }

    updateAggregatedRowExpandStatus(groupKey, expandStatus) {
        if (expandStatus === false) {
            this.toggleBlockUI();
        }
        this.controller.updateGroupExpansionStatus(groupKey);
    }


    /** GRAPH METHODS **/

    updateGraphData(rowIndexValue, parentRowKey, isGroupedView) {
        this.controller.fetchAndFormatGraphData(rowIndexValue, parentRowKey, isGroupedView, (updateData) => {
            this.props.graphTreeComponentReference().updateParentNodeData(updateData);
        });
    }

    updateGraphUIWithData(graphData) {
        this.props.graphTreeComponentReference().updateGraphData(graphData);
    }

    clearChartComponent() {
        this.props.chartComponentReference().clearChartView();
    }

    /** TEMPORAL METHODS **/

    sliderChangeHandler(e) {
        this.toggleBlockUI();
        console.dir(15 - e.value);
        this.changeSliderValue(e.value);
        this.controller.getDataAtBeforeMins(15 - e.value, this.state.isGroupedView);
    }

    changeSliderValue(value) {
        this.sliderValue = value;
    }

    getLivePrices() {
        this.changeSliderValue(15);
        this.controller.changeLiveDataStatus(true);
        this.controller.changeCurrentSubscriptionToLive(this.state.isGroupedView);
        // this.makeGroupSubscription('name');
    }

    toggleBlockUI(loadingmessage) {
        this.setState({
            blocking: !this.state.blocking,
            loadingmessage: loadingmessage
        });
    }

    reorderColumns(reorderedColumns) {
        this.setState({
            columns: reorderedColumns
        })
    }

    sortColumn(columndata) {
        this.controller.sortDataBykey(columndata.columnvalue, this.state.isGroupedView);
    }

    render() {
        return (
            <BlockUi tag="div" blocking={this.state.blocking} message={this.state.loadingmessage}>
                <div className="blottercontainer">
                    <div className='blottertop'>
                        <div style={{ flex: 0.7 }}>
                            <div ref="dragToBar"
                                className="dragtobar"
                                onDragOver={this.allowDrop.bind(this)}
                                onDrop={this.onColumnDrop.bind(this)}
                            >
                                DRAG COLUMNS HERE TO START GROUPING
                            </div>
                        </div>
                        <div className='temporalContainer'>
                            <div className="temporalUIblock">
                                <div className="temporalslider">
                                    <ReactSimpleRange
                                        disableTrack
                                        min={0}
                                        max={15}
                                        step={5}
                                        defaultValue={this.sliderValue}
                                        sliderSize={4}
                                        thumbSize={15}
                                        sliderColor="#61a9f9"
                                        trackColor="#307dd4"
                                        thumbColor="#307dd4"
                                        onChange={() => console.log('onChange event Handler')}
                                        onChangeComplete={this.sliderChangeHandler.bind(this)} />
                                </div>
                                <button className="button temporalButton" onClick={this.getLivePrices.bind(this)}> LIVE PRICES </button>
                            </div>
                        </div>
                        <BlotterInfo ref="blotterInfo"
                            subscribedTopic={this.props.subscriptionTopic}
                            clearGrouping={this.clearGrouping.bind(this)}
                            sortColumn={this.sortColumn.bind(this)} />
                    </div>
                    <div className="gridContainerDiv">
                        <ControlledSortableHeader
                            columns={this.state.columns}
                            columnReorderHandler={this.reorderColumns.bind(this)}
                            isGroupedView={this.state.isGroupedView}
                            columnsortinghandler={this.sortColumn.bind(this)} />
                        <div id="scrollableTableDiv" className="tableDiv" onScroll={this.scrollEventHandler}>
                            <GridView 
                                ref='gridViewRef'
                                isGroupedView={this.state.isGroupedView}
                                dataSource={this.state.gridDataSource}
                                columnData={this.state.columns}
                                selectionDataUpdateHandler={this.selectionDataUpdateHandler.bind(this)}
                                updateAggregatedRowExpandStatus={this.updateAggregatedRowExpandStatus} />
                        </div>
                    </div>
                </div>
            </BlockUi>
        );
    }
}


export default TableView;