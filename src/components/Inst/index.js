import React from 'react';

function Inst() {
	return (
		<div className="instructions">
			<div className="modal-content">
				<h4 className="center">Game Rules</h4>
				<ol>
					<li>The goal is to select all images just once</li>
					<li>When you click an image, the images will rearrange.</li>
					<li>You Lose if you select one team twice</li>
					<li>You Win if you select all teams in 12 clicks</li>
					<li>The game restarts after any  Win or Loose</li>
				</ol>
			</div>
			<br />
			<div className="modal-footer center">
				<button className="btn" onClick={() => {
					document.getElementsByClassName('instructions')[0].classList.add('hide');
				}}>Play !</button>
			</div>
		</div>
	)
}





export default Inst;