import React, { useEffect, useState } from 'react'
import style from './Admin.module.css'

function Admin() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await fetch('https://localhost:7153/api/Service/report/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    }

    fetchReports();
  }, []);

  return (
    <div className={style['admin-container']}>
      <h1 className={style['title']}>Барлық есептер</h1>
      {reports.length === 0 ? (
        <p>Деректер жоқ</p>
      ) : (
        <table className={style['table']}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Аты</th>
              <th>Нөмір</th>
              <th>Код</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(report => (
              <tr key={report.id}>
                <td>{report.id}</td>
                <td>{report.name}</td>
                <td>{report.number}</td>
                <td>{report.code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Admin
