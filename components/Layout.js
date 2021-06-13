import React from 'react'
import Head from 'next/Head'
import styles from '../styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      < Header/>
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