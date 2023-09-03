import { useState } from 'react'
import React from 'react'
import { FaBars } from 'react-icons/fa'
import { FaHome, FaHomeFill,  } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
function Nav() {
  const [activeTab, setActiveTab] = useState("")
  const [activeMenu, setActiveMenu] = useState(false)

  const dropDown = () => setActiveMenu(!activeMenu)
  

  return (
    <>
    <div className="w-full flex p-4 items-center">
      <div className="basis-1/2">
          <h1 className="text-2xl">JOASH</h1>
      </div>
      <div className=" flex items-center whitespace-nowrap   space-x-20 justify-end basis-1/2">
         <NavLink
          className={({isActive}) => 
          isActive 
          ? "bg-blue-600 rounded-xl p-2 hidden md:block " 
          : "bg-slate-800 rounded-xl p-2 hidden md:block"}
          to="/"
          
         >
            <h1 className="text-xl">Home</h1>
         </NavLink>

         <NavLink
          className={({isActive}) => 
          isActive 
          ? "bg-blue-600 rounded-xl p-2 hidden md:block " 
          : "bg-slate-800 rounded-xl p-2 hidden md:block"}
          to="/about"
          
         >
            <h1 className="text-xl">About</h1>
         </NavLink>

         <NavLink
          className={({isActive}) => 
          isActive 
          ? "bg-blue-600 rounded-xl p-2 hidden md:block " 
          : "bg-slate-800 rounded-xl p-2 hidden md:block"}
          to="/projects"
          
         >
            <h1 className="text-xl">Projects</h1>
         </NavLink>

         <NavLink
          className={({isActive}) => 
          isActive 
          ? "bg-blue-600 rounded-xl p-2 hidden md:block " 
          : "bg-slate-800 rounded-xl p-2 hidden md:block"}
          to="/contact"
          
         >
            <h1 className="text-xl">Contact</h1>
         </NavLink>

        <FaBars size={28} onClick={dropDown} className="md:hidden cursor-pointer"/>
         
         
      </div>


    </div>

    <div className="h-screen flex flex-col bg-slate-500 bg-opacity-50 absolute top-0"> 
      
    </div>
    </>
  )
}

export default Nav
