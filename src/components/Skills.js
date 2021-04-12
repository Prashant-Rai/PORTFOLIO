import React from 'react';

const skillsMap = [
    {id: 1, skillName: 'Javascript', skillCount: 8/10},
    {id: 2, skillName: 'React.js', skillCount: 8/10},
    {id: 3, skillName: 'GraphQL', skillCount: 7/10},
    {id: 4, skillName: 'GitHub', skillCount: 6/10},
    {id: 5, skillName: 'Node.js', skillCount: 5/10},
];

const Skills = () => {
    const skills = skillsMap.map(({id, skillName, skillCount}) => {
        return(
            <div className='skillBar' key={id}>
                <p>{skillName}</p>
                <div className='outerBar'>
                    <div className='innerBar' style={{width: `${skillCount * 100}%`}}>
                        <div className='skillCount'>{skillCount * 100}%</div>
                    </div>    
                </div>     
            </div> 
        );
    })
    return (
        <div className='skills' id='skills'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='expertise'>
                            <h5 className='expertHeaderSmall'>I,M EXPERT ON</h5>
                            <h2 className='mainHeader'>Let,s Work Together</h2>
                            <p className='skillsDescription mainContent'>Currently I am working with some awsome technologies like Javascript, React.js and GraphQL. I have also used Git to manage the code remotely. Currently i am in process to learn Node.js to manage server side.</p>
                            <div className='btn'><a href='#' className='portfolioBtn'>Hire Me</a></div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='skillRatings'>
                            {skills}      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
