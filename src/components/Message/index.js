import React from 'react';



function Footer(props) {
  return (
    <footer >
      <div className="container">
        <div className="row">
          <h5 className="center  footer-update">{props.text}</h5>
        </div>
      </div>
    </footer>
  )
}




export default Footer;