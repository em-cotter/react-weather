
import './App.css';

import Weather from './Weather.js'
import Searchform from './Searchform.js';
function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Searchform />

        <h1 id="current-temp">-5°C</h1>
        <h2 id="changeCity">Cologne</h2>

        <div className="time">Thursday 12:15</div>
        <Weather />
      </div>

      <div className="source">
        <a
          href="https://github.com/em-cotter/react-weather"
          target="_blank"
          rel="noreferrer"
          class="gitlink"
        >
          Open-source code
        </a>
        , by Emma Cotter
      </div>
    </div>
  );
}

export default App;
