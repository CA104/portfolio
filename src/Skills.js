import React from 'react'
import html5 from './img/html5.png'
import js from './img/js.png'
import css from './img/css.png'
import react from './img/react.png'
import bootstrap from './img/bootstrap.png'
import sass from './img/sass.png'
import nodejs from './img/nodejs-logo-png-node-js-on-light-background-1843.png'
import firebase from './img/firebase.png'
import github from './img/github.png'
import mongo from './img/mongodb.png'
import vs from './img/vscode.png'
import gat from './img/gatsbyjs.svg'

const Skills = () => {
	return (
		<>
		<h1>Skills</h1>

	  <div class="languages animated fadeInLeft">
			  <img src= {html5} alt="HTML5 logo" />
			  <img src= {css} alt="CSS logo" />
			  <img src= {js} alt="Javascript logo" />
			  <img src= {react} alt="React logo" />
			  <img src= {bootstrap} alt="Bootsrap logo" />
			  <img src= {sass} alt="Sass logo" />
			  <img src= {nodejs} alt="NodeJS logo" />
			  <img src= {firebase} alt="Firebase logo" />
			  <img src= {github} alt="Github logo" />
			  <img src= {mongo} alt="MongoDB logo" />
			  <img src= {vs} alt="VisualStudioCode logo" />
			  <img src= {gat} alt="Gatsby logo" />
		  </div>
		  </>
	)
  }

  export default Skills