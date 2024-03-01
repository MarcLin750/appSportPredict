import React, { FunctionComponent } from 'react';
import Home from './pages/home';
import NavBar from './components/nav-bar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ConnexionPolar from './pages/connexionPolar';
import PageNotFound from './pages/pages-not-found';
import './styles/app.css'

const App: FunctionComponent = () => {
    
    return (
        <Router>
            <div className='body'>
                <NavBar />
                <img src="./SAP_logo.png" alt="" />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/connexion-polar" component={ConnexionPolar} />
                    <Route component={PageNotFound} />
                </Switch>
                <footer style={{padding: "20px"}}>
                    <h4>
                        &copy;SAP Sport Predict
                    </h4>
                </footer>
            </div>
        </Router>
    )
}

export default App;