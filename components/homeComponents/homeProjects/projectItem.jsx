import Link from 'next/link';
import {ProjectCard} from './homeProjectsStyles'

const ProjectItem = ({count, name, link, image, description}) => {
    return (
        <Link href={!link? "./#": link} passHref>
            <ProjectCard itemCnt={Number(count)} image={image}><div><h3>{name}</h3><p>{description}</p></div></ProjectCard>
        </Link>
    );
}

export default ProjectItem