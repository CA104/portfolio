import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home'
import Contact from './Contact'
import Work from './Work'
import './css/App.css'
import white from './img/full-logo-white.png'
import Skills from './Skills';

const App = () => {

  return (
    <>
  	<Router>
		<nav className= 'menu'>
		<img src= { white } alt= 'Arellano Designs Logo' className= 'logo' />
		<div className= 'menu-items'>
		<Link to= '/' exact component= {Home} > Home </Link>
		<Link to= '/contact' component= {Contact} > Contact </Link>
		<Link to= '/work' component= {Work} > Work </Link>
		<Link to= '/skills' component= {Skills} >Skills</Link>
		</div>
		</nav>

		<div>
			<Route path= '/' exact component= {Home} />
			<Route path= '/contact' component= {Contact} />
			<Route path= '/work' component= {Work} />
			<Route path= '/skills' component= {Skills} />
		</div>
	</Router>
	</>
  );
}

export default App;