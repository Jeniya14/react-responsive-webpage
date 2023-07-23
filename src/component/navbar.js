import React,{useState} from 'react'
import "./navbar.css"
import fb from "../image/fb.png"
import twitter from "../image/twitter.png"
import tele from "../image/tele.png"
import utube from "../image/utube (2).png"
function Navbar() {
    const [click,setclick]=useState(false)
    function handleclose(){
        setclick(!click)
    }
  return (
    <>
    <nav>
        <div className='navbar'>
            <h2>CREY</h2>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <a  href='#crey'> What is Cray</a>
                </li>
                <li>
                    <a  href='#Browse'> Browse Games</a>
                </li>
                <li>
                    <a  href='#Help'> Help </a>
                </li>
                <li>
                    <a  href='#crey'> Download</a>
                </li>
                <li className='socialapp'>
                <img src={tele}  alt='youtube'/>
                <img src={fb}  alt='fb'/>
                <img src={twitter}  alt='twitter'/>
                <img src={utube}  alt='insta'/>
                </li>
            </ul>
            <div className='menu-icon'  onClick={handleclose}>
                <i className={click ? 'fas fa-times':'fas fa-bars'}/>
            </div>  
        </div>
    </nav>
    </>
  )
}

export default Navbar