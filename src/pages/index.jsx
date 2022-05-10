/* eslint-disable react/forbid-prop-types */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../layout';

const IndexPage = ({ data }) => (
  <Layout>
    {
      data.allMarkdownRemark.nodes.map((node, index) => (
        <article className="post-home" key={node.id}>
          <span className="path-circle" />
          {
            index !== data.allMarkdownRemark.nodes.length - 1
              ? <span className="path-line-vertical" />
              : null
          }
          <header>
            <h3>
              <Link to={`blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
          </header>
          <p>{node.frontmatter.spoiler}</p>
        </article>
      ))
    }
  </Layout>
);

export const query = graphql`
query {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        slug
        date(formatString: "MMMM D, YYYY")
        title
        spoiler
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
