import React, { Fragment } from "react";
import Header from './layout/Header'
import Navigation from './layout/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Styles from './assets/sass/global.scss'
import "./assets/sass/global.scss";

// import imgFile from "../../assests/image/Favicon.png";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Navigation />
    </Fragment>
    
  );
};

export default App;