import React from "react";
import Links from "../constants/links";
import SocialLinks from "../constants/socialLinks";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const isOpen = true;
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""} `}>
      <button className="close-btn">
        <FaTimes></FaTimes>
      </button>
      <div className="side-container">
        <Links styleClass="sidebar-links"></Links>
        <SocialLinks styleClass="sidebar-icons"></SocialLinks>
      </div>
    </aside>
  );
};

export default Sidebar;
