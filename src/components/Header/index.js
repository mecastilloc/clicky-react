import React from 'react';





function Header(props) {
	return (
		<div className="navbar-fixed">
			<nav>
				<div className="nav-wrapper container">
					<span style={{ cursor: 'pointer' }} className='left' onClick={() => {
						document.getElementsByClassName('instructions')[0].classList.remove('hide');
					}}>Game Rules</span>
					<span href="/" className={`brand-logo center ${props.class}`}>{props.message}</span>
					<ul className='right'>
						<li id="points">Points: {props.uScore}</li>
						<li id="max" >Max: {props.maxScore}</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}



export default Header;








