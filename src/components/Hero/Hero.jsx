import React from 'react';
import './Hero.css';
import bgImage from '../../assets/Background.png';

const Hero = () => {
    return (
        <section className='hero'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`,
            }}>
            <div className='hero__content'>
                <h1 className="hero__title">Explore the Urban Fashion</h1>
                <p className="hero__subtitle">Attitude and Style</p>
                <a href='#products' className='hero__cta'>Ver Coleccion</a>
            </div>
        </section>
    );
};

export default Hero;

