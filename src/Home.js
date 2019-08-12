import React from 'react'
import './css/App.css'
import linkedin from './img/linkedin.png'
import git from './img/github-sign.png'

const Home = () => {
	return (
		<>
		<h1>Carlos Arellano</h1>
		<div className='bio animated fadeInRight'>
			<h2>About me</h2>
      <p>Hey there, my name is Carlos Arellano. A FrontEnd Web Developer 
		  currently attending the Web Design and Development program at humber. 
			I began my journey in the Developing world almost 2 years ago when I was 
			enrolled in a program at Sheridan College. In the last couple of years I have 
			become quite passionate for creating experiences using different tools and colours 
			for the people using my websites. 
			</p>
			<p>
			I consider myself someone that is a curious person, always looking to find new 
			ways to do things and learn new ways to solve an issue.
			In the time that I have been involved in the technology field, I have been able to 
			learn multiple languages like Javascript, HTML and CSS, also frameworks such as 
			ReactJS, NodeJS and CSS frameworks like Bootstrap and Sass.
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