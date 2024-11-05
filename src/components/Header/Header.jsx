import React, { useEffect, useState } from 'react'
import style from './Header.module.css'
import { useNavigate } from 'react-router-dom'
import SpaIcon from '@mui/icons-material/Spa'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
// import Login from '../Login/Login'

import CloseIcon from '@mui/icons-material/Close'

function Header() {

  const navigate = useNavigate()

  const [user, setUser] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  function open() {
    setOpenModal(true)
  }

  function close() {
    setOpenModal(false)
  }

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
