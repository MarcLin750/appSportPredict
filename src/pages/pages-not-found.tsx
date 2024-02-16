import React, { FunctionComponent } from "react";
import { Link } from 'react-router-dom';

const PageNotFound: FunctionComponent = () => {
    return(
        <div>
            <h1> Cette page n'existe pas !</h1>
            <Link to="/">Retourner à l'accueill</Link>
        </div>
    )
}

export default PageNotFound;