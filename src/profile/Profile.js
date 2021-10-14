import React, { Component } from 'react';
import PropTypes from 'prop-types';
function Profile (props) {
    const handleName  = e => {
        e.preventDefault();
        alert(props.fullName);
      };
      return (
        <div>
             {props.children && <img width="320px" src={props.children} />}
          {props.fullName && <h3 style={{textDecoration: 'underline'}}>  {props.fullName} </h3>}
          <p style={{fontSize: '2rem'}}>{props.bio}</p>
          <p>{props.profession} </p>
          <a onClick={handleName}>Click</a>
         
        </div>
      )
    
  }
    
  Profile.defaultProps = {
    fullName: "na",
    bio: "naa",
    profession: "naaa"
  }
  Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
  };
  
  export default Profile;