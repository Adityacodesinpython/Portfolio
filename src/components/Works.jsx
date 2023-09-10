import React, { useState } from "react";
import styled from "styled-components";
import WebDesign from "./WebDesign";
import ReactDesign from "./ReactDesign";

const data = ["Web Design", "React", "Backend Dev", "Javascript", "Animations"];

const Section = styled.div`
  height: auto;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

  
`;
const Container = styled.div`
  height:100%;
  width: 100%;
  padding:0 5%;
  display: flex;
  justify-content: space-between;
`;

const List = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 1rem;
  @media only screen and (max-width:950px){
    margin:auto;

  }
`;
const ListItem = styled.a`
  curser: pointer;
  font-size: 90px;
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
    font-size: 70px;
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
  const [work, setWork] = useState("Web Design");

  return (
    <Section>
      <Container>
        <div className="works_title">
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={()=>setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </div>
        <Right>
          {work === "Web Design" ? (
            <WebDesign />
          ) : (
            <ReactDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
}

export default Works;
