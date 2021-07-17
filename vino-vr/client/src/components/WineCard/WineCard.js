import React from "react";
import "./style.css";

function WineCard(props) {
    return (
      <div className="cardContanier">
        <div className="card">
          <div className="img-container">
            <img src={props.img} alt="Wine iamge"/>
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Name:</strong> {props.name}
              </li>
              <li>
                <strong>Mood:</strong> {props.mood}
              </li>
              <li>
                <strong>Type:</strong> {props.type}
              </li>
              <li>
                <strong>Grape:</strong> {props.grape}
              </li>
              <li>
                <strong>Description:</strong> {props.description}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default WineCard;
  