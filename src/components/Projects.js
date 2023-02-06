import React from 'react'

const baseURL = process.env.PUBLIC_URL;

const projectDetailsConfig = [
    {
        name: 'Optimus (IDFC First Bank)',
        type: 'Banking Project',
        url: baseURL + '/bankingsystem.jpg'
    },
    {
        name: 'Rediker',
        type: 'School Management Project',
        url: baseURL + '/schoolmanagement.jpg'
    },
    {
        name: 'ElderMark',
        type: 'Health Care Project',
        url: baseURL + '/health.jpg'
    },
    {
        name: 'Goal Plan System',
        type: 'IT Management Project',
        url: baseURL + '/companymanagement.jpg'
    }
];

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <div className='container'>
                <div className='common'>
                    <h1 className='mainHeader'>Projects</h1>
                    <p className='mainContent'>
                        Let's see in Projects, what projects I have worked/completed till now.
                    </p>
                    <div className='commonBorder'></div>
                </div>
                <div className='projectCardsWrapper'>
                    {
                        projectDetailsConfig.map(item => {
                            return(
                                <div class="projectsCard">
                                    <a target="_blank" href={item.url}>
                                        <img src={item.url} alt="Cinque Terre" width="600" height="400" />
                                    </a>
                                    <h4 class="desc">{item.name}</h4>
                                    <p class="desc">{item.type}</p>
                                </div>
                            );
                        })
                    }  
                </div>   
            </div>
        </div>
    )
}

export default Projects;
