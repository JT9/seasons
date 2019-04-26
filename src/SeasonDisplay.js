import './SeasonDisplay.css';
import React from 'react';

//config object
const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun'
  },
  winter: {
    text: "Burr it is cold!",
    iconName: 'snowflake'
  }
};

//helper function
const getSeason = (lat, month) => {
  //Summer months
  if (month > 2 && month < 9) {
    //lat > 0 summer otherwise < 0 its winter
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

//component
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; // { text, iconName }
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} /> 
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
    );  
};

export default SeasonDisplay;