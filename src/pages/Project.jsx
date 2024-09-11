import React from 'react'
import ProjectList from '../components/ProjectList'

function Project() {
  return (
    <div className='wrapper'>
        <div className="project_con mt-40 px-4">
            <div className="text-center mb-10">
                <h2 className="font-bold text-4xl uppercase text-center">Projects</h2>
            </div>
            <ProjectList />
        </div>
    </div>
  )
}

export default Project