import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
      <Link href="/">
        {/* Styling for the link gets put on the a tag */}
        <a> DJ Events</a>
      </Link> 
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}