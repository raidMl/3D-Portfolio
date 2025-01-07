import React from 'react';
import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../constants';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
const Experience = () => {
  const ExperienceCard =({experience})=>(
    <VerticalTimelineElement
  contentStyle={{background:"#1D1836",color:'#fff'}}
  contentArrowStyle={{borderRight:'7px solid #232631'}}
  date={experience.date}
  iconStyle={{background:experience.iconBg}}
  icon={
    <div className='flex justify-center items-center w-full h-full'>
      <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
    </div>

  }
  >
<div><h3  className='text-white text-[24px] font-bold'>{experience.title}</h3>
<p className='font-semibold  text-secondary text-[16px]' style={{margin:0}}>{experience.company_name}</p>
{/* <p style={{color:'#94a3b8'}}>{experience.points}</p> */}
<ul className='mt-5 list-disc space-y-2'>
{experience.points.map((elem)=>(
  <li className='tracking-wider text-[14px]' key={elem} style={{color:'rgb(204, 212, 223)'}}>{elem}</li>
))}
</ul>
</div>  
</VerticalTimelineElement>

  )
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>what I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        <VerticalTimeline>
          {experiences.map((experience,index)=>(
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
              </motion.div>  

    </>
)
}

export default SectionWrapper(Experience,'Experience')