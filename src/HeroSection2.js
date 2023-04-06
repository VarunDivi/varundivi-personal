import React from 'react';
import '../src/App.css';
import {Button} from './components/Button';
import './HeroSection2.css';




function HeroSection2() {
    return(
        
        <div className='hero-container2'>
            <h1> About Me </h1>

                <li> 
                    <ul>Born and Raised in Chapel Hill</ul> 
                    <ul>Favorite Passtime: Skating, Listenting to music</ul> 
                    
                </li>
            <div className="hero-btns">
            </div>
        </div>
    )
}

export default HeroSection2;