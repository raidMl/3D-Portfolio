import { motion } from "framer-motion";
import React, { useState } from "react";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import PcCanvas from "./canvas/pc";

const Hero = () => {
  const [active, setActive] = useState(1.5)
  // const canvasRef = useRef(null)


  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Raid</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I'm a Full Stack Developer  <br className='sm:block hidden' />
          using Mern stack          </p>
          {/* <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
      " style={{zIndex:"100",marginTop:"20px"}} onClick={()=>active==1?setActive(3):setActive(1)}
      // ref={canvasRef}
      >
  zoom
</button>  */}
<button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
      " style={{marginTop:"20px",position:"absolute"}}  className="ResumeDownload"
      // ref={canvasRef}
      // onClick={()=>window.open(https:"//drive.google.com/file/d/1Rn83-kn6PE_cz5YgJ07qCWPepeVbnPsy/view?usp=sharing")}
   onClick={()=>window.open("https://drive.google.com/file/d/1Rn83-kn6PE_cz5YgJ07qCWPepeVbnPsy/view?usp=sharing")}
   >
Resume</button>  
        </div>
      </div>

   <PcCanvas style={{zIndex:'99'}} active={active} setActive={setActive}  />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;