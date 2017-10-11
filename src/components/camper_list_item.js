import React from 'react';

const CamperListItem = (props) => {
  return (
      <tr>
        <td>{props.number}</td>
        <td><a href={`https://freecodecamp.com/${camper.username}`} target="_blank">{camper.username}</a></td>
        <td>{props.camper.recent}</td>
        <td>{props.camper.alltime}</td>
      </tr>
  );
};

export default CamperListItem;
