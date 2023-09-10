import React from 'react'
import Reactlogo from "./Reactlogo"
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const ReactDesign = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={1}>
            <Reactlogo />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}

export default ReactDesign