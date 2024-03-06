import React, { FunctionComponent } from "react";
import '../styles/nav-bar.css';

const NavBar: FunctionComponent = () => {

    return(
        <nav className='navBar'>
            <div className="navLogo">
                <a href="/"><img src="images/SAP_logo.png" className="sapLogo" alt="SAP" /></a>
                <a className="navTitle" href="/">Sport Predict</a>
                <img src="images/banniere.png" className="banniere"/>
            </div>
       </nav>
    )
}

export default NavBar;