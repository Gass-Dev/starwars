import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/login.module.css'


export default function Login() {
  const api = 'https://api.pote.dev'

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  function handleSubmit (e) {
    e.preventDefault();
    const headers = new Headers();
    headers.append('Content-Type', 'application/json')
    fetch(api + '/auth/login', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email,
        password
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(console.log)
      .catch(console.error);
  }


  return (
    <div className={styles.login}>
      <div className={styles.video}>
        <video  autoPlay loop muted>         
          <source src='/video/DeathStar.mp4' type='video/mp4' alt='dark vador' />
        </video>
      </div>
      
      <div className={styles.logo}>
        <Image src='/StarWars_logo_white.png' alt='Logo Star Wars' layout='responsive' objectFit={'contain'} width={1} height={1}/>
      </div>

      <div className={styles.content}>
        <h1>Sign up to Star Wars</h1>

          <form  className={styles.form} onSubmit={handleSubmit}>

          <label className={styles.label} for='email'> Email </label>
            <input className={styles.input} value={email} onChange={(e) => {setEmail(e.target.value)}} id='email' type='text' placeholder='quentin@gmail.com' required />

            <label className={styles.label} for='password'> Password </label>
            <input className={styles.input} value={password} onChange={(e) => {setPassword(e.target.value)}} id='password' type='password' placeholder='*******' required />

            <input className={styles.inputButton} type='submit' value='Login'/> 

            <Link href='/register' passHref>
              <button className={styles.buttonRegister}>Sign up now!</button>
            </Link>

          </form>
      </div>
        
    </div>
  )
}
