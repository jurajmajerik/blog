/* eslint-disable react/forbid-prop-types */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../layout';

const IndexPage = ({ data }) => (
  <Layout>
    <div className="home-grid">
      {
        data.allMarkdownRemark.nodes.map((node, index) => {
          if (node.frontmatter.hidden) return null;

          return (
            <Link key={node.id} to={`blog/${node.frontmatter.slug}`}>
              <article className="post-home">
                <h3>{node.frontmatter.title}</h3>
                <small>{node.frontmatter.date}</small>
                <p>{node.frontmatter.spoiler}</p>
              </article>
            </Link>
          );
        })
      }
    </div>
  </Layout>
);

export const query = graphql`
query {
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        slug
        date(formatString: "MMMM D, YYYY")
        title
        spoiler
        hidden
      }
      id
    }
  }
}
`;

IndexPage.propTypes = {
  data: PropTypes.any,
};

IndexPage.defaultProps = {
  data: PropTypes.any,
};

export default IndexPage;
