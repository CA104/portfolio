import React from 'react'
import linkedin from './img/linkedin.png'
import git from './img/github-sign.png'
import resume from './img/Resume.pdf'

const Contact = (  ) => {

	return (
		<div>
			<h1>
				Contact me
			</h1>

			<div className= 'contact animated fadeInRight'>
				<a href= 'mailto:carlos_arellano@hotmail.ca' className= 'info'>carlos_arellano@hotmail.ca</a>
				<p>[647] 986-4001</p>
				<a href={resume} download= '' className= 'info'>My Resume</a>
				<div>
				<a href="https://www.linkedin.com/in/carlos-arellano-43a530105/" target= '_blank' rel='noreferrer noopener' >
				<img id= 'linkedIn' src= {linkedin} alt="" className= 'linkedin' />
				</a>
				<a href="https://github.com/" target= '_blank' rel='noreferrer noopener' >
				<img id= 'gitHub' src= {git} alt="" className= 'git' />
				</a>
			</div>

			<div>
				<form action=""></form>
			</div>
			</div>
		</div>
	)
}

export default Contact