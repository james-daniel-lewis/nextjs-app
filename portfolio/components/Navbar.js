import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <h1 className='logo'>
                <Image width={50} height={50} src="/logo.svg"/>
            </h1>
            <Link href="/"><a>Home</a></Link>
            <Link href="/work"><a>Projects</a></Link>
            <Link href="about"><a>About</a></Link>
            <Link href="contact"><a>Contact</a></Link>
        </nav>
     );
}
 
export default Navbar;