import React from 'react'
import resumeContent from '../utils/resumeContent.json'

const  Projects= () => {
    const { projects, summary } = resumeContent;
    return (
        <div className='mt-16 lg:p-14 p-4 bg-green-800'>
            <h1 className="text-4xl font-bold py-2 rounded-md w-2 text-str text-center text-stroke-2 mb-8 text-white mx-2" >Projects</h1>
            {projects.map((project) => {
                return (
                    <div className='z-0 border border-gray-200 p-3 my-4 mx-2 rounded-md bg-lime-100 hover:shadow-md hover:shadow-gray-900 transform hover:scale-110 transition-transform duration-300'>
                        <h1 className='bg-white border border-black p-1 rounded-sm inline-block font-mono font-black my-2'>{project.title}</h1>
                        <p className='font-bold text-md'>{project.description}</p>
                        <div className='flex items-center justify-between'>
                        <ul className='flex'>
                            {project.technologies.map((tech) => <li className='pr-1 border border-black mr-2 my-2 text-center p-1 rounded-sm text-sm'>{tech}</li>)}
                        </ul>
                        <a className='inline-block' href={project.link} target='_blank' rel="noreferrer"> Link<img className="ml-2 h-4 w-4 inline-block" alt="projectlink" src="https://i.imgur.com/LPziCTQ.png" title="source: imgur.com" /></a>
                        </div>
                    </div>

                )
            })}

        </div>
    )
}

export default Projects
