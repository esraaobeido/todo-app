import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToDo from './components/ToDo/index';
import { SettingsProvider } from './Context/Settings/index';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import SettingsForm from './components/Settings/SettingsForm'; 
import LoginProvider from './Context/Auth/index'; 
import Auth from './components/Auth/index';
import Login from './components/Login/index';


export default function App() {
  return (
    <Router>
      <SettingsProvider>
        <LoginProvider>
          <Auth capability="create">
            <div>Users with create access can see this</div>
          </Auth>

          <Auth capability="update">
            <div>Users with update access can see this</div>
          </Auth>

          <Auth capability="delete">
            <div>Users with delete access can see this</div>
          </Auth>
          <Header />
          <Routes>
            <Route path="/" element={<ToDo />} />
            <Route path="/settings" element={<SettingsForm />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </LoginProvider>
      </SettingsProvider>
    </Router>
  );
}
