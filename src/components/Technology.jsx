import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import {TbBrandNextjs} from "react-icons/tb"
import {SiMongodb} from "react-icons/si"
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { animate, motion } from 'motion/react';
// import { reverse } from 'dns';

const iconVarient = (duration)=>({
        initial:{y:-10},
        animate:{
                y:[10,-10],
                transition:{
                        duration: duration,
                        ease : "linear",
                        repeat: Infinity,
                        repeatType:" reverse",
                }
        },
})


export default function Technology() {
  return (
    <>
        <div  className='pb-24'>
<h2 className=' my-20 text-center text-4xl'> tecnology</h2>
       <motion.div
       whileInView={{opacity:1 , x:0}}
   initial ={{ opacity:1 , x:-100}}
   transition={{ duration:0.7}}
        className=' flex flex-wrap items-center justify-center gap-4'>

        <motion.div
        variants={iconVarient(2.3)}
        initial="initial"
        animate="animate"
         className=' rounded-2xl border-2 p-4'>
<RiReactjsLine className=' text-5xl text-cyan-500'/>
             </motion.div>

        < motion.div
         variants={iconVarient(2.7)}
        initial="initial"
        animate="animate"
         className=' rounded-2xl border-2 p-4'>
<TbBrandNextjs className=' text-5xl text-green-500'/>
             </motion.div>

        < motion.div
         variants={iconVarient(2.)}
        initial="initial"
        animate="animate"
         className=' rounded-2xl border-2 p-4'>
<SiMongodb className=' text-5xl text-green-500'/>
             </motion.div>

        <motion.div
         variants={iconVarient(3)}
        initial="initial"
        animate="animate"
         className=' rounded-2xl border-2 p-4'>
< FaNode className=' text-5xl text-green-500'/>
             </motion.div>

        < motion.div
         variants={iconVarient(4)}
        initial="initial"
        animate="animate"
         className=' rounded-2xl border-2 p-4'>
<FaNode className=' text-5xl text-cyan-500'/>
             </motion.div>

        <motion.div
         variants={iconVarient(5)}
        initial="initial"
        animate="animate"
         className=' rounded-2xl border-2 p-4'>
<SiExpress className=' text-5xl text-black-500'/>
             </motion.div>



        </ motion.div>

        </div>
        

    </>
  )
}
