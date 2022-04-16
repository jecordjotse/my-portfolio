import React from 'react'
import { PrjectsWrap, ProjectItem, ProjectLineItem, TitleWrap } from './homeProjectsStyles'

const HomeProjects = () => {
  return (
      <PrjectsWrap>
          <TitleWrap>
              <h2>My Projects</h2>
          </TitleWrap>
          <>
            <ProjectLineItem itemCnt={3}>
                <ProjectItem itemCnt={3}><h3>Project 1</h3></ProjectItem>
                <ProjectItem itemCnt={3}><h3>Project 2</h3></ProjectItem>
                <ProjectItem itemCnt={3}><h3>Project 3</h3></ProjectItem>
            </ProjectLineItem>
            <ProjectLineItem itemCnt={2}>
                <ProjectItem itemCnt={2}><h3>Project 4</h3></ProjectItem>
                <ProjectItem itemCnt={2}><h3>Project 5</h3></ProjectItem>
            </ProjectLineItem>
            <ProjectLineItem itemCnt={4}>
                <ProjectItem itemCnt={4}><h3>Project 6</h3></ProjectItem>
                <ProjectItem itemCnt={4}><h3>Project 7</h3></ProjectItem>
                <ProjectItem itemCnt={4}><h3>Project 8</h3></ProjectItem>
                <ProjectItem itemCnt={4}><h3>Project 9</h3></ProjectItem>
            </ProjectLineItem>
            <ProjectLineItem itemCnt={2}>
                <ProjectItem itemCnt={2}><h3>Project 10</h3></ProjectItem>
                <ProjectItem itemCnt={2}><h3>Project 11</h3></ProjectItem>
            </ProjectLineItem>
          </>
      </PrjectsWrap>
  )
}

export default HomeProjects