import React from "react";
import Navbar from "../../Component/homeNavbar/Navbar";
import Carousel from "../../Component/Carousel/Carousel"
import HomeHeader from "../../Component/Header/homeHeader";
import Cardlist from "../../Component/Card/Cardlist"
import Sidebar from "../../Component/Sidebar/Sidebar";
import AddModal from "../../Component/modal/AddModal"


import '../Home/Home.css';



const Home = (props) => {
    return(
        <div className="grid-container" id="main">
            <div>
            <Navbar />
            <Carousel />
            <HomeHeader />
            <Cardlist />
       
            </div>
            <Sidebar {...props} />
            <AddModal />
        </div>
      
    );
};
export default Home;