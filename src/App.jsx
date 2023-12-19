import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'
import ReactLoader from './components/ReactLoader'
// import Mac from './components/macbook/Mac'
const App=()=> {
  // const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
      <div className="relative z-0 bg-primary">
       <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">

        <Navbar/>


        <Hero/>
       </div> 
        <About/>
        <Experience/>
        <Tech/>
        <div style={{height:"100vh" ,width:"auto"}}>        <ReactLoader/></div>
        {/* <div style={{height:"100vh" ,width:"auto"}}>        <Mac/></div> */}


        <Works/>
        <Feedbacks/>
         <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>

         </div>
      </div>
    </BrowserRouter>
    
       
    </>
  )
}

export default App
