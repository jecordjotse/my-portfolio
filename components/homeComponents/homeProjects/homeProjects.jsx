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
                <ProjectItem count={3} name={"Edanra"} image={'/edanra.png'} link={'https://edanra.com'}/>
                <ProjectItem count={3} name={"Appointment App API"} image={'/api.png'} link={'https://github.com/jecordjotse/appointment-app-api'}/>
                <ProjectItem count={3} name={"NLP"} image={'/nlp.png'}link={'https://jeromecordjotse.shinyapps.io/pletelyApp/'}/>
            </ProjectLineItem>
            <ProjectLineItem itemCnt={3}>
                <ProjectItem count={3} name={"Appointment App"} image={'/appointment-app.png'} link={'https://github.com/jecordjotse/appointment-app'}/>
                <ProjectItem count={3} name={"Edanra Blog"} image={'/blog.png'} link={'https://blog.edanra.com'}/>
                <ProjectItem count={3} name={"BMI Calculator"} image={'/bmi_calculator.png'} link={'https://github.com/jecordjotse/shinyApp'}/>
            </ProjectLineItem>
          </>
      </PrjectsWrap>
  );
}

export default HomeProjects