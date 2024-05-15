import './App.css';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import SearchBar from './components/SearchBar/SearchBar';
import Places from "./components/Places/Places";


function App() {
  return (
    <Router>
      <div className="holder">
        <Header />
        <SearchBar />
        <Places />
      </div>
    </Router>
  );
}

export default App;