import React from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, RenderTexture } from '@react-three/drei'
import {Text} from '@react-three/drei'
import Cube from './Cube'


function MiddleFeed(){

    return(
        <div className='middlefeed' >
            <div className='middle-cube'>
                <Canvas camera={{fov:25, position:[5,5,5]}}>
                    <OrbitControls enableZoom={false} autoRotate/>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[3,2,1]} />
                    <Cube />
                </Canvas>
            </div>
            <div className='aboutme'>
                <div className='profilepic'></div>
                <div className='textbox'>
                    <h1>Hi! Aditya here</h1>
                    <ul>
                        <li>A passionate Web Developer🙇‍♂️</li>
                        <li>Proficient in major Frontend languages and Frameworks from JS to React💻</li>
                        <li>Have worked with Mongodb, Express and Nodejs by building realtime useful projects.</li>
                        <li>Check out more at my github!🚀</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default MiddleFeed;