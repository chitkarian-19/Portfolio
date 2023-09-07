import logo from './logo.svg';
import headerImage from './images/lgbtq_bg.jpg';
import './App.css';

function App() {
  return (
    <div className='mainBody container-fluid'>

      <div className='header row'>
        {/* header image*/}

        <div className='headerImage'>
          <img src={headerImage} alt='header image'></img>
        </div>

      </div>

    </div>
  );
}

export default App;
