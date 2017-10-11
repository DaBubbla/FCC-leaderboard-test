import React from 'react';

const CamperListItem = (props) => {
  return (
    <tr>
      <td>{props.number}</td>
      <td>{props.camper.username}</td>
      <td>{props.camper.recent}</td>
      <td>{props.camper.alltime}</td>
    </tr>
  );
};

export default CamperListItem;
