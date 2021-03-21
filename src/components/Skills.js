import React from 'react'

const Skills = () => {
    return (
        <div className='skills' id='skills'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='expertise'>
                            <h5 className='expertHeaderSmall'>I,M EXPERT ON</h5>
                            <h2 className='mainHeader'>Let,s Work Together</h2>
                            <p className='skillsDescription mainContent'>Phasellus accumsan scelerisque dolor, quis mattis justo bibendum non. Nulla sollicitudin turpis in elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
                            <div className='btn'><a href='#' className='portfolioBtn'>Hire Me</a></div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='skillRatings'>
                            <div className='skillBar'>
                                <p>React.js</p>
                                <div className='outerBar'>
                                    <div className='innerBar'>
                                        <div className='skillCount'>80%</div>
                                    </div>    
                                </div>    
                            </div>
                            <div className='skillBar'>
                                <p>GraphQL</p>
                                <div className='outerBar'>
                                    <div className='innerBar'>
                                        <div className='skillCount'>80%</div>
                                    </div>    
                                </div>      
                            </div> 
                            <div className='skillBar'>
                                <p>Javascript</p>
                                <div className='outerBar'>
                                    <div className='innerBar'>
                                        <div className='skillCount'>80%</div>
                                    </div>    
                                </div>     
                            </div> 
                            <div className='skillBar'>
                                <p>Git</p>
                                <div className='outerBar'>
                                    <div className='innerBar'>
                                        <div className='skillCount'>80%</div>
                                    </div>    
                                </div>  
                            </div> 
                            <div className='skillBar'>
                                <p>Node.js</p>
                                <div className='outerBar'>
                                    <div className='innerBar'>
                                        <div className='skillCount'>80%</div>
                                    </div>    
                                </div>  
                            </div>        
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
