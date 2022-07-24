import './App.css';
import axios from 'axios'

function App() {
  Element.innerHTML = 
  const alive = axios.get('https://doar-computador-api.herokuapp.com/')
    
    if (alive===true){
      return (
        <div>
          <main>
            <h1 id='titulo'></h1>
            <p>API Online</p>
          </main>
        </div>
      )
    }
  else{
      return (
        <div>
          <main>
            <h1>Doação de computadores usados</h1>
            <p>API Offline</p>
          </main>
        </div>
      )
    }
  
  }

export default App;
