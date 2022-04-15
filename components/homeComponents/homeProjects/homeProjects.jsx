import React from 'react'
import { PrjectsWrap, ProjectLineItem, TitleWrap } from './homeProjectsStyles'

const HomeProjects = () => {
  return (
      <PrjectsWrap>
          <TitleWrap>
              <h2>My Projects</h2>
          </TitleWrap>
          <>
            <ProjectLineItem>
                <div>Project 1</div>
                <div>Project 2</div>
                <div>Project 3</div>
            </ProjectLineItem>
            <ProjectLineItem>
                <div>Project 4</div>
                <div>Project 5</div>
            </ProjectLineItem>
            <ProjectLineItem>
                <div>Project 6</div>
                <div>Project 7</div>
                <div>Project 8</div>
                <div>Project 9</div>
            </ProjectLineItem>
            <ProjectLineItem>
                <div>Project 10</div>
                <div>Project 11</div>
            </ProjectLineItem>
          </>
      </PrjectsWrap>
  )
}

export default HomeProjects