import React from 'react'
import './css/App.css'
import nowPlaying from './img/nowPlaying.png'

const Work = (  ) => {
	
	return (
		<div>
			<h1>My work</h1>

			<div className= 'project'>
				<img src= {nowPlaying} alt= 'Now Playing project preview' className= 'nowPlaying' />
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Consequuntur, modi. Repellendus labore tempore, libero, 
			natus at reiciendis nemo exercitationem assumenda alias 
			cupiditate inventore pariatur veritatis repudiandae magnam, 
			ex dolore. Necessitatibus.</p>
			</div>
		</div>
	)
}

export default Work