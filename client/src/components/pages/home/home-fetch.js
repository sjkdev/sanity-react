import React,{ Fragment, useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import './home.scss'

 
const home = (props) => {

    const [values, setValues] = useState([]);

    const getValues = async () => {
        const values = await (await fetch('http://localhost:5000/api/values')).json();
        setValues(values);
    };

    useEffect(() => {
        getValues();
    }, []);


    return (
        <Fragment>
        <Helmet>
        <title>Hello! - Digital Wonderland home Page</title>
        <meta name="description" content="creative business consultancy for start-ups, scale-ups & entrepreneurs." />
        <meta name="keywords" content="Digital Wonderland, home Page, Brighton, London, UK, Web Design Experts, UX Design, UI Design, Business Transformation, Affordable web design, Brand Identity, Branding, Visual Identity, Web Design, Mobile app, Saas, Wordpress, React, Vue, Angular, javascript, js, node, service, ecommerce, digital agency, experts, expertise, local, national, international" />
        <meta name="author" content="Sean King, Sorn King, Digital Wonderland" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Container>
        <Row>
        <Col>
                
        <h1>{props.title}</h1>
        <p>{props.blurb}</p>
        </Col>
            </Row>
            <Row>
                <h2>Values from dotnet API</h2>
                {values.map(value => (
                    <ul key={value.id}>
                        <li>{value.name}</li>  
                    </ul>
                ))}
                </Row>
            </Container>
        </Fragment>
    )
}
 
home.defaultProps = {
    title: 'Title info here',
    blurb: 'Main paragraph contant here'
}
 
export default home
