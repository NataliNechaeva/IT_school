import React from 'react';
import EditableTable from '../Table/table';
import EnglishCard from '../EnglishCards/EnglishCards';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import logo from './eng.png';
import './Menu.scss';




export default function English (){
  return(
    <body className='layout'>
    <Router>
      <header>
          <h1>
            <Link to="/main"><img src={logo} className='logo' alt="logo" height="120px" width="120px"/></Link>
          </h1>
          <nav className='right'>
            <li>
            <Link to="/main">Main</Link>
            </li>
            <li>
            <Link to="/game">Game</Link>
            </li>
          </nav>
      </header>
      <main>
      <Routes>
        <Route className="content" exact path="/main" element={<EditableTable/>} />
        <Route className="content" exact path="/" element={<EditableTable/>} />
        <Route className="content" exact path="/game" element={<EnglishCard />} />
      </Routes>
      </main>
      </Router>
    </body>)
};