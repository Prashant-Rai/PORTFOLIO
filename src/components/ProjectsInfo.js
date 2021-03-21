import React from 'react';

import { FaCodepen, FaAward, FaStar } from "react-icons/fa";

const ProjectsInfo = () => {
    return (
        <div className='projectsInfo' id='achievements'>
            <div className='container'>
                <div className='professionalInfo'>
                    <div className='headerInfo'>
                        <div className='icon'>
                            <FaCodepen />
                        </div>
                        <h2 className='count'>2</h2>
                        <p className='desc'>Projects</p>
                    </div>
                    <div className='headerInfo'>
                        <div className='icon'>
                            <FaAward />
                        </div>
                        <h2 className='count'>3</h2>
                        <p className='desc'>Awards</p>
                    </div>
                    <div className='headerInfo'>
                        <div className='icon'>
                            <FaStar />
                        </div>
                        <h2 className='count'>2.8</h2>
                        <p className='desc'>Years Experience</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsInfo
