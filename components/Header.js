import React, { useContext } from 'react'
import Link from 'next/link'
import styles from '@styles/Header.module.css'
import Search from './Search'
import AuthContext from '@context/AuthContext'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
export default function Header() {
  const { user, logout } = useContext(AuthContext)
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

          {user ? (
            // If logged in
            <> <li>
              <Link href="/events/add">
                <a>Add Event</a>
              </Link>
            </li>
              <li>
                <Link href="/events/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <button onClick={() => logout()} className="btn-secondary btn-icon">
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>) : (
              // If logged out
              <><li>
                <Link href="/account/login">
                  <a className="btn-secondary btn-icon">
                    <FaSignInAlt /> Login
              </a>
                </Link>
              </li></>)}
        </ul>
      </nav>
    </header>
  )
}
