import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navBar}>

      <div className={styles.navBar_logo}>
        <Link href="/">
          <a>
            <Image src='/StarWars_logo.png' alt='Logo Star Wars' width={116} height={50}/>
          </a>
        </Link>
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

      <div class="search-container">
        <form>
          <input type="text" placeholder="Search..." name="search"></input>
          <button type="submit">Submit
            {/* <span className='material-icons'>arrow_forward_ios</span> */}
          </button>
          
        </form>
      </div>
    </nav>
  )
}

export default Navbar