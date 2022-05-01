import React from 'react'
import { Angular, BeanStalk, CSS3, Firebase, GCP, HTML5, JS, MongoDB, NextJS, NodeJS, PHP, ReactJS } from '../../svg'
import { Skills, SkillsMainWrap, SkillsWrap, TitleWrap } from './homeSkillsStyles'
import SkillItem from './skillItemV2'

const HoemSkills = () => {
  return (
  <SkillsMainWrap>
    <SkillsWrap>
      <TitleWrap><h2>My Skills</h2></TitleWrap>
      <Skills>
        <p>I am an electrical engineer and a software developer with over 4 years experience as a fullstack developer. I love MCU and I play the guitar. I also participate in kaggle competitions (very rarely). My dream is to build a fully automated house with an AI house keeper</p>
        <div style={{display:"grid"}}>
          <SkillItem><HTML5/></SkillItem>
          <SkillItem><CSS3/></SkillItem>
          <SkillItem><JS/></SkillItem>
          <SkillItem><PHP/></SkillItem>
          <SkillItem><GCP/></SkillItem>
          <SkillItem><BeanStalk/></SkillItem>
          <SkillItem><Firebase/></SkillItem>
          <SkillItem><MongoDB/></SkillItem>
          <SkillItem><NodeJS/></SkillItem>
          <SkillItem><ReactJS/></SkillItem>
          <SkillItem><NextJS/></SkillItem>
          <SkillItem><Angular/></SkillItem>
        </div>
      </Skills>
    </SkillsWrap>
  </SkillsMainWrap>
  )
}

export default HoemSkills