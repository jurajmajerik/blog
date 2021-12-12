import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div className="posts">
        <ul>
          {
            data.allMdx.nodes.map(node => (
              <li key={node.id}>
                <h2>
                  <Link to={`/blog/${node.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>Posted: {node.frontmatter.date}</p>
              </li>
            ))
          }
        </ul>
      </div>
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