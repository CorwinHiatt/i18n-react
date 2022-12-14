import { useState, createContext } from 'react';
import Spanish from './lang/es.json'
import French from './lang/fr.json'
import Arabic from './lang/ar.json'
import English from './lang/en.json'
import Details from './components/Details';
import './App.css';

const locale = navigator.language || 'en';

const _lang = (locale==='es') 
                ? Spanish 
                :(locale==='fr')
                ? French
                :(locale==='ar')
                ? Arabic
                : English

export const LanguageContext = createContext()

function App() {
  const [lang, setLang] = useState(_lang);

  return (
    <LanguageContext.Provider value={{lang, default: English}}>
      
    <div className="App">
      <header className="App-header">
        <div>
          <button className='but' onClick={() => setLang(English)}>English πΊπΈ</button>
          <button className='but' onClick={() => setLang(Spanish)}> Spanish π²π½πͺπΈπ΅π·</button>
          <button className='but' onClick={() => setLang(French)}> Frenchπ«π·πΌπ­πΉ</button>
          <button className='but' onClick={() => setLang(Arabic)}>Arabicπ¦πͺπΈπ¦πͺπ¬</button>
        </div>
       <h1>{lang["app.header"]}</h1>
        <p>{lang["app.subhead"]}</p>
        <a
          className="App-link"
          href="https://bocacode.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
         {lang["app.cta"]}
        </a>
        <Details/>
      </header>
    </div>
    </LanguageContext.Provider>
  );
}

export default App;
