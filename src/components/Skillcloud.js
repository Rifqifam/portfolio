import * as React from 'react'
import { motion } from "framer-motion"
import { useRef } from 'react';
import Html from '../Img/skill/html 1.png'
import Cpp from '../Img/skill/cpp.png'
import Css from '../Img/skill/css.png'
import Figma from '../Img/skill/figma.png'
import Java from '../Img/skill/java.png'
import Javascript from '../Img/skill/javascript.png'
import Python from '../Img/skill/python.png'




const Skillcloud = () => {
    const constraintRef = useRef(null);

  return (
    <div className='contain'>

        <motion.div
        ref={constraintRef}
        style={{width:"89vw",height:"18vh", display:'flex',justifyContent:"space-evenly"}}>
            
              {/* html */}
              <motion.div
              drag
              dragConstraints={constraintRef}
              style={{
                width:"9.3vw",

                }}
              whileDrag={{scale:1.3}}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              ><div className='tagcloud'><motion.img src={Html} alt="" className='movimage' /></div></motion.div>

              {/* css */}
              <motion.div
              drag
              dragConstraints={constraintRef}
              style={{
                width:"9.3vw",

                }}
              whileDrag={{scale:1.3}}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              ><div className='tagcloud'><motion.img src={Css} alt="" className='movimage' /></div></motion.div>


              {/* Javascript */}
              <motion.div
              drag
              dragConstraints={constraintRef}
              style={{
                width:"9.3vw",

                }}
              whileDrag={{scale:1.3}}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              ><div className='tagcloud'><motion.img src={Javascript} alt="" className='movimage' /></div></motion.div>


              {/* python */}
              <motion.div
              drag
              dragConstraints={constraintRef}
              style={{
                width:"9.3vw",

                }}
              whileDrag={{scale:1.3}}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              ><div className='tagcloud'><motion.img src={Python} alt="" className='movimage' /></div></motion.div>


              {/* C++ */}
              <motion.div
              drag
              dragConstraints={constraintRef}
              style={{
                width:"9.3vw",

                }}
              whileDrag={{scale:1.3}}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              ><div className='tagcloud'><motion.img src={Cpp} alt="" className='movimage' /></div></motion.div>


              {/* Java */}
              <motion.div
              drag
              dragConstraints={constraintRef}
              style={{
                width:"9.3vw",

                }}
              whileDrag={{scale:1.3}}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              ><div className='tagcloud'><motion.img src={Java} alt="" className='movimage' /></div></motion.div>


              {/* Figma */}
              <motion.div
              drag
              dragConstraints={constraintRef}
              style={{
                width:"9.3vw",
                }}
              whileDrag={{scale:1.3}}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              ><div className='tagcloud'><motion.img src={Figma} alt="" className='movimage' /></div></motion.div>

       
            </motion.div>

            

            


{/* 
        <div className='tagcloud'>
        </div> */}


    </div>
  )
}

export default Skillcloud;

