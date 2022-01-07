import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Profile from '../pages/Profile/Profile';
import ForgetPass from '../pages/ForgetPass/ForgetPass';
import Service from '../pages/Service/Service';
import NumberLevel from '../pages/NumberLevel/NumberLevel';
import Report from '../pages/Report/Report';
import Device from '../pages/Device/Device';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/forget-password" element={<ForgetPass />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/device/list" element={<Device />}></Route>
        <Route path="/service/list" element={<Service />}></Route>
        <Route path="/number-level/list" element={<NumberLevel />}></Route>
        <Route path="/report/list" element={<Report />}></Route>
        <Route path="/system/role" element={<Report />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
