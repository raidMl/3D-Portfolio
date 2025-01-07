import { useState,useRef }  from 'react'   
import {motion} from 'framer-motion'
import { styles } from '../styles'  
import {EarthCanvas} from './canvas'
import { slideIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const Contact = () => {
  const formRef=useRef();
  const [form,setForm]=useState({
    name:"",
    email:"",
    message:""
  })
  const [loading,setLoading]=useState(false)
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]: e.target.value  })

  }
  const sendEmail=(e)=>{
     e.preventDefault();
     setLoading(true)
      fetch('https://r-design-backend.vercel.app/api/message',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email:form.email,message:"name is: "+form.name+
          " message is: "+form.message})
      }).then(res=>res.json())
      .then(data=>{
        console.log(data)
        alert("Message sent successfully")
        setLoading(false)
        setForm({
          name:"",
          email:"",
          message:""
        })
        formRef.current.reset()
      }).catch(err=>{
        console.log(err)
        setLoading(false)
        alert("Message failed to send")
      })
  }

   
  
  
  return (
    <div id='contact' className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left','tween',0.2,1)}
       className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form  ref={formRef} onSubmit={sendEmail} className='mt-12 flex flex-col gap-8'>
<label htmlFor="" className='flex flex-col'>
  <span className='text-white font-medium mb-4'> Name</span>
 <input type="text" name='name' value={form.name} onChange={handleChange}
 placeholder='Your name' className='bg-tertiary py-4 px-6 placeholder:text
 text-white rounded-lg outlined-none border-none font-medium' />
</label>
<label htmlFor="" className='flex flex-col'>
  <span className='text-white font-medium mb-4'> Email</span>
 <input type="email" name='email' value={form.email} onChange={handleChange}
 placeholder='Your email' className='bg-tertiary py-4 px-6 placeholder:text
 text-white rounded-lg outlined-none border-none font-medium' />
</label>
<label htmlFor="" className='flex flex-col'>
  <span className='text-white font-medium mb-4'> Message</span>
 <input type="text" name='message' value={form.message} onChange={handleChange}
 placeholder='Your message' className='bg-tertiary py-4 px-6 placeholder:text
 text-white rounded-lg outlined-none border-none font-medium' />
</label>
<button
type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
  {loading?"Sending...":'Send'}
</button>
        </form>
       </motion.div>

        <motion.div  variants={slideIn('right','tween',0.5,2)}
         className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
<EarthCanvas/>
       </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")