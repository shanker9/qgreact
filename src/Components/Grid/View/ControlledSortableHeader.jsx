import React, { Component } from 'react';
import Sortable from 'react-sortablejs';
import TableHeaderCell from './TableHeaderCell.jsx';
class ControlledSortableHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columns: props.columns,
            isGroupedView: props.isGroupedView
        }
        this.parentColumnSetter = props.columnReorderHandler;
        this.columnsortinghandler = props.columnsortinghandler;
    }

    componentWillReceiveProps(nextProps) {
        const { columns, isGroupedView } = { ...nextProps };
        this.setState({
            columns: columns,
            isGroupedView: isGroupedView
        });
    }

    listChangeHandler(order, sortable, evt) {
        let orderWithFilteredElements = this.state.isGroupedView ? order.slice(1) : order;
        let reorderedItemList = [];
        orderWithFilteredElements.forEach((item, i) => {
            let itemInCurrentState = this.state.columns.find(val => val.columnkey === item);
            reorderedItemList.push(itemInCurrentState);
        })
        this.parentColumnSetter(reorderedItemList);
    }

    scrollEventHandler = () => {
        let headerNode = document.getElementById('scrollableHeaderDiv');
        let tableNode = document.getElementById('scrollableTableDiv');
        tableNode.scrollLeft = headerNode.scrollLeft;
    }

    getDraggableElements() {
        let list = this.state.columns.map((item, i) => <TableHeaderCell key={i} columndata={item} columnsortinghandler={this.columnsortinghandler} />)
        return list;
    }

    getHeaderRow() {
        return this.state.isGroupedView ? (
            <div id="scrollableHeaderDiv" className='headerDiv' onScroll={this.scrollEventHandler}>
                <div style={{display:'table',borderCollapse:'collapse'}}>
                    <div>
                        <Sortable tag='div' className='sortable-header-row'
                            options={{ animation: 300, handle: '.my-handle', filter: '.groupExpansionHeaderBox' }}
                            onChange={this.listChangeHandler.bind(this)}>
                            <div className='groupExpansionHeaderBox' />
                            {this.getDraggableElements()}
                        </Sortable>
                    </div>
                </div>
            </div>
        ) :
            (
                <div id="scrollableHeaderDiv" className='headerDiv' onScroll={this.scrollEventHandler}>
                    <div>
                        <div>
                            <Sortable tag='div' className='sortable-header-row'
                                options={{ animation: 300, handle: '.my-handle', filter: '.groupExpansionHeaderBox' }}
                                onChange={this.listChangeHandler.bind(this)}>
                                {this.getDraggableElements()}
                            </Sortable>
                        </div>
                    </div>
                </div>
            );
    }

    render() {
        return this.getHeaderRow();
    }
}

export default ControlledSortableHeader;