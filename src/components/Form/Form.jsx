import React, { useState } from 'react'
import style from './Form.module.css'
import SmartphoneIcon from '@mui/icons-material/Smartphone'
import CloseIcon from '@mui/icons-material/Close'

function Form() {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [code, setCode] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    
    // Эмуляция успешной отправки формы
    setTimeout(() => {
      setModalVisible(true);
    }, 500);
  }

  function closeModal() {
    setModalVisible(false);
  }

  return (
    <div className={style['main']}>
      <div className={style['left-section']}>
        <h3>Погрузитесь во вкус <span>Lay's</span></h3>
        <span>Оставьте заявку, чтобы узнать о специальных предложениях и новинках от Lay's!</span>
      </div>
      <form className={style['form']} onSubmit={handleSubmit}>
        <div className={style['top-section']}>
          <h3>Хочу Lay's</h3>
          <hr />
          <div className={style['top-section-phone']}>
            <SmartphoneIcon />
            <span>Заполните форму, и мы сообщим вам о новинках и акциях Lay's</span>
          </div>
        </div>
        <input 
          type="text" 
          placeholder='Ваше имя' 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="text" 
          placeholder='Ваш телефон'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input 
          type="text" 
          placeholder='Промокод (если есть)'
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">Оставить заявку</button>
      </form>

      {modalVisible && (
        <div className={style['modal']}>
          <div className={style['modal-content']}>
            <CloseIcon className={style['close']} onClick={closeModal} />
            <p>Спасибо! Ваша заявка принята.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Form
