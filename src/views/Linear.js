import React, { Component } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XAxis, YAxis,XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines} from 'react-vis';

class Linear extends Component {
  render(props) {
    const data = this.props.data;
    return (
      <div className="App">
        <XYPlot height={300} width={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={data} />
        </XYPlot>
      </div>
    );
  }
}

export default Linear;