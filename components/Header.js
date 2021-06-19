import React from 'react'
import Link from 'next/link'
import styles from '@styles/Header.module.css'
import Search from './Search'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
      <Link href="/">
        {/* Styling for the link gets put on the a tag */}
        <a> DJ Events</a>
      </Link> 
      </div>

      <Search />

      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          <li>
            <Link href="/events/add">
              <a>Add Event</a>
            </Link>
          </li>
          <li>
            <Link href="/account/login">
              <a className="btn-secondary btn-icon">
                <FaSignInAlt /> Login
              </a>
            </Link>
          </li>
          <li>
            <Link href="/account/register">
              <a>Add Event</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
