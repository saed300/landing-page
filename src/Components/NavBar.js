import React from 'react'

const NavBar = () => {
  return (
    <>
      <nav className='navbar'>
        <div class="navbar-container">
          <div class="navbar-heading">
            <h2 className='nav-heading'>Apps</h2>
          </div>
          <ul class="navbar-nav">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </ul>
        </div>
      </nav> 
    </>
  )
}

export default NavBar
