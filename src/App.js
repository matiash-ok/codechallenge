import './App.css';
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import API_NAMES from './data'

function App() {

  return (


    <div className="App">
      <Navbar />
      <div className='p-3'>
          <Cards time={1} cardsArr={API_NAMES} />
      </div>
    </div>
  );
}

export default App;
