import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import styles from '@/styles/Card.module.css'
const Card = () => {
  return (
    <div className={styles.card}>
      <div style={{ display: 'flex' }}>
        <div className={styles.topContainer1}></div>
        <div className={styles.topContainer2}></div>
      </div>
      <div style={{ padding: '20px' }}>
        <div className={styles.centreme}>
          <div>
            <h3>WBTC-WETH</h3>
          </div>
          <div className={styles.underLyingTokens}>
            <div>
              <p style={{ color: 'rgb(107, 114, 128,1)' }}>Underlying Tokens</p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: '5px',
                }}
              >
                <div style={{ marginRight: '10px' }}>
                  <img src='/USDC.svg' alt='USDT' className={styles.token} />
                  <img src='/WBTC.svg' alt='WBTC' className={styles.token} />
                  <img src='/WETH.svg' alt='WETH' className={styles.token} />
                </div>
              </div>
            </div>
            <div>
              <p style={{ color: 'rgb(107, 114, 128,1)' }}>
                % Change (in 24 hrs)
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: '5px',
                }}
              >
                <FiArrowUpRight className={styles.arrow} />
                <h2
                  style={{
                    fontWeight: '500',
                  }}
                >
                  -0.08%
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.button}>Buy</button>
    </div>
  )
}

export default Card
