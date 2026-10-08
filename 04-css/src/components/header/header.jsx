import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h1>Header</h1>
        <button>Login</button>
    </div>
  )
}

export default Header