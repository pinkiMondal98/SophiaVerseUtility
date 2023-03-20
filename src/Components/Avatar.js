import React, { useState } from 'react';

const Avatar = ({profile}) =>{
    return(
        <img src={profile} alt="user-img" className="img-thumbnail rounded-circle" style={{backgroundColor:'#ffffff'}}/>
    );
};
export default Avatar;