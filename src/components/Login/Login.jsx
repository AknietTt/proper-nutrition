import React from 'react'
import style from './Login.module.css'
import CloseIcon from '@mui/icons-material/Close'

function Login({visible, setOpenModal}) {
  return (
    <div className={visible ? style['login'] : style['login-close']}>
      <CloseIcon className={style['close']} onClick={() => alert('l')}/>
      <p>Кіру</p>
      <input type="text" placeholder='Атыңыз'/>
      <input type="text" placeholder='Телефон'/>
      <input type="text" placeholder='Мекенжай'/>
      <button>Кіру</button>
    </div>
  )
}

export default Login
