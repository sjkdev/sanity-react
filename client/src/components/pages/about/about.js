import React, { useState, useEffect } from 'react'
import { Col, Row} from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import './about.scss'

const incCountVal = [1];
const decCountVal = [1];

const about = (props) => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <div>
       <Helmet>
       <title>Helmet Page Title Content</title>
       <meta name="description" content="Helmet application, unique longtail keywords here and pther meta content and seo stuff" />
       </Helmet>
            <h1 className="about">About</h1>
            <Row>
                <Col>
                    <h3>{props.counterOne}</h3>
                    <div className="Counter">Count: {count1}</div>
                    <div>
                        {decCountVal.map(value => {
                            return <button onClick={() => setCount1(count1 - value)}>-{value}</button>
                        })
                        }
                    </div>
                    <div>
                        {incCountVal.map(value => {
                            return <button onClick={() => setCount1(count1 + value)}>+{value}</button>
                        })
                        }
                    </div>
                    <hr />
                    <h3>{props.counterTwo}</h3>
                    <p>Count: {count2}</p>
                    <button onClick={() => setCount2(count2 + 1)}>Increase</button>
                    <button onClick={() => setCount2(count2 - 1)}>Descrease</button>
                </Col>
            </Row>
        </div>
    )
}

about.defaultProps = {
    counterOne: 'Check about.js file to see how this count is render',
    counterTwo: 'Check about.js to see how I have rendered this particular counter, it feels slightly cleabner to my way of thinking',
    author: 'Author'
}

export default about
