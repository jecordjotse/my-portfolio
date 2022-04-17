import React from 'react'
import { PrjectsWrap, ProjectLineItem, TitleWrap } from './homeProjectsStyles'
import ProjectItem from './projectItem';

const HomeProjects = () => {
  return (
      <PrjectsWrap>
          <TitleWrap>
              <h2>My Projects</h2>
          </TitleWrap>
          <>
            <ProjectLineItem itemCnt={3}>
                <ProjectItem count={3} name={"Project 1"} />
                <ProjectItem count={3} name={"Project 1"} />
                <ProjectItem count={3} name={"Project 1"} />
            </ProjectLineItem>
            <ProjectLineItem itemCnt={2}>
                <ProjectItem count={2} name={"Project 1"} />
                <ProjectItem count={2} name={"Project 1"} />
            </ProjectLineItem>
            <ProjectLineItem itemCnt={4}>
                <ProjectItem count={4} name={"Project 1"} />
                <ProjectItem count={4} name={"Project 1"} />
                <ProjectItem count={4} name={"Project 1"} />
                <ProjectItem count={4} name={"Project 1"} />
            </ProjectLineItem>
            <ProjectLineItem itemCnt={2}>
                <ProjectItem count={2} name={"Project 1"} />
                <ProjectItem count={2} name={"Project 1"} />
            </ProjectLineItem>
          </>
      </PrjectsWrap>
  );
}

export default HomeProjects