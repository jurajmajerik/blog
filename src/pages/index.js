import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'


const IndexPage = ({ data }) => {
  return (
    <Layout>
      {
        data.allMdx.nodes.map(node => (
          <article className='post' key={node.id}>
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