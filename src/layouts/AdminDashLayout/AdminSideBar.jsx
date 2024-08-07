import React, { useState } from 'react'
 import opina from  '/images/logo3.jpg'
import { Link } from 'react-router-dom'
import { FaAngleDown, FaBusinessTime, FaHome, FaSignOutAlt, FaTableTennis, FaUserAlt } from 'react-icons/fa'
import { FaBookJournalWhills, FaBookOpenReader, FaCodePullRequest } from 'react-icons/fa6'

import { CiSettings } from 'react-icons/ci'

import { SiCloudflareworkers } from 'react-icons/si'
import { usestateContext } from '../../context/ContextProvider'
function AdminSideBar({ isModalOpen, toggleModal }) {
    const { user, setToken, setUser } = usestateContext();
    const onlogout = (ev) => {
        localStorage.removeItem('token');
        setUser(null); // Update user state to null
        setToken(null); // Clear the token in the context
      };

   
     
  return (
    <div>
         <aside className={`employer-aside ${isModalOpen ? "open" : "closed"}`}>
         <div className="side-bar-header">
          <img src={opina} alt="" />
        </div> 
            <div className="sidebar-wrapper">

    <div className='sidebar-links'>
        <span><FaHome/></span>
        <p> <Link onClick={toggleModal} to='/admin'>Dashboard</Link></p>
    </div>
    <div className='sidebar-links'>
        <span><FaBookJournalWhills/></span>
        <p> <Link onClick={toggleModal} to='/admin/soil'>Soil Management</Link></p>
    </div>
    
    <div className='sidebar-links'>
        <span><FaUserAlt/></span>
        <p> <Link onClick={toggleModal} to='/admin/deseases'>Crops Deseases</Link></p>
    </div>
   
    <div className='sidebar-links'>
        <span><FaUserAlt/></span>
        <p><Link onClick={toggleModal} to="/admin/water"> Water Management</Link></p>
    </div>
  
    <div className='sidebar-links'>
        <span><SiCloudflareworkers /></span>
        <p> <Link onClick={toggleModal} to='/admin/remedies'>Remedies</Link></p>
    </div>
    <div className='sidebar-links'>
        <span><FaSignOutAlt /></span>
        <Link onClick={toggleModal} to='/'> Signout</Link>
    </div>
            </div>
        </aside>
    </div>
  )
}

export default AdminSideBar