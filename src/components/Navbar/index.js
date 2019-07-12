import React from 'react';





function Navbar(props) {
	return(
	<div className="navbar-fixed">
		<nav>
			<div className="nav-wrapper container">
				<span style={{cursor: 'pointer'}}className='left' onClick={() => 
					{document.getElementsByClassName('instructionsModal')[0].classList.remove('hide');
				}}>Instructions</span>
				<a href="/" className='brand-logo center'>{props.message}</a>
				<ul className='right'>
					<li style={{paddingRight: "20px"}}>Your Score: {props.score}</li>
					<li style={{paddingLeft: "20px"}}>Top Score: {props.topScore}</li>
				</ul>
			</div>
		</nav>
	</div>
	)
}



export default Navbar;








