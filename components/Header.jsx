import Link from 'next/link'
import { Button } from './ui/button'
import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white '>
        <div className='container mx-auto flex justify-between items-center'> 
            {/* Logo */}
            <Link href={"/"}>
            <h1 className='text-4xl font-semibold'>
                Sourav <span className='text-accent'>G.</span>
            </h1>
            </Link>
            {/* desktop nav & Hire me button*/}
            <div className="hidden md:flex items-center gap-8">
             <Nav/>
             <Link href={"/contact"}>
                <Button>Hire Me!</Button>
             </Link>
            </div>
            {/* mobile nav */}
            <div className='md:hidden'>Mobile nav</div>
        </div>
    </header>
  )
}

export default Header