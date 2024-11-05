import React from 'react';
import Header from '../../components/Header/Header';

export default function About() {
  return (
    <div>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.title}>О нас</h1>
        <p style={styles.paragraph}>
          Добро пожаловать в мир Lay's!
        </p>
        <p style={styles.paragraph}>
          Lay's — это бренд, который делает каждый момент особенным и вкусным. Наша миссия — дарить наслаждение от каждого кусочка, предлагая широкий выбор чипсов с разнообразными вкусами для любого настроения и случая.
        </p>
        <p style={styles.paragraph}>
          В Lay's мы верим, что каждая пачка чипсов может приносить не только радость, но и вдохновение. Поэтому мы уделяем особое внимание выбору ингредиентов и контролируем каждый этап производства, чтобы вы наслаждались подлинным вкусом в каждой пачке.
        </p>
        <p style={styles.paragraph}>
          Наша команда стремится к инновациям, создавая новые уникальные вкусы, которые удовлетворят любой гастрономический вкус. От классического солёного до острых и необычных сочетаний — Lay's радует своих поклонников разнообразием.
        </p>
        <p style={styles.paragraph}>
          Мы ценим каждого клиента и стремимся сделать процесс покупки удобным и приятным. С Lay's вы можете быть уверены в качестве и доступности любимых чипсов.
        </p>
        <p style={styles.paragraph}>
          Спасибо, что выбираете Lay's! Мы с радостью продолжаем радовать вас новыми вкусами и делать каждый ваш день немного ярче.
        </p>
        
        <h2 style={styles.subtitle}>Наша цель</h2>
        <p style={styles.paragraph}>
          Наша цель — делать вкусные и качественные чипсы доступными для всех, принося радость и удобство в повседневную жизнь.
        </p>

        <h2 style={styles.subtitle}>Контакты</h2>
        <p style={styles.paragraph}>
          <strong>Адрес:</strong> Астана, улица Ақмешіт, дом 8<br />
          <strong>Телефон:</strong> +7 (771) 522 49 45<br />
          <strong>Email:</strong> laysoff01@mail.ru
        </p>

        <h2 style={styles.subtitle}>Основание компании</h2>
        <p style={styles.paragraph}>
          Lay's была основана в 1932 году и с тех пор продолжает совершенствовать производство, расширяя линейку вкусов, чтобы радовать вас каждый день.
        </p>

        <h2 style={styles.subtitle}>Основатели и спонсор проекта</h2>
        <p style={styles.paragraph}>
          <strong>Основатели:</strong><br />
          Куангазы Темирлан Талгатович<br />
          Ерболулы Дамиль
        </p>
        <p style={styles.paragraph}>
          <strong>Спонсор:</strong><br />
          Калиев Талгат Куангазинович
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '50px 20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    backgroundColor: '#fffaf0', // светло-жёлтый фон, похожий на цвета Lay's
  },
  title: {
    fontSize: '36px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#f8b400', // оранжевый цвет, напоминающий бренд Lay's
  },
  subtitle: {
    fontSize: '24px',
    marginTop: '40px',
    marginBottom: '10px',
    color: '#f8b400'
  },
  paragraph: {
    fontSize: '18px',
    marginBottom: '20px',
    textAlign: 'justify'
  }
};
