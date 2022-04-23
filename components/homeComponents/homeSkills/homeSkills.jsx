import React from 'react'
import { Skills, SkillsMainWrap, SkillsWrap, TitleWrap } from './homeSkillsStyles'
import SkillItem from './skillItem'

const HoemSkills = () => {
  return (
  <SkillsMainWrap>
    <SkillsWrap>
      <TitleWrap><h2>My Skills</h2></TitleWrap>
      <Skills>
        <p>I am an electrical engineer and a software developer withover 4 years experience as a fullstack developer. I love MCU and I play the guitar. I also participate in kaggle competitions (very rarely). My dream is to build a fully automated house with an AI house keeper</p>
        <SkillItem skill="Software Development" percent="97" />
        <SkillItem skill="Electrical Circuit Design" percent="89" />
      </Skills>
    </SkillsWrap>
  </SkillsMainWrap>
  )
}

export default HoemSkills