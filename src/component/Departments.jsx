import React from "react";
import styled from "styled-components";
import DepartMentCard from "./DepartMentCard";
import { departobj } from "../configsFiles/Departments.config";

import { motion, useScroll, useTransform } from "framer-motion";

const DepartmentContainer = styled.div`
  /* display: flex;
gap: 30px;
width: 100vw;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap; */

  width: 100vw;
  margin: 0 auto;
  display: grid;
  margin-top: 50px;
  place-items: center;
  min-height: 100px;

  gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const text  = {
  offscreen:{ x:-200,opacity:0},
    onscreen:{
      x:0,
      opacity:1,
      transition:{
        type:'spring',
        bounce:0.4,
        duration:1
        
      }
    },
}
function Departments() {
  return (
    <>
      <motion.h1   
          initial={{y:100,opacity:0,scale:0.1}}
          
          whileInView={{y:0,opacity:1,scale:1}}
          transition={{duration:1}}
          
          viewport={{once:false,amount:1}}


      
  

    className="DeptHead">departments</motion.h1>
      <DepartmentContainer>
        {departobj.map((data) => {
          return <DepartMentCard key={data.title} {...data} />

        })}
      </DepartmentContainer>
    </>
  );
}

export default Departments;
