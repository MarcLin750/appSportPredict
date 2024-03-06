import React, { FunctionComponent } from 'react';
import Home from './pages/home';
import NavBar from './components/nav-bar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ConnexionPolar from './pages/connexionPolar';
import PageNotFound from './pages/pages-not-found';
import Footer from './components/footer';
import './styles/app.css'

const App: FunctionComponent = () => {
    
    return (
        <Router>
            <div className='body'>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/connexion-polar" component={ConnexionPolar} />
                    <Route component={PageNotFound} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App;