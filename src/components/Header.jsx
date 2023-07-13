import React from "react";
import {useState} from 'react';
import '../styles/header.css'

function Header(){

    const header =[
        {   
            id:1,
            label: 'Contato',
        },
        {   
            id:2,
            label: 'FAQ',
        },
        {   
            id:3,
            label: 'Suporte',
        },
        {   
            id:4,
            label: 'Login',
        }
    ]

    const [title, setTitle] = useState('Home');

    const handleTitleChange = (newTitle) => {
       setTitle(newTitle || 'Home');
    }


    return(
        <div className="header-container-flex">
            <div className="logo-wrapper">
            <a href="#" key={'home'} onClick={()=> handleTitleChange(title === 'Home')}>
            <img src="../user-5865.png" alt="logo"/>
            </a>
            </div>
            <div className="header-title-wrapper">
                    <h1>{title}</h1>
            </div>
            <nav className="header-menu-wrapper">
                <ul>
                {header.map((item) => (
                    <a href="#" key={item.id} onClick={() => handleTitleChange(item.label)}>
                    {item.label}
                    </a>
                ))}
                </ul>
            </nav>
    </div>
    )
};
export default Header;
