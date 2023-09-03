import React from 'react';
import Todo from './components/todo/todo.jsx';
import { SettingsProvider } from './Context/Setings/SettingsContext';
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
