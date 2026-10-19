import React from 'react'
import {motion } from "motion/react"
import { EXPERIENCES } from '../constants'
export default function Experience() {
  return (
    <div id="experience" className="border-b border-neutral-900 pb-24 pt-8">
        <h2 className=' my-20 text-center text-4xl'>Experience</h2>
 <div>
    {EXPERIENCES.map((experience, index) =>( 
        <div key={index} className=' mb-8  pl-18 flex flex-wrap justify-center lg;justify-center'>
            <div className='w-full lg:w-1/4'>
            < motion.p 
            whileInView={{opacity:1 ,  x:0}}
             initial ={{ opacity:1 , x:-100}}
   transition={{ duration:0.5}}
            className=' mb-2 text-sm '> {experience.year} </ motion.p>
            </div>
            <div className=' w-full max-w-xl lg:w-3/4'>
            < motion.h6
              whileInView={{opacity:1 ,  x:0}}
             initial ={{ opacity:1 , x:+100}}
   transition={{ duration:0.3}}
             className=' mb-2 font-semibold'> {experience.role} - <span className='text-sm  '> {experience.company} </span>
            </motion.h6>
            < motion.p 
                 whileInView={{opacity:1 ,  x:0}}
             initial ={{ opacity:1 , x:+100}}
   transition={{ duration:0.5}}
            className=' mb-4 text-neutral-500'>{experience.description} </motion.p>
            {experience.technologies.map((tech ,index ) =>(
                <span key={index} className='mr-2 mt-2 inline-block rounded-md border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-xs font-medium text-purple-400'>{tech}</span>
            ) )}

            </div>
        </div>
    ))}
 </div>
    </div>
  )
}
