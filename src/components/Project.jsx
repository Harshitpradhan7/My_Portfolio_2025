import React from 'react'
import projects from './ExtraComps/ProjectData';
import Cards from './ExtraComps/Cards';

const Project = () => {

    return (
        <div className='bg-gradient-to-br from-gray-900 to-black text-white min-h-screen w-full'>
            <h1 className=' text-center text-5xl text-gray-200 font-bold p-10 '>Projects</h1>
            <div className='flex flex-wrap justify-center'>
                {
                    projects.map((project, idx) => (
                        <Cards
                            key={idx}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            github={project.github}
                            demo={project.demo} />
                    ))}
            </div>
        </div>
    )
}

export default Project
