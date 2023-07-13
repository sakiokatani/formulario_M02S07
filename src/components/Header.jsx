import React from "react";
import {useState} from 'react';
import '../styles/header.css'

function Header(){

    const [title, setTitle] = useState('visitante');
  
    const setName=()=>{
        const newName = prompt('Qual é o seu nome?')
        if(newName && newName.trim() !== ''){
            setTitle(newName)
        }
    }

    return(
        <div className="header-component-flex">
            <div className="header-name">
                <button onClick={setName}><h1 className="PageTitle">{`Olá, ${title}`}</h1></button>
            </div>
        </div>
    )
};

export default Header;
