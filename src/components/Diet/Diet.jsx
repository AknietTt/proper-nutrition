import React, { useEffect, useState } from 'react'
import style from './Diet.module.css'
import { getAllServices } from '../../services/ServiceService'
import ServiceCard from '../ServiceCard/ServiceCard'
import CloseIcon from '@mui/icons-material/Close'

function Diet() {

  const [diet, setDiet] = useState([{}])
  const [gender, setGender] = useState('woman')
  const [modal, setModal] = useState(false)
  const [result, setResult] = useState(false) 
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [activity, setActivity] = useState(0)
  const [dietGoal, setDietGoal] = useState(0)

  const [kcal, setKcal] = useState(0)
  const [protein, setProtein] = useState(0)
  const [oil, setOil] = useState(0)
  const [carbohydrate, setCarbohydrate] = useState(0)

  const [modalGender, setModalGender] = useState('woman')

  const handleChange = (event) => {
    setActivity(event.target.value);
  };

  function calculateDiet() {
    setResult(true)
    if (modalGender === 'woman') {
      const bmr =  447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)
      setKcal(Math.floor(bmr) + dietGoal)
      const tdee = bmr * activity
      setProtein(Math.floor((tdee * 0.20) / 4))
      setOil(Math.floor((tdee * 0.30) / 9))
      setCarbohydrate(Math.floor((tdee * 0.50) / 4))
    } 
    else {
      const bmr =  88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)
      setKcal(Math.floor(bmr) + dietGoal)
      const tdee = bmr * activity
      setProtein(Math.floor((tdee * 0.20) / 4))
      setOil(Math.floor((tdee * 0.30) / 9))
      setCarbohydrate(Math.floor((tdee * 0.50) / 4))
    }
  }

  function minus() {
    setDietGoal(-500)
  }
  function balance() {
    setDietGoal(0)
  }
  function plus() {
    setDietGoal(500)
  }

  function modalWoman() {
    setModalGender('woman')
  }

  function modalMan() {
    setModalGender('man')
  }

  function closeResult() {
    setResult(false)
  }

  function open() {
    setModal(true)
  }

  function close() {
    setModal(false)
  }

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllServices()
      setDiet(data)
    }
    fetch()
  }, [])

  return (
    <div className={style['diet']}>
      <div className={style['description']}>
        <h2>Рациондар</h2>
        <p>Рациондардың құны калорияға, күндер санына және мәзір желісіне байланысты</p>
      </div>
      
      <div className={style['diets']}>
        {gender === 'woman' && 
          diet.filter(diet => diet.gender === 'woman').map((diet) => (
            <ServiceCard 
              key={diet.id}
              name={diet.name}
              description={diet.description}
              kcal={diet.kcal}
              price={diet.price}
            />
          ))
        }
        {gender == 'man' && 
          diet.filter(diet => diet.gender === 'man').map((diet) => (
            <ServiceCard 
              key={diet.id}
              name={diet.name}
              description={diet.description}
              kcal={diet.kcal}
              price={diet.price}
            />
          ))
        }
        <div className={style['calculator']}>
          <h5>Сіз өзіңіздің күнделікті калория мөлшеріңізді және БЖУ-ды білмейсіз бе?</h5>
          <span>Калькулятор қажетті рационды таңдауға көмектеседі.</span>
          <button onClick={open}>Есептеу</button>
        </div>
      </div>
      <div className={modal ? style['modal-open'] : style['modal-close']}>
        <CloseIcon onClick={close} className={style['close-icon']}/>
        <h3>Дене параметрлері</h3>
        <div className={style['modal-gender']}>
          <button className={modalGender === 'woman' ? style['modal-woman-btn'] : style['woman-btn']} onClick={modalWoman}>Әйел</button>
          <button className={modalGender === 'man' ? style['modal-man-btn'] : style['man-btn']} onClick={modalMan}>Еркек</button>
        </div>
        <div className={style['modal-body']}>
          <input type="text" placeholder='Жас' onChange={(e) => setAge(e.target.value)}/>
          <input type="text" placeholder='Салмақ' onChange={(e) => setWeight(e.target.value)}/>
          <input type="text" placeholder='Биіктік' onChange={(e) => setHeight(e.target.value)}/>
        </div>
        <div className={style['modal-activity']}>
          <span>Белсенділік деңгейі</span>
          <select name="" id="" value={activity} onChange={handleChange}>
            <option value="">Белсенділікті таңдаңыз</option>
            <option value="1.2">Аз қозғалатын</option>
            <option value="1.375">Аз белсенділік</option>
            <option value="1.55">Орташа белсенділік</option>
            <option value="1.725">Жоғары белсенділік</option>
            <option value="1.9">Өте жоғары белсенділік</option>
          </select>
        </div>
        <div className={style['modal-diet']}>
          <span>Мақсат</span>
          <div className={style['modal-diet-btn']}> 
            <button onClick={minus} className={dietGoal == -500 ? style['active'] : style['disable']}>Төмендету</button>
            <button onClick={balance} className={dietGoal == 0 ? style['active'] : style['disable']}>Теңгерім</button>
            <button onClick={plus} className={dietGoal == 500 ? style['active'] : style['disable']}>Жинау</button>
          </div>
          <button className={style['calculate']} onClick={calculateDiet}>Есептеу</button>
        </div>
      </div>
      
      <div className={result ? style['result-open'] : style['result-close']}>
        <CloseIcon onClick={closeResult}/>
        <h3>Рацион ұсынысы</h3>
        <p>Мақсатқа жету үшін қажетті күнделікті калория нормасы және рационның қоректік құрамы: <span>{kcal}</span> ккал</p>
        <div className={style['result-diet']}>
          <div className={style['protein']}>
            <span>{protein} гр</span>
            <p>Ақуыздар</p>
          </div>
          <div className={style['oil']}>
            <span>{oil} гр</span>
            <p>Майлар</p>
          </div>
          <div className={style['carbohydrate']}>
            <span>{carbohydrate} гр</span>
            <p>Көмірсулар</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diet
