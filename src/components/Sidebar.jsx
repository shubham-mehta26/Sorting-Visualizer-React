import React , {useState} from "react";
import "./Sidebar.css";


export default function Sidebar(props) {

  const [activeId, setActiveId] = useState('home');

  const handleActive = (event) => {
    let selectedId;
    if(event.target.parentNode.tagName === "LI"){
      selectedId = event.target.parentNode.id;
    }else{
      selectedId = event.target.parentNode.parentNode.id;
    }
    setActiveId(selectedId);
  }

  return (
    <div>
      <nav className="sidebar">
        <div className="sidebar-content">
          <div className="top-content">
            <div className="side-heading">Home</div>
            <div className="content home-button">
              <li onClick={handleActive} id="home" className={`nav-link ${activeId === 'home' ? 'active':''}`}>
                <a href="#">
                  <i undefined="true" className="bx bx-home-alt-2 icon"></i>
                  <span className="text nav-text">Home</span>
                </a>
              </li>
            </div>

            <div className="side-heading">Sorting Algorithms</div>
            <ul className="sorting-algorithms content">
              <li onClick={handleActive} id="bubble-sort" className={`nav-link ${activeId === 'bubble-sort' ? 'active':''}`}>
                <a href="#">
                  <i undefined="true" className="bx bx-chevron-right icon"></i>
                  <span className="text nav-text">Bubble Sort</span>
                </a>
              </li>
              <li  onClick={handleActive} id="insertion-sort" className={`nav-link ${activeId === 'insertion-sort' ? 'active':''}`}>
                <a href="#">
                  <i undefined="true" className="bx bx-chevron-right icon"></i>
                  <span className="text nav-text">Insertion Sort</span>
                </a>
              </li>
              <li onClick={handleActive} id="merge-sort" className={`nav-link ${activeId === 'merge-sort' ? 'active':''}`}>
                <a href="#">
                  <i undefined="true" className="bx bx-chevron-right icon"></i>
                  <span className="text nav-text">Merge Sort</span>
                </a>
              </li>
              <li onClick={handleActive} id="selection-sort" className={`nav-link ${activeId === 'selection-sort' ? 'active':''}`}>
                <a href="#">
                  <i undefined="true" className="bx bx-chevron-right icon"></i>
                  <span className="text nav-text">Selection Sort</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom-content content">
            <div className="side-heading">Theme</div>
            <li className="mode">
              <div className="moon-sun">
                <i undefined="true" className="bx bx-moon icon moon"></i>
                <i undefined="true" className="bx bx-sun icon sun"></i>
              </div>
              <span className="text mode-text nav-text">{`${props.darkMode ? 'Light Mode' : 'Dark Mode'}`}</span>
              <div onClick={props.toggle} className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
            <div className="side-heading">Contact</div>
            <div className="contacts">
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/shubham-mehta26"
                  >
                    <i undefined="true" className="bx bxl-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/shubham_mehta26/"
                  >
                    <i undefined="true" className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/shubham_mehta26"
                  >
                    <i undefined="true" className="bx bxl-twitter" ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
