import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode'
import BounceLoader from "react-spinners/BounceLoader";
import Intro from './Pages/Intro';
import AddNote from './Pages/AddNote';





function App() {
  // preloader
  const [loading, setLoading] = useState(false);
  // data register 
  const [userData, setUserData] = useState(null)
  let Navigate = useNavigate();
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    if (localStorage.getItem('userToken')) {
      getUserData();
    } else {
      console.log("catch error here")
    }
  }, [])

  function getUserData() {
    let decodeToken = jwtDecode(localStorage.getItem('userToken'));
    setUserData(decodeToken);
    // console.log(decodeToken)
  }
  function logOut() {
    localStorage.removeItem('userToken');
    setUserData(null);
    Navigate('/login');
  }
  function ProdectRoute({ children }) {
    if (!localStorage.getItem('userToken')) {
      return Navigate('/Login');
    } else {
      return children;
    }
  }

  return (
    <>
      {/* <Particles /> */}
      <div className='background'>
        {
          loading ?
            <div className='APP-loading'>
              <div className=' text-center'>
                <BounceLoader size={200} color={"#f37a24"} loading={loading} />
                <p className=' fs-1 fw-bold text-white'>Please Wait ...</p>
              </div>
            </div>
            :
            <>
              <Header userData={userData} logOut={logOut} />
              <Routes>
                <Route path='/' element={<Intro userData={userData} />} />
                <Route path='*' element={<h1 className=' text-white'>404 Not Found</h1>} />
                <Route path='/register' element={<Register />} />
                <Route path='login/register' element={<Register />} />
                <Route path='/login' element={<Login getUserData={getUserData} />} />
                <Route path='/intro' element={<Intro userData={userData} />} />
                <Route path='/intro/register' element={<Register />} />
                <Route path='/intro/login' element={<Login />} />
                <Route path='/home' element={<ProdectRoute><Home /></ProdectRoute>} />
                <Route path='intro/home' element={<ProdectRoute><Home /></ProdectRoute>} />
                <Route path='intro/addnote' element={<ProdectRoute><AddNote /></ProdectRoute>} />
                <Route path='addnote' element={<ProdectRoute><AddNote /></ProdectRoute>} />
              </Routes>
            </>
        }

      </div>
    </>
  );
}

export default App;
