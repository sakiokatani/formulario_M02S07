import React from "react";
import { useState, useRef } from "react";

import Button from '../components/Button'

function Form({handleButtonClick}){

    const [nickname, setNickname] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nicknameRef = useRef(null);
    const ageRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    
    return(
        <>
        <form>
            <div className="form-group">

            <input 
            id="name"
            placeholder="Nickname"
            name = "name"
            value = {nickname}
            ref={nicknameRef}
            onChange={(event) => setNickname(event.target.value)}
            required
            >
            </input> 
            
                <input 
            id="age"
            placeholder="Idade"
            name = {age}
            ref={ageRef}
            onChange={(event) => setAge(event.target.value)}
            >
            </input> 

            <input 
            id="email"
            placeholder="e-mail"
            name = {email}
            ref={emailRef}
            onChange={(event) => setEmail(event.target.value)}
            required
            >
            </input> 

            <input 
            id="password"
            placeholder="Senha"
            nome={password}
            ref={passwordRef}
            onChange={(event) => setPassword(event.target.value)}
            >
            </input>
            </div>
        </form>
            <div>
            <Button
                nicknameRef={nicknameRef}
                ageRef={ageRef}
                emailRef={emailRef}
                passwordRef={passwordRef}
                onClick={handleButtonClick}
            />
            </div>
        </>
    )
}

export default Form;