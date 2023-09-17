import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Lambo from "./Lambo"

const WebDesign = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={-1}>
            <Lambo />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}

export default WebDesign