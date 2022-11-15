import { useState } from 'react';
import Spanish from './lang/es.json'
import English from './lang/en.json'
import './App.css';

const locale = navigator.language || 'en';

const _lang = (locale==='es') ? Spanish : English;

function App() {
  const [lang, setLang] = useState(_lang);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={() => setLang(English)}>EN</button>
          <button onClick={() => setLang(Spanish)}>ES</button>
        </div>
       <h1>{lang["app.header"]}</h1>
        <p>{lang["app.subhead"]}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         {lang["app.cta"]}
        </a>
        
      </header>
    </div>
  );
}

export default App;
