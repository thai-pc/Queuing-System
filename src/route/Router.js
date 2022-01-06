import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Profile from '../pages/Profile/Profile';
import ForgetPass from '../pages/ForgetPass/ForgetPass';
import Equipment from '../pages/Equipment/Equiment';
import Service from '../pages/Service/Service';
import NumberLevel from '../pages/NumberLevel/NumberLevel';
import Report from '../pages/Report/Report';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/forget-password" element={<ForgetPass />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/equipment" element={<Equipment />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/number-level" element={<NumberLevel />}></Route>
        <Route path="/report" element={<Report />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
