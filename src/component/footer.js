import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <div className='footer-container'>
        <div  className='footer-main'>
        <div className='footer-heading'>
            <h1>
                CREY
            </h1>
        </div>
        <div className='footer-items'>
            <h3>DOWNLOAD</h3>
            <ul>
                <li>Pc</li>
                <li>Tablet</li>
                <li>Mobile</li>
            </ul>

        </div>
        <div className='footer-items'>
            <h3>COMPANY</h3>
            <ul>
                <li>About</li>
                <li>Help</li>
                <li>Jobs</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Sitemap</li>
            </ul>
        </div>
        <div className='footer-items'>
        <h3>Connect</h3>
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Youtube</li>
                <li>Twitch</li>
                <li>Discord</li>
            </ul>
        </div>
        <div className='footer-items'>
        <h3>Browse</h3>
            <ul>
                <li>All Games</li>
                <li>Shooting Games</li>
                <li>Platform & Obby</li>
                <li>Online Puzzle Games</li>
                <li>Most Played</li>
            </ul>
        </div>
        </div>
        <p>JeniyaKamali.© 2023 CREY Games</p>
    </div>
  )
}

export default Footer