import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow.jsx';
import TableAggregatedRow from './TableAggregatedRow.jsx';
import ReactList from 'react-list';

class GridView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isGroupedView: props.isGroupedView,
            dataSource: props.dataSource,
            columnData: props.columnData
        }
        this.selectionDataUpdateHandler = props.selectionDataUpdateHandler;
        this.updateAggregatedRowExpandStatus = props.updateAggregatedRowExpandStatus;
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextprops in gridview', nextProps)
        const {isGroupedView,dataSource,columnData} = {...nextProps}
        this.setState({isGroupedView,dataSource,columnData});
    }

    render() {
        return this.state.isGroupedView ? this.groupedViewReactList() : this.defaultViewReactList();
    }

    renderItemGroupedView(index, key) {
        let item = this.state.dataSource[index];
        return item.isAggregatedRow ?
            <TableAggregatedRow
                ref={'ref' + item.key}
                key={item.key}
                data={item.data.groupData}
                aggregatedRowKey={item.key}
                expandStatus={item.data.showBucketData}
                bucketData={item.data.bucketData}
                columnData={this.state.columnData}
                dataUpdateHandler={this.selectionDataUpdateHandler}
                updateAggregatedRowExpandStatus={this.updateAggregatedRowExpandStatus} />
            :
            <TableRow
                ref={'ref' + item.data.rowID}
                key={item.data.rowID}
                data={item.data.data}
                indexVal={item.data.rowID}
                parentRowKey={item.data.aggRowKey}
                selectionDataUpdateHandler={this.selectionDataUpdateHandler}
                selectState={item.data.isSelected}
                columnData={this.state.columnData}
                isGroupedView={this.state.isGroupedView} />

    }

    renderItemDefaultView(index, key) {
        let item = this.state.dataSource[index];

        return <TableRow
            ref={'ref' + item.rowID}
            key={item.rowID}
            data={item.data}
            indexVal={item.rowID}
            selectionDataUpdateHandler={this.selectionDataUpdateHandler}
            selectState={item.isSelected}
            columnData={this.state.columnData} />
    }

    groupedViewReactList() {
        return (
            <div className="table">
                <div className="tableBody" >
                    <ReactList ref='reactlist'
                        itemRenderer={this.renderItemGroupedView.bind(this)}
                        length={this.state.dataSource.length}
                        type='uniform'
                    />
                </div>
            </div>
        )
    }

    defaultViewReactList() {
        return (
            <div className="table">
                <div className="tableBody" >
                    <ReactList ref='reactlist'
                        itemRenderer={this.renderItemDefaultView.bind(this)}
                        length={this.state.dataSource.length}
                        type='uniform'
                    />
                </div>
            </div>
        )
    }

}

GridView.propTypes = {
    isGroupedView: PropTypes.bool,
    dataSource: PropTypes.array.isRequired,
    columnData: PropTypes.array.isRequired,
    selectionDataUpdateHandler: PropTypes.func,
    dataUpdateStatus: PropTypes.func
}

export default GridView;