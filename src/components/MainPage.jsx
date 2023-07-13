import React ,{useEffect}  from 'react';
import './MainPage.css';
import SortingPage from './SortingPage';
import HomePage from './HomePage';

export default function MainPage(props) {
  
  useEffect(()=>{ 
  },[ props.page])
  
  return (
    <div className='mainpage'>
      {props.page === 'home' ? <HomePage/> : null}
      {props.page === 'bubble-sort' ? <SortingPage/> : null}
    </div>
  )
}
