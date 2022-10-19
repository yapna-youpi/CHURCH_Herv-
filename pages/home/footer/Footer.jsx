import React from 'react'
import Image from 'next/image'

import styles from '../../../styles/Home.module.css'

function Footer() {
  return (
    <footer className="flex justify-center items-center py-14 px-0 border-y border-slate-300">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/../../../public/versel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
    </footer>
  )
}

export default Footer