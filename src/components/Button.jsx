import React, { useRef, useState } from "react";

function Button({ nicknameRef, ageRef, emailRef, passwordRef }) {
  const [message, setMessage] = useState("");

  const checkvalues = () => {
    const nickname = nicknameRef.current.value;
    const age = ageRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (
      email.trim().length === 0 ||
      age.trim().length === 0 ||
      password.trim().length === 0 ||
      nickname.trim().length === 0
    ) {
      setMessage("Preencha todos os campos");
    } else {
      emailRef.current.value = "";
      ageRef.current.value = "";
      passwordRef.current.value = "";
      nicknameRef.current.value = "";

      setMessage("Cadastro enviado com sucesso");
    }
  };

  return (
    <div>
      <button onClick={checkvalues}>Enviar</button>
      <div>{message}</div>
    </div>
  );
}

export default Button;