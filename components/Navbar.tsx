import React from 'react'
import Link from 'next/link'
export const Navbar = () => {
  return (
  <div>
    <h1>Nguyễn Thành Luân</h1> 
    <h4>Software Engineer</h4>
    <h5>Java Developer</h5>
    <nav>
        <div className='logo'>
        </div> 
        <Link href="/"><a>About Me</a></Link>
        <Link href="/about"><a>Work Experience</a></Link>
        <Link href="/posts"><a>Contact</a></Link>
        <Link href="/posts"><a>Comment</a></Link>
    </nav>

  </div>
    
  )
}
