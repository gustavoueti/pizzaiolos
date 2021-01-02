import React from 'react';
import logo from './images/pizza-logo.png';

export default function Header(props){
    return(
        <header>
            
            <div class="box">
                <h1>
                    {props.title}
                    
                    <a href="index.html">
                    <img src={logo} alt="logo" />
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