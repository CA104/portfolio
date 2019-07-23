import React from 'react'
import './css/App.css'
import Skills from './Skills'
import linkedin from './img/linkedin.png'
import git from './img/github-sign.png'

const Home = () => {
	return (
		<>
		<h1>Carlos Arellano</h1>
		<div className='bio animated fadeInRight'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Consequuntur, modi. Repellendus labore tempore, libero, 
			natus at reiciendis nemo exercitationem assumenda alias 
			cupiditate inventore pariatur veritatis repudiandae magnam, 
			ex dolore. Necessitatibus.
			</p>
			<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
			Magnam doloribus, optio dolorum dolorem sint, voluptatibus 
			aut at hic, laboriosam omnis doloremque modi voluptas repellat
			 culpa porro et animi incidunt consequuntur.
			</p>

			<div>
				<img id= 'linkedIn' src= {linkedin} alt="" className= 'linkedin' />
				<img id= 'gitHub' src= {git} alt="" className= 'git' />
			</div>
			
    	</div>
		<Skills />
		</>
	)
}

export default Home