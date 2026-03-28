import { HERO_CONTENT } from "../constants"
import profile from "../assets/kevinRushProfile.jpg"
import { motion } from "motion/react"
const container = (delay)=> ({
  hidden:{ x: -100 , opacity : 0 },
   visible: {
    x:0,
    opacity:1,
    transition : {duration:0.5,delay},
   },
})

export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-13 lg:mb-32">
  <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-20">

    {/* TEXT SECTION */}
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
      
      < motion.h1
      variants={container(0)}
      initial="hidden"
      animate="visible"
        className="text-5xl lg:text-7xl font-thin tracking-tight mt-10 lg:mt-16">
        Abhishek prajapati
      </motion.h1>

      <motion.span 
      variants={container(0.3)}
      initial="hidden"
      animate="visible"
      className="mt-4 text-lg lg:text-2xl bg-gradient-to-r from-pink-400 via-slate-400 to-purple-500 bg-clip-text text-transparent tracking-wide">
        Front End Developer
      </motion.span>

      <motion.p
      variants={container(0.5)}
      initial="hidden"
      animate="visible"
       className="mt-6 max-w-xl text-neutral-400 leading-relaxed">
        {HERO_CONTENT}
      </motion.p>
    </div>

    {/* IMAGE SECTION */}
    <div className="w-[220px] h-[220px] lg:w-[300px] lg:h-[300px] rounded-2xl overflow-hidden shadow-lg border border-neutral-700">
      <motion.img 
     initial={{x:100, opacity: 0}}
     animate={{x:0 , opacity:1}}
     transition={{duration:1,delay:1.3}}
        src={profile} 
        alt="profile" 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>

  </div>
</div>
    // <div className="  border border-red-900  lg:mb-35">
    //     <div className="   flex flex-wrap">
    //         <div className="  flex ">
    //         <div className=" border-r-emerald-800   pl-8 flex flex-col items-center lg:items-start">
    //             <h1 className=" ml-3 pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl"> Abhi..</h1>
    //             <span className="  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text    tracking-tight  text-transparent">  Front end developer</span>
    //         <p className="my-2 max-w-xl py-6 font-light tracking-tighter"> 
    //          {HERO_CONTENT}
    //         </p>
    //         </div>
    //         <div className=" w-50 h-50   p-10 rounded-lg  ">
    //           <img src={profile} alt="" />

    //         </div>

    //         </div>
         
         
      
       
    //     </div>

    // </div>
  )
}
