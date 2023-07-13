import React from "react";
import { useState, useEffect } from "react";

function Form(){

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");

    return(
        <>
        <form>
            <div className="form-group">

            <input 
            id="name"
            placeholder="Nome completo"
            name = "name"
            value = {name}
            onChange={(event) => setName(event.target.value)}
            required
            >
            </input> 
            
                <input 
            id="phone"
            placeholder="Telefone"
            name = {phone}
            onChange={(event) => setPhone(event.target.value)}
            >
            </input> 

            <input 
            id="email"
            placeholder="e-mail"
            name = {email}
            onChange={(event) => setEmail(event.target.value)}
            required
            >
            </input> 

            <input 
            id="assunto"
            placeholder="assunto"
            nome={subject}
            onChange={(event) => setSubject(event.target.value)}
            >
            </input>
            </div>
        </form>
        </>
    )
}

export default Form;