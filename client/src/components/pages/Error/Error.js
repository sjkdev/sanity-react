import React from 'react'
import { Helmet } from 'react-helmet'

const Error = () => {
    return (
        <div>
        <Helmet>
        <title>Helmet Page Title Content</title>
        <meta name="description" content="Helmet application, unique longtail keywords here and pther meta content and seo stuff" />
        </Helmet>
            <h1 className="error">Error - Page not found</h1>
        </div>
    )
}

export default Error
