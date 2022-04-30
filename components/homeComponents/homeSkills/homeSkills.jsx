import React from 'react'
import { Skills, SkillsMainWrap, SkillsWrap, TitleWrap } from './homeSkillsStyles'
import SkillItem from './skillItem'

const HoemSkills = () => {
  return (
  <SkillsMainWrap>
    <SkillsWrap>
      <TitleWrap><h2>My Skills</h2></TitleWrap>
      <Skills>
        <p>I am an electrical engineer and a software developer with over 4 years experience as a fullstack developer. I love MCU and I play the guitar. I also participate in kaggle competitions (very rarely). My dream is to build a fully automated house with an AI house keeper</p>
        <div style={{display:"flex"}}>
        <ul style={{flex:"1 1 auto"}}>
          <li>Nodejs</li>
          <li>PHP/MySQL</li>
          <li>Google Cloud (GAE, GCE, Marketplace, functions)</li>
          <li>AWS Elastic Beanstalk</li>
          <li>NoSQL (MongoDB, firestore)</li>
        </ul>
        <ul style={{flex:"1 1 auto"}}>
          <li>HTML5/CSS</li>
          <li>JS</li>
          <li>React/Nextjs</li>
          <li>Angularjs</li>
          <li>Wordpress</li>
        </ul>
        </div>
      </Skills>
    </SkillsWrap>
  </SkillsMainWrap>
  )
}

export default HoemSkills