import React from 'react'
 

const Header = () => {
    return (
        <div>
            <header>
                <h1 className="logo"> Logo</h1>
                <input type="checkbox" id="nav__toggle" className="nav__toggle"/>
                <nav class="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><p className="nav__link">Home</p></li>
                        <li className="nav__item"><p   className="nav__link">About</p></li>
                        <li className="nav__item"><p   className="nav__link">Contact</p></li>
                        <li className="nav__item"><p   className="nav__link">Register</p></li>
                    </ul>
                </nav>
                <label for="nav__toggle" className="nav__toggle--label">
                <span></span>
                </label>
            </header>
            
        </div>
    )
}

export default Header
