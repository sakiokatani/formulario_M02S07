import React, { useRef, useState } from "react";
import Card from "../components/Card";

import '../styles/button.css'

function Button({ nicknameRef, ageRef, emailRef, passwordRef }) {
  const [message, setMessage] = useState("");
  const [cardVisible, setCardVisible] = useState(false);
  const [cardData, setCardData] = useState(null)


  const checkvalues = () => {
    const nickname = nicknameRef.current?.value;
    const age = ageRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (
      nickname.trim().length === 0 ||
      email.trim().length === 0 ||
      age.trim().length === 0 ||
      password.trim().length === 0
    ) {
      setMessage("Preencha todos os campos");
    } else {
      localStorage.setItem("nickname", nickname);
      localStorage.setItem("age", age);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      setMessage("Cadastro enviado com sucesso");

      nicknameRef.current.value = "";
      emailRef.current.value = "";
      ageRef.current.value = "";
      passwordRef.current.value = "";

      setCardVisible(true);
      handleButtonClick()
    }
  };

  const handleButtonClick = () => {
    const nickname = localStorage.getItem("nickname");
    const age = localStorage.getItem("age");
    const email = localStorage.getItem("email");

    setCardData({
      nickname,
      age,
      email
    });
  };

  return (
    <div>
      <button onClick={checkvalues}>Enviar</button>
      <div>{message}</div>
      {cardVisible && <Card cardData={cardData} cardVisible={cardVisible} />}
    </div>
  );
}

export default Button;