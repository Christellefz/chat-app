import React from 'react';
import './style.css'
import PropTypes from 'prop-types'


function Contact(props){
    return (
        <div className='Contact'>
            
            <img className="avatar" src={props.avatar} alt= 'profil random'></img>
            <div className='status'>
                <h3 className="name">{props.name}</h3>
                <span  className={(props.status)?'status-online':'status-offline'}></span>
                <h4 className="status-text">{(props.status)?"Online":"Offline"}</h4>
            </div>
        </div>
    )
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    myName: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
};


export default Contact