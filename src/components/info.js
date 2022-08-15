import React from 'react';
import ReactDOM from 'react-dom';
import './info.css';
import image from '../images/steve-buschemi.jpg';
import Button from './button.js';

function Info() {
    return <div>
        <img src={image}/>
        <h1>Steve Buschemi</h1>
        <p className='jobTitle'>A normal person</p>
        <p className='quote'>Hello fellow children!</p>
        <div>
            <Button 
                img=''
                text='Mail'
            />
            <Button 
                img=''
                text='LinkedIn'
            />
        </div>
    </div>
};

export default Info