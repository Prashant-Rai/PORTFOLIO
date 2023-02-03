import React from 'react';
import Experience from './Experience';

const ExperienceAndEducation = () => {
    return (
        <div className='timeline' id='timeline'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div class='experienceContainer'>
                            <h5 className='expHeader'>My Education</h5>
                            <Experience />
                            <div className='commonBorder isHidden'></div>
                        </div>
                    </div>
                    <div className='col-6'>
                    <div class='experienceContainer'>
                        <h5 className='expHeader'>My Education</h5>
                        <Experience />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceAndEducation
