import React, { useRef, useState } from "react";
import Card from "./Card";


function Button({ nicknameRef, ageRef, emailRef, passwordRef }) {
  const [message, setMessage] = useState("");
  const [showCard, setShowCard] = useState(false);
  
  const checkvalues = () => {
    const nickname = nicknameRef.current?.value;
    const age = ageRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (
      nickname.trim().length === 0||
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
      
    }
  };

  const renderCard=()=>{
    return <Card></Card>
  }

  return (
    <div>
      <button onClick={checkvalues}>Enviar</button>
      <div>
      {message}
      </div>
      {showCard && <Card />}
    </div>
  );
}

export default Button;