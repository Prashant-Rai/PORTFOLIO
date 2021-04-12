import React, {useState} from 'react';

import { FaTimes, FaHamburger } from "react-icons/fa";

const Nav = () => { 
    const [toggle, updateToggle] = useState(false),
        [style, updateStyle] = useState({top: 0});

    const onToggle = () => {
        updateStyle({top: '0'});
        updateToggle(!toggle);
    };

    const expand = toggle ? 'expand' : 'collapse';

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            updateStyle({top: 0});
        } else {
            updateStyle({top: '-100px'});
        }
    };

    return (
        <nav className='navbar' id='navbar' style={style}>
            <div className='container'>
                <div className='navItems'>
                    <ul className='navbarLeft'>
                        <div className='navbarLogo'>
                            <div className='logoName'>
                                Prashant Rai
                                <div className='logoDesignation'>Software Engineer</div>
                            </div>
                        </div>
                    </ul>
                    <ul className={`navbarRight ${expand}`} onClick={onToggle}>
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
