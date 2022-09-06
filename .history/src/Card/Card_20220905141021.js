import React, { Component }  from 'react';

function Card(props) {
    return(
    <div>
     <img src={props.image} alt={props.alt}/>
      <p>{props.featureName} feature </p>
  
    <p>Explore page <i class="fa fa-arrow-right"></i></p>
  
    </div>
    );
  }
  export default Card;

