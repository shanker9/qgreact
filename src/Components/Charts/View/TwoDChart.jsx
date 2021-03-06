import React, { Component } from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  // Label,
  Text
} from 'recharts';

class TwoDChart extends Component {

  constructor(props) {
    super(props);
    props.resizeEventHandler(this.resizeEventHandler.bind(this));
    this.state = {
      dataObject: {},
      chartHeight: 0,
      chartWidth: 0
    }
    this.entriesDatePathComponent = undefined;
    this.chartHeight = undefined;
    this.chartWidth = undefined;
    this.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  }

  componentDidMount() {
    this.calculateChartSize();
    this.renderChartWithData(this.props.chartData);
  }

  componentWillReceiveProps(nextProps) {
    if(this.chartHeight === 0){
      this.calculateChartSize();
    }
    this.renderChartWithData(nextProps.chartData);
  }

  resizeEventHandler(p) {
    console.log('chart resize handler');
    this.chartHeight = p.rect.height * 0.95;
    this.chartWidth = p.rect.width * 0.95;
  }

  getChartData(graphData) {
    let chartData = [], dataMin, dataMax, xVal, yVal;
    graphData.forEach(item => {
      xVal = this.getFormatedDate(item);
      yVal = item.value * 100;

      dataMin = !dataMin ? yVal : (dataMin > yVal ? yVal : dataMin);
      dataMax = !dataMax ? yVal : (dataMax < yVal ? yVal : dataMax);

      chartData.push({ time: xVal, rate: yVal });
    })
    dataMax = dataMax.toFixed(2);
    dataMin = dataMin.toFixed(2);
    // let ticksInterval = ((dataMax - dataMin) / chartData.length).toFixed(2);
    return { chartData, dataMin, dataMax };
  }

  getFormatedDate(item) {
    let d = new Date(parseInt(item[this.entriesDatePathComponent].value * 1000, 10));
    return `${d.getDate()}${this.monthNames[d.getMonth()]}${d.getFullYear()}`;
  }

  renderChartWithData(dataParams) {
    const dataObject = this.getFormattedChartData(dataParams);
    this.setState({
      dataObject: dataObject,
      chartHeight: this.chartHeight,
      chartWidth: this.chartWidth
    });
  }

  getFormattedChartData(dataParams) {
    this.entriesDatePathComponent = dataParams.datePathComponent;
    let dataObject = this.getChartData(dataParams.data);
    return dataObject;
  }

  calculateChartSize() {
    let boundingDiv = document.getElementById('chartBoundingDiv');
    if (boundingDiv) {
      this.chartHeight = boundingDiv.clientHeight * 0.95;
      this.chartWidth = boundingDiv.clientWidth * 0.95;
    }
  }

  render() {
    return (
      <div id='chartBoundingDiv' style={{ flex: 1 }}>
        <AreaChart width={this.state.chartWidth} height={this.state.chartHeight} data={this.state.dataObject.chartData}
          margin={{ top: 10, right: 0, left: 10, bottom: 0 }}>
          <XAxis dataKey="time"
            tickCount={2}
            interval={10}
          />
          <YAxis domain={['auto', this.state.dataObject.dataMax]}
            allowDecimals={true}
            tickCount={8}
          >
          </YAxis>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='rate'
            dot={true}
            stroke='#316086'
            fill='#bfe2ff'
          />
          <Text width={10} />
        </AreaChart>
      </div>
    );
  }
}

export default TwoDChart;