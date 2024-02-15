import './App.css';
import Home from './Component/image/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/image/Login';
import { Signup } from './Component/image/Signup';
import { useState } from 'react';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
    
    <Routes >
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login showAlert = {showAlert}/>} />
        <Route exact path="/signup" element={<Signup showAlert = {showAlert}/>} />

        {/* <Route exact path="/createpost" element={<Homepageto/>} /> */}
       
        
      </Routes>
    </>
    );
}

export default App;
