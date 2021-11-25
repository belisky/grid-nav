import React from 'react'
import './Content.css' 
import backgroundimg from '../../Assets/Images/background.jpg';

const Content = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundimg})`}} className="content">
         <h2>We've come far!!!</h2>
        </div>
    )
}

export default Content
