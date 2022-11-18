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
  } = frontmatter;

  return (
    <Layout pageTitle={title}>
      <article className="">
        <h1 className="text-2xl font-medium tracking-normal text-zinc-800 dark:text-zinc-100">{frontmatter.title}</h1>
        <small className="font-light mt-1 z-10 text-sm text-zinc-500 dark:text-zinc-500">{date}</small>
        <div
          className="mt-4 prose dark:prose-invert"
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
