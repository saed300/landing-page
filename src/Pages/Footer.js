import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'


const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="footer-container">
          <div class="social">
            <a href="https://facebook.com">
              <FaFacebook className='facebook' />
            </a>
            <a href="https://twitter.com">
              <FaTwitter className='twitter'/>
            </a>
            <a href="https://google.com">
              <FaGoogle className='google' />
            </a>
            <a href="https://instagram.com">
              <FaInstagram className='instagram'/>
            </a>
          </div>
          <p className='footer-font-text'>Privacy Policy</p>
          <p className='footer-font-text'>© 2017 Google. All Rights Reserved. </p>
        </div>
        <div className='footer-list'>
          <h3 className='footer-heading'>Apps</h3>
          <ul className='footer-ul'>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Your Cart</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
