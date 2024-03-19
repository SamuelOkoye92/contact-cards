import React, { useState } from "react";
import './App.css';

const ContactCard = (props) => {
    const [showAge, setShowAge] = useState(false);
    return (
        <div className="card">
            <img className='image' src={props.avatarUrl} alt='Profile' />
            <div>
                <p>Name: {props.name }</p>
                <p>email: { props.email}</p> 
                <button onClick={() => setShowAge(!showAge)}>Show Age</button> 
                {showAge ? <p>Age: { props.age }</p> : ''}
            </div>
        </div>
    )
}

export default ContactCard;