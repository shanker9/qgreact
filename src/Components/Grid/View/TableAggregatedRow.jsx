import React from 'react';
import TableCell from './TableCell.jsx';
import RowController from '../../../Controllers/RowController.js';
import format from 'format-number';
import RowFields from './RowFields.js';

class TableAggregatedRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            columnData: props.columnData,
            expandStatus: props.expandStatus
        }

        this.controller = new RowController();
        this.dynamicBackgroundColor = undefined;
        this.handleRowClick = this.handleRowClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data,
            columnData: nextProps.columnData,
            expandStatus: nextProps.expandStatus
        })
    }

    handleRowClick(e) {
        e.preventDefault();
        this.props.updateAggregatedRowExpandStatus(this.props.aggregatedRowKey, this.state.expandStatus);
    }

    triggerUpdate(newdata) {
        this.setState({ data: newdata })
    }

    formatNumber(number) {
        let myFormat = format({ prefix: '$', integerSeparator: ',' });
        let formattedNum = myFormat(number);
        return formattedNum;
    }

    getCellDataForKey(data, field) {
        let result = data[field];
        if(!result) return result;

        switch(field){
            case RowFields.RECEIVELEG:
            case RowFields.PRICE:
            case RowFields.PAYLEG:
            case RowFields.RHO10BPS:
            case RowFields.GAMMA1PCT:
            case RowFields.DELTA1PCT:
            case RowFields.VEGA1PCT:
            result = this.formatNumber(result.toFixed(2));
            break;

            default :
            
        }
        return result;
    }

    render() {
        return (
            <div ref={"tableRow"} className="tableRow"  style={{}}>
                <div className="tdGroupedView" onClick={this.handleRowClick}>{this.state.expandStatus ? '-' : '+'}</div>
                {this.state.columnData.map((item, i) =>
                    <TableCell key={i} parentBackgroundColor={this.dynamicBackgroundColor}
                        cellData={this.getCellDataForKey(this.state.data,item.columnvalue)}
                        columnProperties={item.properties}></TableCell>
                )}
            </div>
        )
    }

}



export default TableAggregatedRow;