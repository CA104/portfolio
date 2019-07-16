import React from 'react';
import './css/App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import linkedin from './img/linkedin.png'
import git from './img/github-sign.png'


const App = () => {

  return (
    <>
  	<Header />
    <div className='bio'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Consequuntur, modi. Repellendus labore tempore, libero, 
			natus at reiciendis nemo exercitationem assumenda alias 
			cupiditate inventore pariatur veritatis repudiandae magnam, 
			ex dolore. Necessitatibus.
			<br />
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
			Magnam doloribus, optio dolorum dolorem sint, voluptatibus 
			aut at hic, laboriosam omnis doloremque modi voluptas repellat
			 culpa porro et animi incidunt consequuntur.
			</p>
			<img src='https://vignette.wikia.nocookie.net/deathbattlefanon/images/9/93/Dex.png/revision/latest?cb=20151129030815' alt='' className='headshot' />
			<div>
				<img id= 'linkedIn' src= {linkedin} alt="" className= 'linkedin' />
				<img id= 'gitHub' src= {git} alt="" className= 'git' />
			</div>
    	</div>
    <Skills />
	</>
  );
}

export default App;