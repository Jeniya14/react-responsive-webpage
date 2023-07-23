import React from 'react'
import "./crey.css"
import man from '../image/man.png'
function Crey() {
  return (
    <div  className='crey-container' id='#crey'>
        <div className='crey-heading'>
            <h3>
            Explore a world of games and experiences
            </h3>
            <p>
            BECOME A <span>GAME CREATOR</span>
            </p>
        </div>
        <div className='crey-main'> 
            <div className='crey-man-image'>
                <img src={man} alt='Manong'/>
            </div>
            <div className='crey-flex'>
                <div className='crey-flex-div'>
                <h4>Free Game Creation</h4>
                Create games for free,
                and publish them to community
                 of game enthusiasts.
                </div>
                <div className='crey-flex-div'>
                <h4>intuitive tools</h4>
                Our Emphasis on visual
                scripting means you can
                focus on designing the best
                possible games.
                </div>
            </div>
            <div className='crey-flex-r'>
                <div className='crey-flex-div'>
                <h4>earn cash</h4>
                Participate in Creator
                Competitions, and be a part
                of our incentive program.
                </div>
                <div className='crey-flex-div'>
                <h4>publish your creation to a community of game enthusiasts</h4>
                    Publish you game to your community of like-minded creators as you embark on your game creation journey.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Crey