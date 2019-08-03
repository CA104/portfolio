import React from 'react'
import './css/App.css'
import nowPlaying from './img/nowPlaying.png'
import humberPro from './img/humber-pro.png'
import rbnb from './img/rbnb.png'

const Work = (  ) => {
	
	return (
		<div>
			<h1>My work</h1>

			<div className= 'project animated fadeInRight'>
				<a href="http://nowplaying.arellanodesigns.ca/" target= '_blank' rel='noreferrer noopener'>
				<img src= {nowPlaying} alt= 'Now Playing project preview' className= 'nowPlaying' id= 'nowPlaying' />
				</a>
				<p className= 'about-site'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Consequuntur, modi. Repellendus labore tempore, libero, 
			natus at reiciendis nemo exercitationem assumenda alias 
			cupiditate inventore pariatur veritatis repudiandae magnam, 
			ex dolore. Necessitatibus.</p>
			</div>

			<div className= 'project animated fadeInRight'>
				<a href="/" target= '_blank' rel='noreferrer noopener'>
				<img src= {humberPro} alt= 'Humber WDDM final project preview' className= 'nowPlaying' id= 'nowPlaying' />
				</a>
				<p className= 'about-site'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Consequuntur, modi. Repellendus labore tempore, libero, 
			natus at reiciendis nemo exercitationem assumenda alias 
			cupiditate inventore pariatur veritatis repudiandae magnam, 
			ex dolore. Necessitatibus.</p>
			</div>

			<div className= 'project animated fadeInRight'>
				<a href="http://nowplaying.arellanodesigns.ca/" target= '_blank' rel='noreferrer noopener'>
				<img src= {rbnb} alt= 'Now Playing project preview' className= 'nowPlaying' id= 'nowPlaying' />
				</a>
				<p className= 'about-site'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Consequuntur, modi. Repellendus labore tempore, libero, 
			natus at reiciendis nemo exercitationem assumenda alias 
			cupiditate inventore pariatur veritatis repudiandae magnam, 
			ex dolore. Necessitatibus.</p>
			</div>
		</div>
	)
}

export default Work