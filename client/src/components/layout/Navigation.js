import React, { Fragment } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import Home from '../pages/home/home'
import About from '../pages/about/about'
import Blog from '../pages/blog/blog'
import Contact from '../pages/contact/contact'
import Thanks from '../pages/thanks/thanks'
import NotFoundPage from '../pages/Error/Error'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Styles from '../assets/sass/global.scss'
import "../assets/sass/global.scss";

import AllPosts from '../pages/posts/AllPosts'
import OnePost from '../pages/posts/OnePost'

const Navigation = (props) => {
    return (
        <Fragment>
            <Router>
                <Navbar bg="white" expand="lg">
                    <Navbar.Brand href="/">{props.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/about">{props.nav_one}</Nav.Link>
                            <Nav.Link href="/blog">{props.nav_two}</Nav.Link>
                            <Nav.Link href="/contact">{props.nav_three}</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <div>

                    <Switch>
                        {/* dynamic page routes */}
                        <Route path="/" component={Home} exact />
                        <Route path="/home" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/thanks" component={Thanks} />
                        <Route path="/404" component={NotFoundPage} />
                        <Route component={AllPosts} path="/" exact />
                        <Route component={OnePost} path="/:slug" />
                      <Redirect to="/404" />
                    </Switch>
                </div>
            </Router>
        </Fragment>
    )
}

Navigation.defaultProps = {
    title: 'React + Sanity',
    nav_one: 'About',
    nav_two: 'Blog',
    nav_three: 'Contact'
}

export default Navigation
