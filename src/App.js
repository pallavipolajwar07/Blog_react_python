import logo from './logo.svg';
import './App.css';
import Base from './components/Base';
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/Login" element={<Login/>}/>
<Route path="/SignUp" element={<SignUp/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
