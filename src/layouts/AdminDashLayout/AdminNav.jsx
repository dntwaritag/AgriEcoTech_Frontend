import React, { useState, useEffect } from "react";
import { FaBars, FaRegBell, FaSearch, FaTimes, FaTrash } from "react-icons/fa";
import axiosclient from "../../axiosClient";
import { TiThLargeOutline } from "react-icons/ti";
import notPhoto from "/images/notPhoto.png";
import { Link } from "react-router-dom";

const AdminNav = () => {
 

  
  return (
    <div className="Super-nav-wrapper">
      <div className="bar-container">
        <FaBars />
      </div>


      <div className="super-icons-wrapper">
        <div className="super-icons">
          <FaSearch />
        </div>
        <div className="super-icons">
          <TiThLargeOutline />
        </div>
        {/* <div className="super-icons">
          <FaRegBell onClick={handleNotifactionList} />
          {unreadCount > 0 && (
            <span className="notification-count">{unreadCount}</span>
          )}
          {notificationList && (
            <div className="notifications-list">
              <div style={{ float: "right", fontSize: "12px" }}>
                <FaTimes onClick={handleNotifactionList} />
              </div>
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`notification-item ${
                    notification.read_at ? "read" : "unread"
                  }`}
                >
                  <div className="noticatoin-link">
                  <Link to={`/admin/talent-request/${notification.id}`}>
                    {notification.companyName}
                  </Link>
                  <button onClick={() => markAsRead(notification.id)}>
                    {notification.read_at ? "Readed" : "Mark as read"}
                  </button>
                  </div>
                
                  <FaTimes
                    onClick={() => removeNotification(notification.id)}
                    style={{ float: "right", fontSize: "12px" }}
                  />
                </div>
              ))}
            </div>
            
          )}
        </div> */}
        <div className="super-profile">
          <img src={notPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
