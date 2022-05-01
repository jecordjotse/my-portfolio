import React from 'react'
import { Angular, BeanStalk, CSS3, Firebase, GCP, HTML5, JS, MongoDB, NextJS, NodeJS, PHP, ReactJS } from '../../svg'
import { Skills, SkillsMainWrap, SkillsWrap, TitleWrap } from './homeSkillsStyles'
import SkillItem from './skillItemV2'

const HoemSkills = () => {
  return (
  <SkillsMainWrap>
    <SkillsWrap>
      <Skills>
        <h3>The Tools and technology stack</h3>
        <p>As a developer, there are languages that I got into programming with, ranging from C/C++ to Java and then to PHP/Python. These are the languages and tech stacks/frameworks I work with within my development process.</p>
        <div style={{display:"grid", placeContent:"space-between"}}>
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