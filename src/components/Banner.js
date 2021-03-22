import React from 'react';

import { FaFacebookF, FaTwitterSquare, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import prashantImage from '../assets/images/prashant.jpg';

const Banner = () => {
    return (
        <header className='banner' id='home'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='basicInfo'>
                            <ul className='socialIcons'>
                                <li><FaFacebookF /></li>
                                <li><FaTwitterSquare /></li>
                                <li><FaInstagram /></li>
                                <li><FaLinkedinIn /></li>
                                <li><FaGithub /></li>
                            </ul>
                            <h1>I am Prashant Rai</h1>
                            <p>i,m Prashant, professional web developer with an experience of approx 3 years in this field.</p>
                            <div className='btn'><a href='#about' className='portfolioBtn'>Check My Portfolio</a></div>
                        </div>
                    </div>
                    <div className='col-6 profileImage'>
                        <div className='employeeImage'>
                            <img src={prashantImage} alt={'Prashant Rai'}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Banner;
