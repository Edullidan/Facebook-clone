import React from "react";
import { useRouter } from "next/router";
import styles from "./Sidenav.module.css";
import { CiSaveDown1 } from "react-icons/ci";
import { MdGroups } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { TbHomeRibbon } from "react-icons/tb";
import { MdOutlineEventAvailable } from "react-icons/md";

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

function Sidenav() {
  const router = useRouter();

  const navigateToProfile = () => {
    router.push("/Profile"); 
  };

 
  
    return (
      <div className={styles.sidenav}>
       
        <div className={styles.sidenav__buttons}>
        <button className={styles.sidenav__button} onClick={navigateToProfile}>
            <FaUser />
            <span>Profile</span></button>
          <button className={styles.sidenav__button}>
            <FaUserFriends />
            <span>Friends</span>
          </button>
          <button className={styles.sidenav__button}>
            <FaRegCompass />
            <span>Explore</span>
          </button>
          <button className={styles.sidenav__button}>
            <CiSaveDown1/>
            <span>Saved</span>
          </button>
          <button className={styles.sidenav__button}>
            <MdGroups />
            <span>Groups</span>
          </button>
         
          <button className={styles.sidenav__button}>
            <BiSolidVideos />
            <span>Videos</span>
          </button>
          <button className={styles.sidenav__button}>
            <TbHomeRibbon />
            <span>Ribbon</span>
          </button>
          <button className={styles.sidenav__button}>
            <MdOutlineEventAvailable />
            <span>Event</span>
          </button>
          
        </div>
        <div className={styles.sidenav__more}>
          <button className={styles.sidenav__button}>
            <FaBars />
            <span>More</span>
          </button>
        </div>
      </div>
    );
  }
  
  export default Sidenav;