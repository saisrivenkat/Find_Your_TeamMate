import React from 'react';
import Register from './Register/index'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Login from './Register/Login';
import Dashboard from './Dashboard'
import { useState } from 'react';

function App() {
  const [token,settoken]= useState();
  const [user,setuser]=useState();

  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login token={token} settoken={settoken} setuser={setuser} />} />
        <Route path="/register" element={<Register token={token} settoken={settoken} />} />
        <Route  path="/dashboard" element={<Dashboard token={token} user={user} />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
};

export default App;
