import React from 'react'
import styles from './Card.module.css'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ color: 'rgba(241, 146, 65,1)' }}>Clamp</h2>
        </div>
        <div>
          <button
            style={{
              backgroundColor: 'rgb(0, 0, 0,1)',
              color: 'white',
              borderRadius: '5px',
              padding: '10px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
