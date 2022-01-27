import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Profile from '../pages/Profile/Profile';
import ForgetPass from '../pages/ForgetPass/ForgetPass';
import Service from '../pages/Service/Service';
import Report from '../pages/Report/Report';
import Device from '../pages/Device/Device';
import AddDevice from '../pages/Device/AddDevice';
import UpdateDevice from '../pages/Device/UpdateDevice';
import DetailDevice from '../pages/Device/DetailDevice';
import AddService from '../pages/Service/AddService';
import DetailService from '../pages/Service/DetailService';
import UpdateServic from '../pages/Service/UpdateServic';
import NumberLevel from '../pages/NumberLevel/NumberLevel';
import AddNumber from '../pages/NumberLevel/AddNumber';
import DetailNumber from '../pages/NumberLevel/DetailNumber';
import Role from '../pages/Systems/Role';
import AddRole from '../pages/Systems/AddRole';
import UpdateRole from '../pages/Systems/UpdateRole';
import Account from '../pages/Systems/Account';
import AddAccount from '../pages/Systems/AddAccount';
import UpdateAccount from '../pages/Systems/UpdateAccount';
import Diary from '../pages/Systems/Diary';

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
        <Route
          path="/number-level/list/detail"
          element={<DetailNumber />}
        ></Route>
        <Route path="/report/list" element={<Report />}></Route>
        <Route path="/systems/role/list" element={<Role />}></Route>
        <Route path="/systems/role/add" element={<AddRole />}></Route>
        <Route path="/systems/role/update" element={<UpdateRole />}></Route>
        <Route path="/systems/account/list" element={<Account />}></Route>
        <Route path="/systems/account/add" element={<AddAccount />}></Route>
        <Route
          path="/systems/account/update"
          element={<UpdateAccount />}
        ></Route>
        <Route path="/systems/diary/list" element={<Diary />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
