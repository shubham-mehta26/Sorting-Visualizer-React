import React  from 'react';
import './MainPage.css';
import SortingPage from './SortingPage';
import HomePage from './HomePage';
import { Routes , Route } from 'react-router-dom';

export default function MainPage(props) {
  return (
    <div className='mainpage'>
      <Routes>
        <Route path="*" element={<HomePage/>} /> {/* Default route */}
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/sort' element={<SortingPage page = {props.page} darkMode={props.darkMode}/> }/>
      </Routes>
    </div>
  )
}
