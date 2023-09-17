import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1341px) {
    height: 100vh;
    width:100%;
  }
  
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 1341px) {
    flex: 1;
    align-items: center;
    margin-top:10%;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 3rem;

  @media only screen and (max-width: 1341px) {
    text-align: center;
    font-size:2rem;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 1341px) {
    width: 100%;
  }
`

function HomeFeed() {
  return (
    <Section id="home">
      <Navbar />
      <div className="home-container">
        <Left>
          <Title>Hi!<br/>How are you today?</Title>
          <div className="home-list">
            <a href="https://drive.google.com/file/d/1vr6YiUq0RzHsBRxvgMZmVztiXJ9IWqEa/view?usp=sharing" className="home-button focus:outline-none focus:ring-2 focus:ring-offset-2" download>Resume</a>
            <a href="#middle" className="home-link">Learn More</a>
          </div>
        </Left>
        <Right>
        <div className="home-canvas">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2}>
                <MeshDistortMaterial
                  color="rgb(153, 0, 0)"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          </div>
          <div className="home-image"></div>
        </Right>
      </div>
    </Section>
  );
}
export default HomeFeed;
