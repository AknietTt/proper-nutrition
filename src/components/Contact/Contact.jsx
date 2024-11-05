import React from 'react'
import style from './Contact.module.css'
import MapIcon from '@mui/icons-material/Map'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import SmartphoneIcon from '@mui/icons-material/Smartphone'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'

function Contact() {
  return (
    <div className={style['contact']}>
      <div className={style['top-section']}>
        <h2>Свяжитесь с нами</h2>
        <span>Пишите, звоните — мы всегда на связи!</span>
      </div>
      <div className={style['bottom-section']}>
        <div>
          <MapIcon className={style['map']}/>
          <h3>Город</h3>
          <span>Астана, улица Ақмешіт, дом 8</span>
        </div>
        <div>
          <WhatsAppIcon className={style['whatsapp']}/>
          <h3>Whatsapp</h3>
          <span>+7 (771) 522 49 45</span>
        </div>
        <div>
          <EmailIcon className={style['email']}/>
          <h3>Электронная почта</h3>
          <span>laysoff01@mail.ru</span>
        </div>
        <div>
          <SmartphoneIcon className={style['smartphone']}/>
          <h3>Телефон</h3>
          <span>+7 (771) 522 49 45</span>
        </div>
        <div>
          <InstagramIcon className={style['instagram']}/>
          <h3>Instagram</h3>
          <span>lays_official</span>
        </div>
      </div>
    </div>
  )
}

export default Contact
