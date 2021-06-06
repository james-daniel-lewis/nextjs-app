export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    const paths = data.map(project => {
        return {
            params: {id: project.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await response.json();


    return {
        props: {project: data}
    }
}
 
const Details = ({project}) => {
    return ( 
        <div>
            <h1>{project.name}</h1>
            <p>{project.email}</p>
            <p>{project.website}</p>
            <p>{project.address.city}</p>

        </div>
     );
}
 
export default Details;