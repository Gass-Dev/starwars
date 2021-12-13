import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navBar}>

      <div className={styles.navTop}>
        <div></div>

        <div className={styles.navBar_logo}>
          <Link href='/'>
            <a>
              <Image src='/starWars_logo_white.png' priority alt='Logo Star Wars' layout='responsive' objectFit={'contain'} width={1} height={1}/>
            </a>
          </Link>
        </div>

        <div className={styles.searchContainer}>
          <form>
            <input type='text' placeholder='Search Star Wars' name='search'></input>
            <button type='submit'>
            <Image src='/icons/search.png' alt='icon search' layout='responsive' objectFit={'cover'} width={1} height={1}/>
            </button>
            
          </form>
        </div>
      </div>
      

      <div className={styles.navBar_onglets}>
        <ul>
          <li>
            <Link href='/profil'>
              <a>Profil</a>
            </Link>
          </li>

          <li>
            <Link href='/characters'>
              <a>Characters</a>
            </Link>
          </li>
          <li>
            <Link href='/planets'>
              <a>Planets</a>
            </Link>
          </li>
          <li>
            <Link href='/ships'>
              <a>Ships</a>
            </Link>
          </li>
        </ul>  
      </div>

    </nav>
  )
}

export default Navbar