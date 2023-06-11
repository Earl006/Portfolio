import React from 'react'
import ProjectItem from './ProjectItem'
import blastImg from '../assets/blast.png';
import bmwImg from '../assets/bmw.png';
import portfolioImg from '../assets/portfolio.png';
import schoolImg from '../assets/java.png';

function Projects() {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
       <h1 className="text-center text-3xl mt-8 text-gray-800">Projects</h1> 
       <div className="h-px w-10 bg-yellow-500 mx-auto mt-4 mb-8" />

       <p className="text-base md:text-lg lg:text-xl text-justify text-gray-700 md:text-center ml-4 py-8">
        Overtime, these are some of the projects I have undertaken.
        I will keep on updating on the site as I progress. 
       </p>
         <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={blastImg} title='Blast App'/>
            <ProjectItem img={bmwImg} title='Rightmen App'/>
            <ProjectItem img={portfolioImg} title='Portfolio App'/>
            <ProjectItem img={schoolImg} title='School App'/>
         </div>
        </div>
  )
}

export default Projects