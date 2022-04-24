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
                <ProjectItem count={3} name={"Edanra"} image={'/edanra.png'} link={'https://edanra.com'} description={"A startup that seks to eliminate rent woes in Africa. I am a Co-founder and Product Manager working primarily with technology integrations and SEO improvements"}/>
                <ProjectItem count={3} name={"Appointment App API"} image={'/api.png'} link={'https://github.com/jecordjotse/appointment-app-api'}/>
                <ProjectItem count={3} name={"Pletely App"} image={'/nlp.png'}link={'https://rpubs.com/jecordjotse/pletely-slide-deck'} description={"As part of my data science program by Johns Hopkins, a NLP R package was built for the Capstone Projects. Explore..."}/>
            </ProjectLineItem>
            <ProjectLineItem itemCnt={3}>
                <ProjectItem count={3} name={"Appointment App"} image={'/appointment-app.png'} link={'https://github.com/jecordjotse/appointment-app'}/>
                <ProjectItem count={3} name={"Edanra Blog"} image={'/blog.png'} link={'https://blog.edanra.com'}/>
                <ProjectItem count={3} name={"BMI Calculator"} image={'/bmi_calculator.png'} link={'https://github.com/jecordjotse/shinyApp'}/>
                <ProjectItem count={3} name={"Weather Events Analysis"} image={'/weather.webp'} link={'https://rpubs.com/jecordjotse/reproducible_final_reoprt'}/>
            </ProjectLineItem>d
          </>
      </PrjectsWrap>
  );
}

export default HomeProjects