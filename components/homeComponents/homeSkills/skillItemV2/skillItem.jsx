import React from 'react'
import { SkillSVGMainWrap } from './skillStyles'

const SkillItem = (props) => {
  return (
      <SkillSVGMainWrap {...props}>
        {props.children}
      </SkillSVGMainWrap>
  )
}

export default SkillItem