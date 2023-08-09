import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, officiis maiores. Non reprehenderit officiis, quaerat voluptatum ipsa magnam maiores fugiat et ex sunt esse iure fugit nemo asperiores, doloremque expedita?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum provident at saepe id odit, deleniti quos earum voluptatem! Odit magni eum sapiente cum rem, veritatis eos at dignissimos molestias?</p>
      <Link href={"/ninjas "}>
      <p className={styles.btn}>Link About</p>
      </Link>

    </div>
  )
}

export default Home
