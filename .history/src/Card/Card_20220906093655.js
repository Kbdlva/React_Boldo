import React, { Component }  from 'react';

function Card(props) {
    return(
    <div className="card">
     <img src={props.image} alt={props.alt} className="cardImg"/>
      <p>{props.featureName} feature </p>
  
    <p>Explore page <i class="fa fa-arrow-right"></i></p>
  
    </div>
    );
  }
  export default Card;

