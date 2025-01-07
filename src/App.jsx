import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'
// use lazy loading

// const ReactLoader = React.lazy(() => import('./components/ReactLoader'))
 


import ReactLoader from './components/ReactLoader'
const App=()=> {

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
