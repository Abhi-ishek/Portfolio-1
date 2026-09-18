// import React from 'react'
// import {RiReactjsLine} from "react-icons/ri"
// import {TbBrandNextjs} from "react-icons/tb"
// import {SiMongodb} from "react-icons/si"
// import { FaNode } from "react-icons/fa";
// import { SiExpress } from "react-icons/si";
// import { animate, motion } from 'motion/react';
// // import { reverse } from 'dns';

// const iconVarient = (duration)=>({
//         initial:{y:-10},
//         animate:{
//                 y:[10,-10],
//                 transition:{
//                         duration: duration,
//                         ease : "linear",
//                         repeat: Infinity,
//                         repeatType:" reverse",
//                 }
//         },
// })


// export default function Technology() {
//   return (
//     <>
//         <div  className='pb-24'>
// <h2 className=' my-20 text-center text-4xl'> tecnology</h2>
//        <motion.div
//        whileInView={{opacity:1 , x:0}}
//    initial ={{ opacity:1 , x:-100}}
//    transition={{ duration:0.7}}
//         className=' flex flex-wrap items-center justify-center gap-4'>

//         <motion.div
//         variants={iconVarient(2.3)}
//         initial="initial"
//         animate="animate"
//          className=' rounded-2xl border-2 p-4'>
// <RiReactjsLine className=' text-5xl text-cyan-500'/>
//              </motion.div>

//         < motion.div
//          variants={iconVarient(2.7)}
//         initial="initial"
//         animate="animate"
//          className=' rounded-2xl border-2 p-4'>
// <TbBrandNextjs className=' text-5xl text-green-500'/>
//              </motion.div>

//         < motion.div
//          variants={iconVarient(2.)}
//         initial="initial"
//         animate="animate"
//          className=' rounded-2xl border-2 p-4'>
// <SiMongodb className=' text-5xl text-green-500'/>
//              </motion.div>

//         <motion.div
//          variants={iconVarient(3)}
//         initial="initial"
//         animate="animate"
//          className=' rounded-2xl border-2 p-4'>
// < FaNode className=' text-5xl text-green-500'/>
//              </motion.div>

//         < motion.div
//          variants={iconVarient(4)}
//         initial="initial"
//         animate="animate"
//          className=' rounded-2xl border-2 p-4'>
// <FaNode className=' text-5xl text-cyan-500'/>
//              </motion.div>

//         <motion.div
//          variants={iconVarient(5)}
//         initial="initial"
//         animate="animate"
//          className=' rounded-2xl border-2 p-4'>
// <SiExpress className=' text-5xl text-black-500'/>
//              </motion.div>



//         </ motion.div>

//         </div>
        

//     </>
//   )
// }
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";

// Ensure your variant function looks something like this for smooth, infinite floating:
const iconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "easeInOut", // easeInOut makes the direction change fluid, not jerky
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function Technology() {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technology</h2>
      
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }} // Changed to 0 so it fades in smoothly
        transition={{ 
          duration: 1.2, // Slightly longer duration
          ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for a buttery smooth slide
        }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariant(2.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 p-4"
        >
          <RiReactjsLine className="text-5xl text-cyan-500" />
        </motion.div>

        <motion.div
          variants={iconVariant(2.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 p-4"
        >
          <TbBrandNextjs className="text-5xl text-green-500" />
        </motion.div>

        {/* Fixed syntax error: changed 2. to 2.5 */}
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 p-4"
        >
          <SiMongodb className="text-5xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 p-4"
        >
          <FaNode className="text-5xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariant(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 p-4"
        >
          <FaNode className="text-5xl text-cyan-500" />
        </motion.div>

        <motion.div
          variants={iconVariant(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 p-4"
        >
          <SiExpress className="text-5xl text-black" />
        </motion.div>
      </motion.div>
    </div>
  );
}