import React from 'react'
import { Skills, SkillsMainWrap, SkillsWrap, TitleWrap } from './homeSkillsStyles'
import SkillItem from './skillItem'

const HoemSkills = () => {
  return (
  <SkillsMainWrap>
    <SkillsWrap>
      <TitleWrap><h2>My Skills</h2></TitleWrap>
      <Skills>
        <p>The happiness of your life depends upon the quality of your thoughts: therefore, guard accordingly, and take care that you entertain no notions unsuitable to virtue and reasonable nature</p>
        <SkillItem skill="Software Development" percent="97" />
        <SkillItem skill="Electrical Circuit Design" percent="89" />
      </Skills>
    </SkillsWrap>
  </SkillsMainWrap>
  )
}

export default HoemSkills