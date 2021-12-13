import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/element.module.css'


export default function Login() {
  const api = 'http swapi.dev/api/'

  const [ name, setName] = useState('')
  const [ mode, setModel] = useState('')

  function handleSubmit (e) {
    e.preventDefault();
    const headers = new Headers();
    headers.append('Content-Type', 'application/json')
    fetch(api + '/starships/', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        name,
        model
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(console.log)
      .catch(console.error);
  }


  return (
    <div className={styles.content}>
        
    </div>
  )
}