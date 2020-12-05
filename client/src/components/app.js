import React, { Fragment } from "react";
import Header from './layout/Header'
import Navigation from './layout/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/sass/global.scss";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Navigation />
    </Fragment>
    
  );
};

export default App;