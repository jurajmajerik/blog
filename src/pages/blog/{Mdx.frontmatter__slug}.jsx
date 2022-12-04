import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../layout';

const BlogPost = ({ data, children }) => {
  const { mdx } = data;
  const { frontmatter } = mdx;
  const {
    title,
    date,
  } = frontmatter;

  return (
    <Layout pageTitle={title}>
      <article className="">
        <h1 className="text-2xl font-medium tracking-normal text-zinc-800 dark:text-zinc-100">{frontmatter.title}</h1>
        <small className="font-light mt-1 z-10 text-sm text-zinc-500 dark:text-zinc-500">{date}</small>
        <div className="mt-4 prose dark">{children}</div>
      </article>
    </Layout>
  );
};

export const query = graphql`
query($id: String!) {
  mdx(id: { eq: $id }) {
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      slug
      title
    }
  }
}
`;

export default BlogPost;
