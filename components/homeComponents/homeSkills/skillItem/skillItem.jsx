import React from 'react'
import { SkillItemMainWrap, SkillItemWrap } from './skillStyles'

const SkillItem = ({skill, percent}) => {
  return (
      <SkillItemMainWrap>
          <SkillItemWrap percent={percent} >{skill}</SkillItemWrap>
      </SkillItemMainWrap>
  )
}

export default SkillItem