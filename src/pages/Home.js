import React from "react";
import styles from "../styles/HomePage.module.css";
import Sidenav from "./Navigation/Sidenav";
import { IoMdHome } from "react-icons/io";
import { BsShopWindow } from "react-icons/bs";
import { MdPersonalVideo } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import {
    FaHome,
    FaSearch,
    FaRegCompass,
    FaRegImages,
    FaRegEnvelope,
    FaRegHeart,
    FaBars,
    FaUserFriends ,
    FaUser,
    RiMemoriesFill,
    
    
  } from "react-icons/fa";







function Homepage() {
  return (
    <div className={styles.homepage}>
         <img
          className={styles.logo}
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
          alt="Logo"
        />
         <div className={styles.buttons}>
         <button className={styles.button}>
            < IoMdHome/>
            <span>Home</span>
          </button>
          <button className={styles.button}>
            <FaUserFriends />
            <span>Friends</span> 
</button>
            <button className={styles.button}>
            < BsShopWindow/>
            <span>Marketplace</span>
          </button>

          <button className={styles.button}>
            < MdPersonalVideo/>
            <span>Video</span>
            </button>
            <button className={styles.button}>
            < CgGames/>
            <span>Games</span>
            </button>
            
            </div>
            
     <div className={styles.sidenav__homepage}> 
      <Sidenav></Sidenav></div>
      
    </div>
  );
}

export default Homepage;