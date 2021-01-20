import React from 'react';
import './style.css'
const avatar = 'https://randomuser.me/api/portraits/men/79.jpg';
const myName = 'Christellefz';
const online = false;

function Contact(){
    return (
        <div className='Contact'>
            <img className="avatar" src={avatar} alt= 'uneimage de profil random'></img>
            <div className='status'>
                <h3 className="name">{myName}</h3>
                <span className={online?'status-online':'status-offline'}></span>
                
                <h4 className="status-text">{online?"Online":"Offline"}</h4>
                
            </div>

        </div>
    )
}
export default Contact