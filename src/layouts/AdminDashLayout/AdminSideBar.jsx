import React, { useState } from 'react'
 import opina from  '/images/logo3.jpg'
import { Link } from 'react-router-dom'
import { FaAngleDown, FaBusinessTime, FaHome, FaSignOutAlt, FaTableTennis, FaUserAlt } from 'react-icons/fa'
import { FaBookJournalWhills, FaBookOpenReader, FaCodePullRequest } from 'react-icons/fa6'

import { CiSettings } from 'react-icons/ci'

import { SiCloudflareworkers } from 'react-icons/si'
import { usestateContext } from '../../context/ContextProvider'
function AdminSideBar() {
    const { user, setToken, setUser } = usestateContext();
    const onlogout = (ev) => {
        localStorage.removeItem('token');
        setUser(null); // Update user state to null
        setToken(null); // Clear the token in the context
      };

      const CustomAccordion = ({ title, children }) => {
        const [isOpen, setIsOpen] = useState(false);
    
        const toggleAccordion = () => {
            setIsOpen(!isOpen);
        };
    
        return (
            <div className="myaccordion-item">
                <div className="myaccordion-header" onClick={toggleAccordion}>
                <span><CiSettings /></span>
                    {title} 
                  <span><FaAngleDown/></span>
                </div>
                {isOpen && (
                    <div className="myaccordion-body">
                        {children}
                    </div>
                )}
            </div>
        );
    };
     
  return (
    <div>
         <aside className='employer-aside'>
         <div className="side-bar-header">
          <img src={opina} alt="" />
        </div> 
            <div className="sidebar-wrapper">

    <div className='sidebar-links'>
        <span><FaHome/></span>
        <p> <Link to='/admin'>Dashboard</Link></p>
    </div>
    <div className='sidebar-links'>
        <span><FaBookJournalWhills/></span>
        <p> <Link to='/admin/soil'>Soil Management</Link></p>
    </div>
    
    <div className='sidebar-links'>
        <span><FaUserAlt/></span>
        <p> <Link to='/admin/deseases'>Crops Deseases</Link></p>
    </div>
   
    <div className='sidebar-links'>
        <span><FaUserAlt/></span>
        <p><Link to="/admin/water"> Water Management</Link></p>
    </div>
  
    <div className='sidebar-links'>
        <span><SiCloudflareworkers /></span>
        <p> <Link to='/admin/remedies'>Remedies</Link></p>
    </div>

    <div className='sidebar-links'>
        <span><FaUserAlt/></span>
        <p> <Link to=''> My Profile</Link></p>
    </div>
  
    <div className='sidebar-links'>
        <span><FaSignOutAlt /></span>
        <Link onClick={onlogout}> Signout</Link>
    </div>
            </div>
        </aside>
    </div>
  )
}

export default AdminSideBar