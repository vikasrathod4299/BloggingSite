
import './App.css'

import Navbar from './components/Navbar'
import Router from './Router'

function App() {


  return (
    <div className="App">
            <header>
              <Navbar/>
            </header>
            
            <section>
                <Router/>
            </section>
    </div>
  )
}

export default App
