import React, { FunctionComponent } from "react";
import '../styles/nav-bar.css';

const NavBar: FunctionComponent = () => {

    return(
        <nav className="navBar navbar navbar-expand-xxl fixed-top navbar-light bg-light">
            <div className="container-fluid">
                <a href="/"><img src="images/SAP_logo.png" className="sapLogo" alt="SAP" /></a>
                <a className="navTitle" href="/">Sport Predict</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <img src="./images/banniere.png" alt="img" className="banniere me-auto mb-0 mb-lg-0"/>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="/connexion-polar">Polar API</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/toto">Toto</a>
                    </li>
                  </ul>
                </div>
            </div>
       </nav>
    )
}

export default NavBar;