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
			  <img src= {html5} alt="" />
			  <img src= {css} alt="" />
			  <img src= {js} alt="" />
			  <img src= {react} alt="" />
			  <img src= {bootstrap} alt="" />
			  <img src= {sass} alt="" />
			  <img src= {nodejs} alt="" />
			  <img src= {firebase} alt="" />
			  <img src= {github} alt="" />
			  <img src= {mongo} alt="" />
			  <img src= {vs} alt="" />
			  <img src= {gat} alt="" />
		  </div>
		  </>
	)
  }

  export default Skills