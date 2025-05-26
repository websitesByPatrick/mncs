import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="flex justify-center items-center space-x-4 h-full">
            <a href="#home" className="text-white hover:text-gray-300 text-2xl">Home</a>
            <a href="/about" className="text-white hover:text-gray-300 text-2xl">About Me</a>
            <a href="/contact" className="text-white hover:text-gray-300 text-2xl">Contact Me</a>
            <a href="/appointment" className="text-white hover:text-gray-300 text-2xl">Book Appointment</a>
        </nav>
    </div>
  )
}

export default Navbar