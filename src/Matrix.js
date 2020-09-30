import React, { Component } from 'react';
import Cell from './Cell';
import {pattern2} from './data.js'
export default class Matrix extends Component {

  genRow = (vals) => {
    return vals.map(val => <div className="cell"><Cell value={val} /></div>)
  }

  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
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
