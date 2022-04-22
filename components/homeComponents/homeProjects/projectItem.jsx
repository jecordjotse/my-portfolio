import Link from 'next/link';
import {ProjectCard} from './homeProjectsStyles'

const ProjectItem = ({count, name, link, image}) => {
    return (
        <Link href={!link? "./#": link} passHref>
            <ProjectCard itemCnt={Number(count)} image={image}><h3>{name}</h3></ProjectCard>
        </Link>
    );
}

export default ProjectItem