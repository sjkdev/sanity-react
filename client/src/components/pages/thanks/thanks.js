import React from 'react'
import { Helmet } from 'react-helmet'
import './thanks.scss'

const thanks = () => {
    return (
        <div>
        <Helmet>
        <title>Helmet Page Title Content</title>
        <meta name="description" content="Helmet application, unique longtail keywords here and pther meta content and seo stuff" />
        </Helmet>
            <h1 className="thanks">Thanks</h1>
        </div>
    )
}

export default thanks
