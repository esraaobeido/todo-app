import React from 'react';
import Todo from './components/ToDo/index';
import { SettingsProvider } from './Context/Settings/index';
import Header from './components/Header/index';
import Footer from './components/Footer/index';

export default function App() {
  return (
    <SettingsProvider>
      <Header/>
      <Todo/>
      <Footer/>
    </SettingsProvider>
  );
}
