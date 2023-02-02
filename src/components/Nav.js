import React, {useState} from 'react';

import { FaTimes, FaHamburger } from "react-icons/fa";

const Nav = () => { 
    const [toggle, updateToggle] = useState(false);
    const toggleClass = toggle ? 'expand' : 'collapse';

    const onToggle = () => {
        updateToggle(!toggle);
    };

    return (
        <nav className='navbar' id='navbar'>
            <div className='container'>
                <div className='navItems'>
                    <ul className='navbarLeft'>
                        <div className='navbarLogo'>
                            <div className='logoName'>
                                PORTFOLIO
                            </div>
                        </div>
                    </ul>
                    <ul className={`navbarRight ${toggleClass}`} onClick={onToggle}>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='#achievements'>Achievements</a></li>
                        <li><a href='#achievements'>Galleria</a></li>
                        <li><a href='#contacts'>Contact</a></li>
                    </ul>
                </div> 
                <div className='burgerMenu' onClick={onToggle}>{ !toggle ? <FaHamburger /> : <FaTimes />}</div>  
            </div>
        </nav>
    )
}

export default Nav
