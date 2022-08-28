import React from 'react'
import { InferGetStaticPropsType } from 'next'

export const  getStaticProps = async () =>{

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data : Post[] = await res.json()
    return {
         props:{data,}
    }
    
}
type Post= {
    id : string
    name : string
}

const Ninjas = ({ data }:InferGetStaticPropsType<typeof getStaticProps>)=>{
  return (
    <>
    <div>
    <h1> AllNinjas </h1> 
    </div>
        <h1> AllNinjas </h1>    
        {data.map((post) => (    
            <><p>{post.id} </p><a>
                <h3>{post.name}</h3>
            </a></> 
        ))}
    </>
  )
}
export default Ninjas
