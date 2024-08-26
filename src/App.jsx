import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [number, setNumber] = useState(0);
  const [date, setDate] = useState({
    day: 0,
    month: 0,
    year: 0
  })

  const [numTrivia, setNumTrivia] = useState("");
  const [dateTrivia, setDateTrivia] = useState("");
  const [yearTrivia, setYearTrivia] = useState("");

  const handleNumberChange = (event) => {
    if (event.target.value == "") { setNumber(0); }
    else { setNumber(event.target.value); }
  };

  const handleDateChange = (event) => {
    const inputDate = event.target.value;
    const [inputYear, inputMonth, inputDay] = inputDate.split("-")
    setDate({
      day: inputDay,
      month: inputMonth,
      year: inputYear
    });
  }

  const onSend = (event) => {
    if (event.target.id == 'numberSend') {
      fetch(`http://numbersapi.com/${number}`)
        .then(res => res.text())
        .then(res => setNumTrivia(res))
        .catch(error => console.log(error));
    }
    else if (event.target.id == 'dateSend') {
      fetch(`http://numbersapi.com/${date.month}/${date.day}/date`)
        .then(res => res.text())
        .then(res => setDateTrivia(res))
        .catch(error => console.log(error));

      fetch(`http://numbersapi.com/${date.year}/year`)
        .then(res => res.text())
        .then(res => setYearTrivia(res))
        .catch(error => console.log(error));
    }
  };


  return (
    <main>

      <h1>Datos sobre números y fechas</h1>

      <section>
        <h2>Obtener un dato sobre un número</h2>
        <input type="number" onChange={handleNumberChange} />
        <button id='numberSend' onClick={onSend}>Enviar</button>
        <p className="result-box">{numTrivia}</p>
      </section>

      <section>
        <h2>Obtener un dato sobre una fecha</h2>
        <input type="date" onChange={handleDateChange} />
        <button id='dateSend' onClick={onSend}>Enviar</button>
        <h3>Dato sobre la fecha</h3>
        <p className="result-box">{dateTrivia}</p>
        <h3>Dato sobre el año</h3>
        <p className="result-box">{yearTrivia}</p>
      </section>

    </main>
  );
}

export default App;
