import React from 'react';

import CamperListItem from './camper_list_item.js';

const CamperList = ({ campers }) => { //Campers not defined...

//const Items = campers.map((camper)=>{// test camper
//  return <CamperListItem />
//});

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
        
      </tbody>
    </table>
  );
}

export default CamperList;
