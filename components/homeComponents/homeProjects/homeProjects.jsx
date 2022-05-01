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
            <ProjectLineItem itemCnt={2}>
                <ProjectItem count={2} name={"Edanra"} image={'/edanra.png'} link={'https://edanra.com'} description={"A startup that seks to eliminate rent woes in Africa. I am a Co-founder and Product Manager working primarily with technology integrations and SEO improvements"}/>
                <ProjectItem count={2} name={"Appointment App API"} image={'/api.png'} link={'https://github.com/jecordjotse/appointment-app-api'}/>
              </ProjectLineItem>
            <ProjectLineItem itemCnt={2}>
                <ProjectItem count={2} name={"Pletely App"} image={'/nlp.png'}link={'https://rpubs.com/jecordjotse/pletely-slide-deck'} description={"As part of my data science program by Johns Hopkins, a NLP R package was built for the Capstone Projects. Explore..."}/>
                <ProjectItem count={2} name={"Appointment App"} image={'/appointment-app.png'} link={'https://github.com/jecordjotse/appointment-app'}/>
            </ProjectLineItem>
            <ProjectLineItem itemCnt={2}>
                <ProjectItem count={2} name={"Edanra Blog"} image={'/blog.png'} link={'https://blog.edanra.com'}/>
                <ProjectItem count={2} name={"BMI Calculator"} image={'/bmi_calculator.png'} link={'https://github.com/jecordjotse/shinyApp'}/>
            </ProjectLineItem>
            <ProjectLineItem itemCnt={1}>
                <ProjectItem count={1} name={"Weather Events Analysis"} image={'/weather.webp'} link={'https://rpubs.com/jecordjotse/reproducible_final_reoprt'}/>
            </ProjectLineItem>
          </>
      </PrjectsWrap>
  );
}

export default HomeProjects