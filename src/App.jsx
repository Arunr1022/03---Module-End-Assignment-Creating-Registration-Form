import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landingpage from './Components/Landingpage';
import SignIn from './Components/signin';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Landingpage/>} />
      <Route path="/Signin" element={<SignIn/>} />
    </Routes>
    </>
  )
}

export default App
