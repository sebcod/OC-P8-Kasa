//import React from 'react';

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notFound-content"><h1>404</h1>
        <h2>Oups! La page que vous demandez n&#39;existe pas.</h2>
        <nav>
          <Link to={"/"}>Retourner sur la page d&#39;accueil</Link>
        </nav></div>

    </div>
  );
};

export default NotFound;
