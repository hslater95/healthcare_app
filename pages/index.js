import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import  Header  from '../components/Header.js';
import  Form  from '../components/Form.js';
export default function Home() {

  
  return (
    <div className={styles.container}>
      <Header />
      <Form />
    </div>
  )
}
