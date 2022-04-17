import {ProjectCard} from './homeProjectsStyles'

const ProjectItem = ({count, name}) => {
    return (
        <ProjectCard itemCnt={Number(count)}><h3>{name}</h3></ProjectCard>
    );
}

export default ProjectItem