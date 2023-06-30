import React, {useState,useRef,Suspense} from 'react'
import { Canvas,useFrame } from '@react-three/fiber'
import { Points,PointMaterial,Preload } from '@react-three/drei'
import * as random from 'math/random/dist/'
const Stars = () => {
  return (
    <div>Stars</div>
  )
}

const starsCanvas=()=>{return(
<div

className='w-full h-full absolute inset-0 z-[-1]'>
  <Canvas>
    
  </Canvas>
</div>
)}

export default Stars