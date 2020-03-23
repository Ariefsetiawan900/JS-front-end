import React from "react"
import bookLogo from "../../Images/logo-icon.png"
import { connect, useDispatch, useSelector } from 'react-redux'
import { getSearch, getAllBook, getSortDate, getSortTitle, getSortGenre, getAvail } from "../../redux/action/book"



const Navbar = () => {
  const result = useSelector(state=>state.book)
  const dispatch = useDispatch()

  const handleSearch =async (title) => {
    await dispatch(title === '' ? getAllBook() :getSearch(title))
    console.log('reeees', result)
  
  }

  const handleSortGenre = () => {
    dispatch(getSortGenre())
  }
  const handleSortTitle = () => {
    dispatch(getSortTitle())
  }

  const handleSortDate = () => {
    
// console.log("arif");

    dispatch(getSortDate())

  }

  const handleAvail = () => {
    dispatch(getAvail())
  }
  
  const openNav = () => {
    // document.getElementById("mySidenav").style.width = "100%";
    if (window.matchMedia("(max-width: 1200px)").matches) {
      document.getElementById("mySidebar").style.width = "100%"
      document.getElementById("main").style.marginLeft = "0"
      document.getElementById("openSidebar").style.display = "none"
    } else {
      document.getElementById("mySidebar").style.width = "300px"
      document.getElementById("main").style.marginLeft = "300px"
      document.getElementById("openSidebar").style.display = "none"
    }

    return false;
  }
  return (
    <div className="top-nav-container">
      <nav className="top-nav">
        <ul>
          <li id="openSidebar">
            <div className="topnav-btn">
              <i onClick={openNav} className="fas fa-bars"></i>
            </div>
          </li>
          <li> 
          All Catagories <i className="fa fa-caret-down"></i>
          </li>
          <li>
            All Time <i className="fa fa-caret-down"></i>
          </li>
          <li>
            <input
              style={{ fontFamily: "Arial, FontAwesome" }}
              type="text"
              placeholder="&#xf002; Search book"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </li>
          <li>
          <button onClick={() => handleSortDate()}>All Date</button>
          </li>
          <li>
          <button onClick={() => handleSortTitle()}>All Title</button>
          </li>
          <li>
          <button onClick={() => handleAvail()}>All Available</button>
          </li>
        </ul>
        <a>
          <img className="logo" src={bookLogo} alt="logo.png" />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
