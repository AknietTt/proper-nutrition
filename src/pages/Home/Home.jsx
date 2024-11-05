import React from 'react'
import Header from '../../components/Header/Header'
import Diet from '../../components/Diet/Diet'
import style from './Home.module.css'
import Contact from '../../components/Contact/Contact'
import Form from '../../components/Form/Form'

function Home() {
  return (
    <div className={style['home']}>
      <Header />
      <Form />
      <Contact />
    </div>
  )
}

export default Home