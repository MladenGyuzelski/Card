import React from 'react';
import "./button.css";

function Button(props) {

    return (
        <div className='btn-container'>
            <button className='btn-style'>
                <img src={props.img} />
                <p>{props.text}</p>
            </button>
        </div>
    )};

export default Button;