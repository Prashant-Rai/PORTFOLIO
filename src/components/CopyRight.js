import React from 'react';

import { FaHeart } from "react-icons/fa";

const CopyRight = () => {
    return (
        <div className='copyRight'>  
            <div className='container'>
                <div className='footer'>
                    <div className='copyIssues'>
                        <div className='mainContent'>No &copy; Copy Right Issues</div>
                        <div className='mainContent'>Feel free to copy. Ping me if help is needed.</div>
                    </div>
                    <div className='mainContent'>Made with <span className='indianHeart'><FaHeart /></span> In India</div>
                </div>
            </div>
        </div>
    )
}

export default CopyRight
