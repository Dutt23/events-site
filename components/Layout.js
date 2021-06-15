import React from 'react'
import Head from 'next/Head'
import styles from '../styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'
import { useRouter } from 'next/router'
export default function Layout({ title, keywords, description, children }) {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      < Header/>
      {router.pathname==="/" && <Showcase />}
      
      <div className = {styles.container}></div>
      {children}
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title : "Dj Events ",
  description : "Find the latest events",
  keywords: "music, dj, edm, events"

}