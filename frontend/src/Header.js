import React from 'react';
import logo from './images/pizza-logo.png';

import './styles-header.css'

export default function Header(props){
    return(
        <header>
            
            <div class="box">
                <h1 class = "title">
                    {props.title}
                    
                    <a href="index.html">
                    <img src={logo} alt="logo" class="logo"/>
                    </a>
                </h1>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="products.html">Produtos</a></li>
                        <li><a href="contact.html">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}