import React, { useState, useEffect } from "react";


function Card(){
    const [cardData, setCardData] = useState({
        nickname: "",
        age: "",
        email: ""
      });
          
    useEffect(() => {
        const nickname = localStorage.getItem("nickname");
        const age = localStorage.getItem("age");
        const email = localStorage.getItem("email");
    
        setCardData({
        nickname,
        age,
        email
        });
    }, [cardData]);
    
    return (
        <div>
        <ul>
            <li>Nickname: {cardData.nickname}</li>
            <li>Age: {cardData.age}</li>
            <li>Email: {cardData.email}</li>
        </ul>
        </div>
    );
    }

export default Card;