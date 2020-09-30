import React, { Component } from 'react';
import Cell from './Cell';
import {pattern2} from './data.js'
export default class Matrix extends Component {

  genRow = (vals) => {
    return vals.map((val, index) => <Cell value={val} key={index}/>) // replace me and render a cell component instead!

  }

  genMatrix = () => {
    return this.props.values.map((rowVals, index) => <div key={index} className="row">{this.genRow(rowVals)}</div>)
  }
  Matrix.defaultProps = {
    values: pattern2
  };
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}
