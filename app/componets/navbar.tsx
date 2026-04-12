import React from 'react'

const Navbar = () => {
  return (
<div className="navbar bg-inherit shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-inherit rounded-box z-1 mt-3 w-24 p-2 shadow">
        <li><a className="rounded-xl hover:bg-indigo-900/10">About</a></li>
        <li>
          <a className="rounded-xl hover:bg-indigo-900/10">Content</a>
          <ul className="p-2">
            <li><a className="rounded-xl hover:bg-indigo-900/10">Projects</a></li>
            <li><a className="rounded-xl hover:bg-indigo-900/10">Demos</a></li>
          </ul>
        </li>
        <li><a className="rounded-xl hover:bg-indigo-900/10">Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl rounded-xl bg-inherit">Mudau R.A</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className="rounded-xl hover:bg-indigo-900/10">About</a></li>
      <li>
        <details className="bg-inherit">
          <summary className="rounded-xl hover:bg-indigo-900/10">Content</summary>
          <ul className="p-2 bg-inherit w-10 z-1">
            <li><a className="rounded-xl hover:bg-indigo-900/10">Projects</a></li>
            <li><a className="rounded-xl hover:bg-indigo-900/10">Demos</a></li>
          </ul>
        </details>
      </li>
      <li><a className="rounded-xl hover:bg-indigo-900/10">Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end rounded-xl">
    <a className="btn rounded-xl bg-indigo-900/10">Let&apos;s Talk</a>
  </div>
</div>

  )
}

export default Navbar
