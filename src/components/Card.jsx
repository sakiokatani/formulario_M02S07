import React from "react";

import '../styles/card.css'

function Card({ cardVisible, cardData }) {


  if (cardVisible) {
    return (
      <div className="cardContent">
        <ul>
          <li>Nickname: {cardData.nickname}</li>
          <li>Age: {cardData.age}</li>
          <li>Email: {cardData.email}</li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default Card;