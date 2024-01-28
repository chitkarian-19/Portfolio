import './App.css';
import {Navbar} from '../src/components/Navbar/Navbar';
import {Info} from '../src/components/Info/Info';
import { PastExperience } from './components/PastExperience/PastExperience';
import { Project } from './components/Project/Project';
import { Contact } from './components/Contact/Contact';
function App() {
  return (
   <div className='body-container'>
      <Navbar>

      </Navbar>
      <Info>

      </Info>
      <hr />
      <PastExperience>

      </PastExperience>
      <hr />
      <Project>

      </Project>
      <hr />
      <Contact>
        
      </Contact>
   </div>

  );
}

export default App;
