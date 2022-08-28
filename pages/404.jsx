import Link from 'next/link'
import React from 'react'

 const NotFound = () => {
  return (
    <div>
      <h2>
            Opppss......
        </h2>
        <h3>That page cannot be found</h3>
    <div className='not-found'>
        <Link href={"/"}><a>Go to back home</a></Link></div>

    </div>
  )
}
export default NotFound
