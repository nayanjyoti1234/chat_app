import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon  from '../../icons/closeIcon.png';
import './InfoBar.css';
const InfoBar=({room})=>(
    <div className='infoBar'>
        <div className='leftInnerContainer'>
            <img className='onlineIcon' src={onlineIcon} alt="onilne"/>
            <h1>{room}</h1>
        </div>
        <div className='rightInnerContainer'>
            <a href='/'><img src={closeIcon} alt='close'/></a>
        </div>
    </div>
)
export default InfoBar;