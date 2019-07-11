import React from 'react';
// import './Modal.css';



function Modal() {
	return (
		<div className="instructionsModal">
			<div className="modal-content">
				<h4 className="center">How to Play</h4>
				<ol>
					<li>The goal is to select all images just once</li>
					<li>When you click an image, the images will rearrange.</li>
					<li>You Lose if you select one team twice</li>
					<li>You Win if you select all teams in 12 clicks</li>
				</ol>
			</div>
			<br />
			<div className="modal-footer center">
				<button className="btn" onClick={() => {
					document.getElementsByClassName('instructionsModal')[0].classList.add('hide');
				}}>Go and Play!</button>
			</div>	
		</div>
	)
}





export default Modal;