import React from 'react'
import Link from 'next/link'
export const Navbar = () => {
  return (
  <div>
    <h1>Thanh Luan</h1>
    <nav>
        <div className='logo'>
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>Page</a></Link>
        <Link href="/posts"><a>About</a></Link>
    </nav>

  </div>
    
  )
}
