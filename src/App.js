// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
<BrowserRouter>
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/About" element={<About/>}/>
<Route exact path="/Login" element={<Login/>}/>
<Route exact path="/SignUp" element={<SignUp/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
