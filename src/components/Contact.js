import React from 'react';
import './style.css'
//import PropTypes from 'prop-types'


class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={online: false
        };
    };
    render(){
    return (
        <div className='Contact'>
            
            <img className="avatar" src={this.props.avatar} alt= 'profil random'></img>
            <div className='status'>
                <h3 className="name">{this.props.name}</h3>
                <span  className={(this.state.online)?'status-online':'status-offline'}
                            onClick={event =>{
                                const newStatus = !this.state.online;
                                this.setState({online: newStatus});
                            }}></span>
                <h4 className="status-text">{(this.props.status)?"Online":"Offline"}</h4>
            </div>
        </div>
    )
};
}
/*Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    myName: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
};*/


export default Contact