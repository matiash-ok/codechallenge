import './App.css';
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'

import useHealthStatus from './Hooks/useHealthStatus';
import API_NAMES from './data'

function App() {

  const [healthStatus] = useHealthStatus(API_NAMES,15)

  return (


    <div className="App">
      <Navbar />
      <div className='p-3'>
          <Cards cardsArr={healthStatus} />
      </div>
    </div>
  );
}

export default App;
