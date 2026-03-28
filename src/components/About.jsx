import about from '../assets/about.jpg'
import {ABOUT_TEXT} from "../constants"
import { motion } from 'motion/react'
const container = (delay)=> ({
  hidden:{ x: -100 , opacity : 0 },
   visible: {
    x:0,
    opacity:1,
    transition : {duration:0.5,delay},
   },
})

export default function About() {
  return (
  
    <div className="border-b border-neutral-900 pb-4">
  <h2 className="my-20 text-4xl text-center">About</h2>

  <div className="flex items-center justify-center gap-10 pt-5">
    
    <div className="max-w-xl">
      < motion.h4
       whileInView={{opacity:1 , x:0}}
   initial ={{ opacity:1 , x:-100}}
   transition={{ duration:0.5}}
       className="p-4 tracking-tight leading-relaxed">
        {ABOUT_TEXT}
      </motion.h4>
    </div>

    <div className="w-[200px] h-[200px] rounded-md overflow-hidden">
      < motion.img 
   whileInView={{opacity:1 , x:0}}
   initial ={{ opacity:1 , x:100}}
   transition={{ duration:0.5}}
        src={about} 
        alt="about" 
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</div>
  )
}
