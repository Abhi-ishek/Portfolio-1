import React from 'react'
import { motion } from "framer-motion";
import { PROJECTS } from '../constants'

export default function Project() {
  return (
   
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      
      <div>
        {PROJECTS.map((Project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            
            {/* Image sliding in from the left */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full lg:w-1/4"
            >
              <img
                src={Project.image}
                width={150}
                height={150}
                alt={Project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            
            {/* Content sliding in from the right */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{Project.title}</h6>
              <p className="mb-4 text-neutral-400">{Project.description}</p>
              
              {/* Technology tags */}
              <div className="flex flex-wrap gap-2">
                {Project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            
          </div>
        ))}
      </div>
    </div>
  )
}
