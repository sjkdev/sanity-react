import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../../../../client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const OnePost = (props) => {
  const [postData, setPostData] = useState(null)
  const { slug } = useParams()
  
  useEffect(() => {
    sanityClient.fetch(
      `*[slug.current == $slug]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        body,
        "name": author->name,
        "authorImage": author->image
      }`,
      { slug }
    )
      .then((data) => setPostData(data[0]))
      .catch(console.error)
  })
  
  if(!postData) return <div>...Loading data</div>
  
  return (
    <Fragment>
      <div className="something">
        <h1>{props.title}</h1>
        <p>{props.blurb}</p>
      </div>
      <div>
        <h2>{postData.title}</h2>
      
      <img src={urlFor(postData.mainImage).width(300).url()} alt="main blog image here" />
      </div>
      <div>
        <BlockContent
          blocks={postData.body}
          projecjId={sanityClient.projecjId}
          dataset={sanityClient.dataset}
        />
      </div>
      <div>
        <img src={urlFor(postData.authorImage).width(75).url()}
          alt="main author image here" />
        <h4>{props.author}: {postData.name}</h4>
      </div>
    </Fragment>
    
  )
}

OnePost.defaultProps = {
  title: 'One post title rendered from default props',
  blurb: 'One post paragraph rendered from default props',
  author: 'Author'
}

export default OnePost
