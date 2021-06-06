import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const Notfound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <div className="not-found">
            <h1>Ooooopppppsssss.......</h1>
            <h2>Page not found</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div> );
}
 
export default Notfound;