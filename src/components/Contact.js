import React from 'react'

import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='contact' id='contacts'>
            <div className='container'>
                <div className='common'>
                    <h1 className='mainHeader'>Contact Me</h1>
                    <p className='mainContent'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                    <div className='commonBorder'></div>
                </div>
                <div className='contactCardsWrapper'>
                    <div className='contactCard'>
                        <div className='contactHeader'>
                            <span className='contactIcon'><FaMapMarkerAlt /></span>
                            <span className='contactDesc'>Locate Me</span>
                            <div className='contactDetails'>M-35 Sector 66 Noida</div>
                        </div>
                    </div>
                    <div className='contactCard'>
                        <div className='contactHeader'>
                            <span className='contactIcon'><FaPhoneAlt /></span>
                            <span className='contactDesc'>Give Me A Call</span>
                            <div className='contactDetails'>+91-8506051213</div>
                        </div>
                    </div>
                    <div className='contactCard'>
                        <div className='contactHeader'>
                            <span className='contactIcon'><FaEnvelope /></span>
                            <span className='contactDesc'>Send Me An Email</span>
                            <div className='contactDetails'>prasantrai118@gmail.com</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact
