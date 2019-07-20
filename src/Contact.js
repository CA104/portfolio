import React from 'react'
import linkedin from './img/linkedin.png'
import git from './img/github-sign.png'

const Contact = (  ) => {

	return (
		<div>
			<h1>
				Contact me!
			</h1>

			<div className= 'contact'>
				<a href= 'mailto:carlos_arellano@hotmail.ca'>Email: carlos_arellano@hotmail.ca</a>
				<p>Phone: (647) 986-4001</p>
				<div>
				<img id= 'linkedIn' src= {linkedin} alt="" className= 'linkedin' />
				<img id= 'gitHub' src= {git} alt="" className= 'git' />
			</div>
			</div>
		</div>
	)
}

export default Contact