import React from 'react'
import {Tilt} from 'react-tilt'
import {motion } from 'framer-motion'
import {styles} from '../styles'
import {github,weburlimg} from '../assets'
import {SectionWrapper} from '../hoc'
import {projects} from '../constants'
import { fadeIn,textVariant } from '../utils/motion'

const Works = () => {
  const ProjectCard= ({index,name,description,tags,image,source_code_link,weburl})=>{
    
    return(
<motion.div variants={fadeIn("up","spring",index * 0.5 , 0.75)} className="bg-tertiary p-5 rounded-2xl sm:w-[280px] md:w-[300px]  w-full  sm:mt-5 ">
<Tilt  options={{ max: 45, scale: 1, speed: 450 }}>
<div className=" md:h-[230px]">
  <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>
  <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
    <div onClick={()=>window.open(source_code_link,"_blank")}  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
<img src={github} alt="github" className='w-1/2 h-1/2' object-contain />
    </div>

    {/* //for url  */}
    <div onClick={()=>window.open(weburl,"_blank")}  className='black-gradient m-15 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
<img src={weburlimg} alt="link" className='w-1/2 h-1/2 rounded-full m-3' object-contain />
    </div>
  </div>
</div>

<div className="mt-5">
  <h3 className='font-bold text-[24px]'>{name}</h3>
  <p className='text-secondary mt-2 text-[14px]'>{description}</p>
</div>
{/* //this is for tags */}
<div className="mt-4 flex flext-wrap gap-2">
  {tags.map(tag=>(
   <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p> 
  )

  )}

</div>
</Tilt>
</motion.div>
    )
  }
  return ( 
  
<div id="work">

  <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>

      </motion.div>
 <div className="w-full flex">
 <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
     >
      As a full stack web developer, my passion lies in creating seamless and user-friendly digital experiences. With a strong foundation in both front-end and back-end development, I have the expertise to bring ideas to life. I thrive in collaborative environments, working closely with designers and clients to understand their vision and translate it into functional and visually appealing websites and web applications. My attention to detail and commitment to delivering high-quality code ensures that each project I undertake is executed with precision and efficiency. With a diverse skill set that includes HTML, CSS, JavaScript, Python, and various frameworks, I am confident in my ability to tackle complex challenges and deliver outstanding results. Let my portfolio speak for itself as a testament to my dedication and expertise in the field of full stack web development.

      </motion.p>
      </div>

      <div className="mt-20  flex flex-wrap  sm:gap-[10px] xl:gap-[30px] justify-center ">
        {projects.map((project,index)=>(
          <ProjectCard style={{opacity:1}}
          key={`project-${index}`}
          index={index}
          {...project}
          
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Works,'');