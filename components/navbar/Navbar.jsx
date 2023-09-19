import React from 'react'
import '../../globalcss/global.css'
import './navbar.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
  })

const Navbar = () => {
  return (
    <div className={poppins.className}>
        <div className="nav">
            <div className="content df jcsb">
                <div className="left"><p>ToDo List</p></div>
                <div className="right"><p>Welcome to the list!</p></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
