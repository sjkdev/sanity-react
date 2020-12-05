import React,{ Fragment, useEffect, useState } from 'react'
import sanityClient from '../../../../client'
import { Link } from 'react-router-dom'

const AllPosts = (props) => {

  const [allPostsData, setAllPosts] = useState(null)

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        }
      }`
    )
      .then((data) => setAllPosts(data))
      .catch(console.error)
  }, [])

    return (
        <Fragment>
          <div className="something">
            <h2>{props.title}</h2>
            <h3>{props.blurb}</h3>
          </div>
          <div>
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
              <span key={index}>
              <img src={post.mainImage.asset.url} alt="main image here" />
              <span>
              </span>
              <h2>{post.title}</h2>
              </span>
              </Link>
            ))}
          </div>
        </Fragment>
    )
}

AllPosts.defaultProps = {
    title: 'Blog posts!',
  blurb: 'Welcome to the blog posts page, this is where you will see all the blog posts, which you can click on to go to an individual blog page'
}

export default AllPosts
