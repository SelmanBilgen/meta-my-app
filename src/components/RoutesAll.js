import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../pages/Home';
import OrderOnline from '../pages/Home';
import Reservations from '../pages/Reservations';
import Login from '../pages/Home';

const RoutesAll = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        Home
      </Route>
      <Route path='/about' element={<About />}>
        About
      </Route>
      <Route path='menu' element={<Menu />}>
        Menu
      </Route>
      <Route path='/order-online' element={<OrderOnline />}>
        OrderOnline
      </Route>
      <Route path='/reservations' element={<Reservations />}>
        Reservations
      </Route>
      <Route path='/login' element={<Login />}>
        Login
      </Route>
    </Routes>
  );
};

export default RoutesAll;
