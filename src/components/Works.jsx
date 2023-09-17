import React, { useState } from "react";
import styled from "styled-components";
import WebDesign from "./WebDesign";
import ReactDesign from "./ReactDesign";

const data = ["Guitar", "Casio", "Reading", "Lorem Ipsum", "Lorem Ipsumm"];

const Section = styled.div`
  height: auto;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  height:100%;
  width: 100%;
  padding:5%;
  display: flex;
  justify-content: space-between;
`;

const List = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.a`
  curser: pointer;
  font-size: 70px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover::after {
    width: 100%;
    transition: width 0.4s linear;
  }
  @media only screen and (max-width:1600px){
    font-size: 40px;
  }
  @media only screen and (max-width:500px){
    font-size: 20px;
  }
`;
const Right = styled.div`
  flex: 1;
  @media only screen and (max-width:1600px){
    width:50%;
  }
  @media only screen and (max-width:950px){
    display:none;
  }
`;

function Works() {
  const [work, setWork] = useState("Guitar");

  return (
    <Section>
      <Container>
        <div className="works_title pl-10">
          <List>
          <h1 className="text-white font-bold text-5xl mb-6">My Hobbies</h1>

            {data.map((item) => (
              <ListItem key={item} text={item} onClick={()=>setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </div>
        <Right>
          {work === "Guitar" ? (
            <ReactDesign />
          ) : (
            <WebDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
}

export default Works;
