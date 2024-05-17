import React from 'react';
import '../components/styles_css/Title.css'
import logoImage from '../images/UCF_Logo.png'

function Title() {
  return (
    <div className="title-container">
      <div className="title-content">
        <img src={logoImage} alt="ucflogo" className="ucflogo"></img>
        <h1> Survey </h1>
      </div>
    </div>
  );
}

export default Title;