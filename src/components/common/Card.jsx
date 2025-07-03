import React from "react";
import "../../styles/Card.scss";


const Card = ({ title, body, img }) => {
  
  return (
    <div className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Card;
