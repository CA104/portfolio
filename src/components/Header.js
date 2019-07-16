import React from 'react'
import white from '../img/arellano_white.png'

const Header = () => {
	return (
		<div>
		<nav className= 'menu'>
		<img src= { white } alt= 'Arellano Designs Logo' className= 'logo' />
		<a href= '#' >Home</a>
		<a href= '#' >About me</a>
		<a href= '#' >See my work</a>
		</nav>
		<h1 className='name'>Carlos Arellano</h1>
	</div>
	)
  }

  export default Header