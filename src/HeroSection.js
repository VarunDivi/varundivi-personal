import React from 'react';
import '../src/App.css';
import {Button} from './components/Button';
import './HeroSection.css';

function HeroSection() {
    return(
        <div className='hero-container'>
            <h1> Varun Divi </h1>
            <p> CS + Statistics </p>
            <p> At UNC Chapel Hill</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize = 'btn--large'> Get to Know Me </Button>
            </div>
        </div>
    )
}

export default HeroSection;