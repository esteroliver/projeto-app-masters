import './App.css';
import axios from 'axios'

function App() {
  const alive = axios.get('https://doar-computador-api.herokuapp.com/')
  if (alive===true){
    return (
      <div>
        <main>
          <p>API Online</p>
        </main>
      </div>
    )
  }
  else{
    return (
      <div>
        <main>
          <p>API Offline</p>
        </main>
      </div>
    )
  }
}

export default App;
