import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../layout'

const BlogPost = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const image = getImage(frontmatter.hero_image)

  return (
    <Layout pageTitle={data.markdownRemark.frontmatter.title}>
      <article className='post'>
        <h1 className="heading">{frontmatter.title}</h1>
        <p className='meta'>{frontmatter.date}</p>
        <GatsbyImage
          image={image}
          alt={frontmatter.hero_image_alt}
        />
        <figcaption>{frontmatter.hero_image_alt}</figcaption>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Layout>
  )
}

export const query = graphql`
query($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      slug
      title
    }
  }
}
`

export default BlogPost