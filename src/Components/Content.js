import React from 'react'
 
import backgroundimg from '../Assets/Images/background.jpg';

const Content = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundimg})`}} className="content">
         <h2>Your content would go here!!!</h2>
        </div>
    )
}

export default Content
