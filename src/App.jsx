import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landingpage from './Components/Landingpage';
import SignIn from './Components/signin';
import Signup from './Components/Signup';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Landingpage/>} />
      <Route path="/Signin" element={<SignIn/>} />
      <Route path="/Signup" element={<Signup/>} />
    </Routes>
    </>
  )
}

export default App
