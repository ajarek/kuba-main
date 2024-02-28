import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCartSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isClicked, setClicked] = useState(false);

  return (
    <>
    <nav className="h-[80px] w-full flex justify-between items-center px-8  bg-blue-200  ">
      
        <ul className="flex gap-4 text-xl">
          <Link to="/"><li>Home</li ></Link>
          <Link to="/products"><li>Products</li></Link>
        </ul>
        <div className='btn btn-primary sm:hidden' onClick={() => setClicked(!isClicked)}>
          {isClicked ? <IoCloseOutline color='red' size={30} /> : <AiOutlineMenu color='white' size={30}/>}
        </div>
        <Link to="/cart">
          <IoCartSharp size={30}/>
        </Link>
    </nav>
      <ul className={isClicked?"absolute top-[80px] w-full translate-x-[0%] top- transition-transform duration-300 bg-red-300 sm:hidden":" absolute top-[80px]  translate-x-[100%] transition-transform overflow-hidden w-0 sm:hidden"}>
      <Link to="/"><li>Home</li ></Link>
          <Link to="/products"><li>Products</li></Link>
      </ul>
      </>
  )
}

export default Navbar