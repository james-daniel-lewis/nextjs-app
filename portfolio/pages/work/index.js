import styles from '../../styles/Projects.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: {
            projects: data
        }
    }
}
 
const project = ({projects}) => {
    return ( 
        <div >
            Projects
            {projects.map(project => (
                <Link href={'/work/' + project.id} key={project.id}>
                    <a className={styles.single}>
                        <h3>{project.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default project;

