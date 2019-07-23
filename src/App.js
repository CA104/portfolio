import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home'
import Contact from './Contact'
import Work from './Work'
import './css/App.css'
import white from './img/full-logo-white.png'

const App = () => {

  return (
    <>
  	<Router>
		<nav className= 'menu'>
		<img src= { white } alt= 'Arellano Designs Logo' className= 'logo' />
		<div className= 'menu-items'>
		<Link to= '/' exact component= {Home} > Home </Link>
		<Link to= '/contact' component= {Contact} > Contact me </Link>
		<Link to= '/mywork' component= {Work} >See my work</Link>
		</div>
		</nav>

		<div>
			<Route path= '/' exact component= {Home} />
			<Route path= '/contact' component= {Contact} />
			<Route path= '/mywork' component= {Work} />
		</div>
	</Router>
	</>
  );
}

export default App;