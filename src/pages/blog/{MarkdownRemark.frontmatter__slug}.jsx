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
      <article className="">
        <p className="text-base text-zinc-400 dark:text-zinc-500">{date}</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">{frontmatter.title}</h1>
        <figcaption>{hero_image_alt}</figcaption>
        <div
          className="mt-8 prose dark:prose-invert"
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
