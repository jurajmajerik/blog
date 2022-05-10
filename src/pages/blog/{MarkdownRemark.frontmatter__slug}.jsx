/* eslint-disable react/forbid-prop-types, react/no-danger, camelcase */

import * as React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../layout';

const BlogPost = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const {
    title,
    date,
    hero_image_alt,
  } = frontmatter;
  return (
    <Layout pageTitle={title}>
      <article className="post">
        <h1 className="heading">{frontmatter.title}</h1>
        <p className="meta">{date}</p>
        <figcaption>{hero_image_alt}</figcaption>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Layout>
  );
};

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
`;

BlogPost.propTypes = {
  data: PropTypes.any,
};

BlogPost.defaultProps = {
  data: PropTypes.any,
};

export default BlogPost;
