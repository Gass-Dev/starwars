import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navBar}>

      <div className={styles.navBar_logo}>
        <Link href="/">
          <a>
            <Image src='/StarWars_logo.png' alt='Logo Super Soco' width={128} height={77}/>
          </a>
        </Link>
      </div>

      <div>
        <ul className={styles.navBar_onglets}>
          <li>
            <Link href='/gammes'>
              <a>Gammes</a>
            </Link>
          </li>
          <li>
            <Link href='/quel_super_soco_pour_moi'>
              <a>Quel Super Soco pour moi?</a>
            </Link>
          </li>
          <li>
            <Link href='/reserver_un_essai'>
              <a>Réserver un essai</a>
            </Link>
          </li>
          <li>
            <Link href='/revendeurs'>
              <a>Revendeurs</a>
            </Link>
          </li>
          {/* <li>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </li> */}
          <li>
            <Link href='/nous_contacter'>
              <a>Nous contacter</a>
            </Link>
          </li>
        </ul>  
      </div>

    </nav>
  )
}

export default Navbar