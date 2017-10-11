import React, { Component } from 'react';
import CamperListItem from './camper_list_item.js';

export default class List extends Component {

  renderList() {
    return this.props.campers.map((camper, i) => {
      return (
        <CamperListItem
          key={i}
          number={i+1}
          camper={camper}
        />
      )
    })
  }

  render() {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Last 30 days</th>
            <th>All Time Points</th>
          </tr>
        </thead>
        <tbody>
          {this.renderList()}
        </tbody>
      </table>
    )
  }
}
