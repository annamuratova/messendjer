import Login from './pages/login'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard';

function App() {
  const idToken = JSON.parse(localStorage.getItem('key'));
  console.log(idToken);
  return (
        <Routes>
          <Route path='/' element={idToken === null ? <Login/> : <Dashboard/>}/>
        </Routes>
  )
}

export default App
