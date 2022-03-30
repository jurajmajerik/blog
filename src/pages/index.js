import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'


const IndexPage = ({ data }) => {
  return (
    <Layout>
      {
        data.allMdx.nodes.map((node, index) => (
          <article className='post post-home' key={node.id}>
            <span className='path-circle' />
            <span className='path-line-vertical' />
            {
              index === data.allMdx.nodes.length - 1 ?
              <span className='path-line-end' /> :
              null
            }
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p className='meta'>{node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default IndexPage