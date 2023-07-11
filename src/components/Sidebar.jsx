import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  function handleActive(event) {
    let selectedEleid;
    if (event.target.parentNode.tagName === "LI") {
      selectedEleid = event.target.parentNode.id;
    } else {
      selectedEleid = event.target.parentNode.parentNode.id;
    }
    let liElements = document.querySelectorAll("li");
    liElements.forEach((li) => {
      if (li.id === selectedEleid && li.id.length > 0) {
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    });
  }

  function toggleMode(){
    let bodyEle = document.querySelector('body');
    let modeText = document.querySelector('.mode-text');

    bodyEle.classList.toggle('dark');
    if(bodyEle.classList.contains('dark')){
        modeText.innerText="Light Mode";
    }
    else modeText.innerText="Dark Mode";
  }

  return (
    <div>
      <nav className="sidebar">
        <div className="sidebar-content">
          <div className="top-content">
            <div className="side-heading">Home</div>
            <div className="content home-button">
              <li onClick={handleActive} id="home" className="nav-link active">
                <a href="#">
                  <i className="bx bx-home-alt-2 icon"></i>
                  <span className="text nav-text">Home</span>
                </a>
              </li>
            </div>

            <div className="side-heading">Sorting Algorithms</div>
            <ul className="sorting-algorithms content">
              <li onClick={handleActive} id="bubble-sort" className="nav-link">
                <a href="#">
                  <i className="bx bx-chevron-right icon"></i>
                  <span className="text nav-text">Bubble Sort</span>
                </a>
              </li>
              <li onClick={handleActive} id="insertion-sort" className="nav-link">
                <a href="#">
                  <i className="bx bx-chevron-right icon"></i>
                  <span className="text nav-text">Insertion Sort</span>
                </a>
              </li>
              <li onClick={handleActive} id="merge-sort" className="nav-link">
                <a href="#">
                  <i className="bx bx-chevron-right icon"></i>
                  <span className="text nav-text">Merge Sort</span>
                </a>
              </li>
              <li onClick={handleActive} id="selection-sort" className="nav-link">
                <a href="#">
                  <i className="bx bx-chevron-right icon"></i>
                  <span className="text nav-text">Selection Sort</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom-content content">
            <div className="side-heading">Theme</div>
            <li className="mode">
              <div className="moon-sun">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="text mode-text nav-text">Dark Mode</span>
              <div onClick={toggleMode} className="toggle-switch">
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
                    <i className="bx bxl-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/shubham_mehta26/"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/shubham_mehta26"
                  >
                    <i className="bx bxl-twitter" undefined></i>
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
