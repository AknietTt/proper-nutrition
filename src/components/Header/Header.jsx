import React from 'react'
import style from './Header.module.css'
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate()

  return (
    <header className={style['header']}>
      <span className={style['icon']} onClick={() => navigate('/')}> TimDak</span>
      {/* <span onClick={() => navigate('/')}>Рацион</span> */}
      <span onClick={() => navigate('/menu')}>Меню</span>
      <span onClick={() => navigate('/')}>Контакы</span>
      <span onClick={() => navigate('/about')}>О нас</span>
    </header>
  )
}

export default Header
