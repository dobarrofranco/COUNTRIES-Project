import {Route, Routes, useLocation } from "react-router-dom";

import Landing from './pages/Landing/Landing'
import Nav from './pages/Nav/Nav';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Form from './pages/Form/Form';

import style from './App.module.css';

function App() {
  const location = useLocation();

  return (

    <div className={style.App}>

      {location.pathname === '/home' ? <Nav></Nav> : null}

      <Routes>

        <Route
          path='/'
          element={<Landing />}
        />

        <Route
          path='/home'
          element={<Home />}
        />

        <Route
          path="/detail/:id"
          element={<Detail />}
        />

        <Route
          path="/form"
          element={<Form />}
        />


      </Routes>

    </div>

  )

}

export default App
