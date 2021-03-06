import React from 'react';
import TableCell from './TableCell.jsx';
// import styles from '../../../styles/AppStyles.css';
import format from 'format-number';
import RowFields from './RowFields.js';

class TableRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelected: this.props.selectState,
            data: props.data,
            columnData: this.props.columnData,
        }
        this.dynamicBackgroundColor = undefined;
        this.handleRowClick = this.handleRowClick.bind(this);

        this.dataKeysJsonpathMapper = {
            "amerOrEuro": "/AmerOrEuro",
            "contractSize": "/ContractSize",
            "counterparty": "/Counterparty",

            "maturityDate": "/MaturityDate",

            "payCurrency": "/PayCurrency",
            "payDiscountCurve": "/PayDiscountCurve",
            "payFixedRate": "/PayFixedRate",
            "payNotional": "/PayNotional",

            "putOrCall": "/PutOrCall",

            "receiveCurrency": "/ReceiveCurrency",
            "receiveDiscountCurve": "/RreceiveDiscountCurve",
            "receiveIndex": "/ReceiveIndex",
            "receiveNotional": "/ReceiveNotional",

            "strike": "/Strike",

            "lastUpdated": "/LastUpdated",

            "payLeg": "/PayLeg",
            "receiveLeg": "/ReceiveLeg",

            "price": "/Price",
            "rho10bps": "/Rho10bps",
            "gamma1pct": "/Gamma1pct",
            "delta1pct": "/Delta1pct",
            "vega1pt": "/Vega1pt",
            "volatility": "/Volatility",

            "name": "/Name",
            "underlier": "/Underlier",
            "vertex": "/Vertex"
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            columnData: nextProps.columnData
        })
    }

    handleRowClick(e) {
        e.preventDefault();
        console.log('Is Ctrl Pressed: ' + e.shiftKey);
        this.props.selectionDataUpdateHandler(this.props.indexVal, this.props.parentRowKey, e);
    }

    triggerUpdate(newdata, selectState) {
        this.setState({ data: newdata, isSelected: selectState });
    }

    // getCellDataForKey(data, key) {
    //     let result, jsonpathforkey = this.dataKeysJsonpathMapper[key];

    //     if (jsonpathforkey === undefined) {
    //         return '';
    //     } else {
    //         let pathComponents = jsonpathforkey.split('/');
    //         pathComponents = pathComponents.filter(item => item ? item : false)
    //         if (pathComponents.length === 0) {
    //             result = data[key];
    //         } else {
    //             result = data;
    //             pathComponents.forEach(pathComponent => { result = result[pathComponent] })
    //         }
    //     }

    //     if ((key === 'receiveLeg' || key === 'price' || key === 'payLeg') && result) {
    //         return this.formatNumber(result.toFixed(2));
    //     }
    //     return result;
    // }

    // getCellDataForKey(data, field) {
    //     let result = data[field];
    //     return (field === 'ReceiveLeg' || field === 'Price' || field === 'PayLeg') && result ? this.formatNumber(result.toFixed(2)) : result;
    // }

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

            default:
            
        }
        return result;
    }

    render() {
        this.dynamicBackgroundColor = this.state.isSelected ? '#7cb6ff' : this.props.isRowColored ? '#edeff2' : '#FFFFFF';
        return (
            <div ref={"tableRow"} className="tableGridRow" onClick={this.handleRowClick} style={{ backgroundColor: this.dynamicBackgroundColor }}>
                {this.props.isGroupedView ? <div className="tdGroupedView"></div> : null}
                {this.state.columnData.map((item, i) =>
                    <TableCell key={i} parentBackgroundColor={this.dynamicBackgroundColor}
                        cellData={this.getCellDataForKey(this.state.data, item.columnvalue)}
                        columnProperties={item.properties} />
                )}
            </div>
        )
    }

}

export default TableRow;