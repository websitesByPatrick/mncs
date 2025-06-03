import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
        <nav className="flex justify-center items-center space-x-6 h-full">
            <Link href="/" className="text-white hover:bg-slate-900 text-xl px-4 py-2 rounded-full">Home</Link>
            <Link href="/about" className="text-white hover:bg-slate-900 text-xl px-4 py-2 rounded-full">About Me</Link>
            <Link href="/contact" className="text-white hover:bg-slate-900 text-xl px-4 py-2 rounded-full">Contact Me</Link>
            <Link href="/appointment" className="text-white hover:bg-slate-900 text-xl px-4 py-2 rounded-full">Book Appointment</Link>
        </nav>
    </div>
  )
}

export default Navbar