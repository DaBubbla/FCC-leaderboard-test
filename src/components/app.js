import React, { Component } from 'react';
import axios from "axios";
import MDSpinner from 'react-md-spinner';

import CamperList from './camper_list.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recent: [],
      allTime:[],
      currentView: 'recent Campers'
    };
  }

  componentWillMount() {
    axios.all([this.fetchRecentCampers(), this.fetchAllTimeCampers()])
      .then(axios.spread(( recentCampers, allTimeCampers ) => {
        this.setState ({
          recent: recentCampers.data,
          allTime: allTimeCampers.data
         });
      }));
  }

  fetchRecentCampers() {
    return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent");
  }
   fetchAllTimeCampers() {
     return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime");
   }

changeView(currentView){
  this.setState({currentView});
}

  render() {
    if(!this.state.recent.length && !this.state.allTime.length) {
      return <MDSpinner className="spinner" size="60" />
    }
    return (
        <div>
          <h2>{`Viewing Top ${this.state.currentView} Campers`}</h2>
          <button onClick={this.changeView.bind(this, 'recent')} className='btn btn-primary'>Recent</button>
          <button onClick={this.changeView.bind(this, 'allTime')} className='btn btn-primary'>All Time</button>
          <CamperList campers={this.state[this.state.currentView]} />
        </div>
    );
  }
}
