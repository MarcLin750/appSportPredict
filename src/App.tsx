import React, { FunctionComponent } from 'react';
import ExerciseList from './pages/exercise-list';
import ExercisesDetail from './pages/exercise-detail';
import ConnexionPolar from './pages/connexionPolar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App: FunctionComponent = () => {
    
    return (
        <Router>
            <div>
                <nav>
                    <div>
                        <Link to="/">Exercise</Link>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={ExerciseList} />
                    <Route exact path="/exercises" component={ExerciseList} />
                    <Route path="/exercises/:id" component={ExercisesDetail} />
                    <Route exact path="/connexion-polar" component={ConnexionPolar} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;