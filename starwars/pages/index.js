import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <video  autoPlay loop muted className={styles.video}>         
        <source src='/video/DeathStar.mp4' type='video/webm' alt='dark vador' />
      </video>

      <div className={styles.content}>
        <Image src='/StarWars_logo.png' alt='Logo Star Wars' width={348} height={150}/>
        <h1>Sign up to Star Wars</h1>
        <form  method='GET'>
          <label for='name'>Username</label>
          <input id='username' type='text' autocomplete='username' required />
          <label for='psw'>Name</label>
          <input id='password' type='text' autocomplete='password' required />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}
