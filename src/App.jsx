import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode'
import BounceLoader from "react-spinners/BounceLoader";




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
    // الاف ديه مشكلتها انو بيدخل علي الايلس علي طول مش بيدخل علي الجيت يوزير خالص 
    if (localStorage.getItem('userToken')) {
      getUserData();
    } else {
      console.log("catch error here")
    }
  }, [])

  function getUserData() {
    let decodeToken = jwtDecode(localStorage.getItem('userToken'));
    // بص يا معلم الايرور هنا لو انت شيلت الكومين من علي السيت يوزير هيضرب ايرور معاك 
    // setUserData(decodeToken);
    // console.log(decodeToken)
  }
  function logOut() {
    localStorage.removeItem('userToken');
    setUserData(null);
    Navigate('/Login');
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
                <Route path='/' element={<Register />} />
                <Route path='*' element={<h1 className=' text-white'>404 Not Found</h1>} />
                <Route path='/register' element={<Register />} />
                <Route path='login/register' element={<Register />} />
                <Route path='/login' element={<Login getUserData={getUserData} />} />
                <Route path='/home' element={<ProdectRoute><Home /></ProdectRoute>} />
              </Routes>
            </>
        }

      </div>
    </>
  );
}

export default App;
