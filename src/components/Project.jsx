import React from 'react'
import { PROJECTS } from '../constants'

export default function Project() {
  return (
    <div className='border-b border-neutral-900 pb-4' >
        <h1  className=' my-20 text-center text-4xl'>project </h1>
         <div> {PROJECTS.map((Project,index) =>(
            <div key={index} className=' mb-8 flex flex-wrap lg:justify-center'> 
            <div className=' w-full lg:w-1/4'>
             <img src={Project.image}  
                    width={150}
                    height={150}
                alt={Project.title} 
                className='mb-6 rounded '/>
            </div> 
               <div className=' w-full max-w-xl lg:w-3/4'> 
               <h6 className='mb-2 font-semibold'>
                {Project.title}
               </h6>
               <p className='mb-4 text-neutral-400'>{Project.description} </p>
               {Project.technologies.map((tech, index) =>(
                <span key={index} className='mr-2 rounded px-2 py-1 text-sm font-medium   '>{tech} </span>
               ) )}

               </div>
         
            </div>
            
         ))} 
         </div>
    </div>
  )
}
