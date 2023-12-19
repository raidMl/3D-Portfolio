import { Suspense } from "react" 
import { Canvas } from "@react-three/fiber" //for 3d 
import { OrbitControls,Preload,useGLTF } from "@react-three/drei"
import CanvasLoader from '../Loader'

const Pc = () => {
  const pc = useGLTF("./pc/ASUS Laptop.gltf");

  // const earth=useGLTF('./planet/scene.gltf')
  return (
    <mesh>
         <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 150, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
    <primitive object={pc.scene}
    scale={5.5}
    position-y={-7}
    rotation-y={0}
    rotation-z={-0.1}
    
    />
    </mesh>
  )
}

const PcCanvas=()=>{
  return(
    <Canvas
    
    shadows frameloop="demand"
    gl={{preserveDrawingBuffer:true}}
    camera={{fov:45,
    near:0.1,
  far:200,
position:[-40,3,6]}}

    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
        autoRotate
        // onPointerEnter={Suspense}
        enableZoom={true}
        maxPolarAngle={Math.PI}
        minPolarAngle={0}
        />
        <Pc/>
      </Suspense>

    </Canvas>
  )
}

export default PcCanvas