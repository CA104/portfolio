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
			<h2>About me</h2>
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
				<a href="https://www.linkedin.com/in/carlos-arellano-43a530105/" target= '_blank' rel='noreferrer noopener' >
				<img id= 'linkedIn' src= {linkedin} alt="" className= 'linkedin' />
				</a>
				<a href="https://github.com/" target= '_blank' rel='noreferrer noopener' >
				<img id= 'gitHub' src= {git} alt="" className= 'git' />
				</a>
			</div>
			
    	</div>
		</>
	)
}

export default Home