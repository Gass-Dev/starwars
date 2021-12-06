import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/register.module.css'

export default function Register() {
  const api = 'https://api.pote.dev'

  const [ firstname, setFirstname ] = useState('')
  const [ lastname, setLastname ] = useState('')
  const [ username, setUsername ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  function handleSubmit (e) {
    e.preventDefault();
    const headers = new Headers();
    headers.append('Content-Type', 'application/json')
    fetch(api + '/users', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        firstname,
        lastname,
        username,
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
    <div className={styles.register}>
      <div className={styles.logo}>
      <Image src='/StarWars_logo.png' alt='Logo Star Wars' layout='responsive' objectFit={'contain'} width={1} height={1}/>
      </div>
      
      <div className={styles.content}>
        <h1> Sign up now! </h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          
          <label className={styles.label} for='firstname'> Firstname </label>
          <input className={styles.input} value={firstname} onChange={(e) => {setFirstname(e.target.value)}} id='firstname' type='text' placeholder='Quentin' required />

          <label className={styles.label} for='lastname'> Lastname </label>
          <input className={styles.input} value={lastname} onChange={(e) => {setLastname(e.target.value)}} id='name' type='text' placeholder='Danneville' required />

          <label className={styles.label} for='username'> Username </label>
          <input className={styles.input} value={username} onChange={(e) => {setUsername(e.target.value)}} id='username' type='text' placeholder='QuentinLe Kikou' required />

          <label className={styles.label} for='email'> Email </label>
          <input className={styles.input} value={email} onChange={(e) => {setEmail(e.target.value)}} id='email' type='text' placeholder='quentin@gmail.com' required />

          <label className={styles.label} for='password'> Password </label>
          <input className={styles.input} value={password} onChange={(e) => {setPassword(e.target.value)}} id='password' type='password' placeholder='*******' required />

          <input className={styles.inputButton} type='submit' value='Register'/> 

        </form>
      </div>
    </div>
  );
}
