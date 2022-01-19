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
import Systems from '../pages/Systems/Systems';
import AddDevice from '../pages/Device/AddDevice';
import UpdateDevice from '../pages/Device/UpdateDevice';
import DetailDevice from '../pages/Device/DetailDevice';
import AddService from '../pages/Service/AddService';
import DetailService from '../pages/Service/DetailService';
import UpdateServic from '../pages/Service/UpdateServic';
import AddNumber from '../pages/NumberLevel/AddNumber';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/forget-password" element={<ForgetPass />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/device/list" element={<Device />}></Route>
        <Route path="/device/list/add" element={<AddDevice />}></Route>
        <Route path="/device/list/detail" element={<DetailDevice />}></Route>
        <Route path="/device/list/update" element={<UpdateDevice />}></Route>
        <Route path="/service/list" element={<Service />}></Route>
        <Route path="/service/list/add" element={<AddService />}></Route>
        <Route path="/service/list/detail" element={<DetailService />}></Route>
        <Route path="/service/list/update" element={<UpdateServic />}></Route>
        <Route path="/number-level/list" element={<NumberLevel />}></Route>
        <Route path="/number-level/list/add" element={<AddNumber />}></Route>
        <Route path="/report/list" element={<Report />}></Route>
        <Route path="/systems" element={<Systems />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
