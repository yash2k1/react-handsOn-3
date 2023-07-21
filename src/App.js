import './App.css';
import Data from './component/Data';
import Form from './component/Form';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
   <div className='main'>
  
   <Routes>
    <Route path='/' element={<Form/>}/>
    <Route path='/Data' element={<Data/>}/>
   </Routes>
   </div>
  );
}

export default App;

