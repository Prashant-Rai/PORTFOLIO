import React from 'react';
import Experience from './Experience';

const ExperienceAndEducation = () => {
    return (
        <div className='timeline' id='timeline'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                    <h5 className='expHeader'>My Education</h5>
                    <Experience />
                    </div>
                    <div className='col-6'>
                        <h5 className='expHeader'>My Education</h5>
                        <Experience />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceAndEducation
