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
				<img src= {nowPlaying} alt= 'Now Playing project preview' className= 'nowPlaying' />
				</a>
				<p className= 'about-site'>
					<h2>nowPlaying</h2>
				Now playing is a responsive website that allows the user to find the latest 
				movies in their area, it also displays information such as a current rating, release date, synopsis and an 
				official trailer.
				<ul className= 'tools'>
					<li><a href="https://github.com/CA104/movieDB-assignment" className= 'link' target= '_blank' rel='noreferrer noopener'>See the code</a></li>
					<li>HTML</li>
					<li>CSS</li>
					<li>Javascript</li>
					<li>API</li>
					<li>Animate.css</li>
				</ul>
				</p>
			</div>

			<div className= 'project animated fadeInRight'>
				<a href="http://nowplaying.arellanodesigns.ca/" target= '_blank' rel='noreferrer noopener'>
				<img src= {rbnb} alt= 'Breakfast&Chill project preview' className= 'nowPlaying' />
				</a>
				<p className= 'about-site'>
					<h2>Breakfast&Chill</h2>
					Breakfast&Chill is a website that allows the user to explore places to rent 
					in some of the major cities in the world. The user is also able to create a user 
					account and filter rooms based in the city of their interest. Text message and
					email confirmation will be sent to the user when creating an account. 
					<ul className= 'tools'>
						<li><a href="https://github.com/CA104/rbnb" className= 'link' target= '_blank' rel='noreferrer noopener'>See the code</a></li>
						<li>NodeJS</li>
						<li>MongoDB</li>
						<li>Mongoose</li>
						<li>Express</li>
						<li>Handlebars</li>
						<li>Animate.css</li>
						<li>Twilio</li>
					</ul>
					</p>
			</div>

			<div className= 'project animated fadeInRight'>
				<a href="https://humbermediapros.ca/#" target= '_blank' rel='noreferrer noopener'>
				<img src= {humberPro} alt= 'Humber WDDM final project preview' className= 'nowPlaying' />
				</a>
				<p className= 'about-site'>
				<h2>Humber WDDM-2019</h2>
				This project was created by the alumni of the Web Designs and Development porgram. The site 
				was created to promote the grad show and display some of the skills learned by the other two porgrams 
				Graphic Design and 3D printing.
				<ul className= 'tools'>
					<li><a href="https://github.com/team-humber-web-2019/humber-media-pros" className= 'link' target= '_blank' rel='noreferrer noopener'>See the code</a></li>
					<li>Gatsby</li>
					<li>Sass</li>
					<li>Bootstrap</li>
					<li>GraphQL</li>
					<li>GIT</li>
					<li>GitHub</li>
				</ul>
				</p>
			</div>

		</div>
	)
}

export default Work