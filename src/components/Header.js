import React from 'react'
import { Link ,useParams} from 'react-router-dom'

const Header = () => {
    const params = useParams()
    console.log(params,'params----')
  return (
    <header className='fixed top-0 w-full z-10'>
      <nav className='header-component grid grid-flow-col bg-beige shadow-lg py-2 px-3 font-mono font-semibold h-16 '>
      <Link to="/" className='flex items-center lg:px-20'><span className='logo col-span-2'><a href="https://imgur.com/VoXXPs1"><img loading='lazy' className='w-10 h-10 rounded-lg border border-black' alt="logo" src="https://i.imgur.com/VoXXPs1.png" title="source: imgur.com" /></a></span></Link>
        <ul className="all-routes flex justify-end items-center lg:px-20 ">
            <Link to="/"><li className="lg:px-8 px-2">
                Home
            </li></Link>
            <Link to='/about'><li className="lg:px-8 px-2">
                About
            </li></Link>
            <Link to="/skills"><li className="lg:px-8 px-2">
                Skills
            </li></Link>
            <Link to="/projects"><li className="lg:px-8 px-2">
                Projects
            </li></Link>            
        </ul>
      </nav>
    </header>
  )
}

export default Header
