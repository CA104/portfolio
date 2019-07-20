import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home'
import Contact from './Contact'
import './css/App.css'
import white from './img/full-logo-white.png'

const App = () => {

  return (
    <>
  	<Router>
		<nav className= 'menu'>
		<img src= { white } alt= 'Arellano Designs Logo' className= 'logo' />
		<Link to= '/' exact component= {Home} > Home </Link>
		<Link to= '/contact' component= {Contact} > Contact me </Link>
		<Link to= '/' >See my work</Link>
		</nav>

		<div>
			<Route path= '/' exact component= {Home} />
			<Route path= '/contact' component= {Contact} />
		</div>
	</Router>
	</>
  );
}

export default App;