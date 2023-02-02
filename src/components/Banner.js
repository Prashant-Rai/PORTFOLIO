import React from 'react';

import { FaFacebookF, FaTwitterSquare, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import prashantImage from '../assets/images/prashant.jpg';

const socialIconMap = [
    {link: 'https://www.instagram.com/__prashant_rai__/', component: FaGithub},
    {link: 'https://www.linkedin.com/in/prashantrai118/', component: FaLinkedinIn},
    {link: 'https://www.facebook.com/prashant.rai.3597789/', component: FaFacebookF},
    {link: 'https://www.instagram.com/__prashant_rai__/', component: FaInstagram},
];

const getTotalExperience = (firstDate, secondDate) => {
    let totalMonths = (secondDate.getFullYear() - firstDate.getFullYear()) * 12;
    totalMonths -= firstDate.getMonth();
    totalMonths += secondDate.getMonth();
    totalMonths = totalMonths <= 0 ? 0 : totalMonths;
    const years = Math.floor(totalMonths/12), months = totalMonths%12;
    return `${years} years ${months} months`
};

const Banner = () => {
    const socialIcons = socialIconMap.map(({link, component: Component}) => {
        return <a href={link} target='_blank'><li><Component /></li></a>
    });

    const JOINING_DATE = new Date('07-02-2018'),
        CURRENT_DATE = new Date();

    const experience = getTotalExperience(JOINING_DATE, CURRENT_DATE);

    const onDownloadResume = () => {
        const RESUME_URL = process.env.PUBLIC_URL+'/prashant_resume_2023.pdf'
        const fileName = RESUME_URL.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = RESUME_URL;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    return (
        <header className='banner' id='home'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='basicInfo'>
                            <ul className='socialIcons'>
                                {socialIcons}
                            </ul>
                            <h1>I am Prashant Rai</h1>
                            <p>i,m Prashant, professional web developer with an experience of {experience} in this field.</p>
                            <div className='btnWrapper'>
                                <div className='btn'><a href='#about' className='portfolioBtn'>My Portfolio</a></div>
                                <div className='downloadResume' onClick={onDownloadResume}>My Resume</div>  
                            </div>
                           
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
