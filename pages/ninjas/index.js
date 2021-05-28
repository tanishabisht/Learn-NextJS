import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import styles from '../../styles/Ninjas.module.css'


export const getStaticProps = async () => {
  // const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return {
    props: { ninjas: data }
  }
}

const Ninjas = ({ninjas}) => {
  return (
    <>
      <Head>
        <title>Ninja List | Listing</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <h2>All Ninjas</h2>
      {ninjas.map(ninja => (
        <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
          <a className={styles.single}><h3>{ninja.name}</h3></a>
        </Link>
      ))}
    </>
  )
}

export default Ninjas