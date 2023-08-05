import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Professional from './components/Professional';
import Home from './components/Home';
import Addprofessional from './components/Addprofessional';
import Layout from './components/Layout'
import Update from './components/Update';
import Remove from './components/Remove';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/Home' element={<Home />} />
            <Route path='/Professional' element={<Professional />} />
            <Route path='/Addprofessional' element={<Addprofessional />} />
            <Route path='/Update/:id' element={<Update />} />
          </Route>
          
          <Route path='/Remove' element={<Remove />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
