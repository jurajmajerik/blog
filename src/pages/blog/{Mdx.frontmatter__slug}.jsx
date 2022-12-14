import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../layout';

const BranchNote = ({ branch }) => (
  <div className="mt-4 text-zinc-600 dark:text-slate-300">
    <span className="italic">See the code for this post on the </span>
    <a className="font-medium text-sky-700 hover:text-sky-800" href={`https://github.com/jurajmajerik/server/tree/${branch}`} target="_blank" rel="noreferrer">
      <i className="hover:text-zinc-700 fa-solid fa-code-branch text-sm ml-1 mr-1" />
      {branch}
    </a>
    <span className="italic"> branch.</span>
  </div>
);

const BlogPost = ({ data, children }) => {
  const { mdx } = data;
  const { frontmatter } = mdx;
  const {
    title,
    date,
    branch,
  } = frontmatter;

  return (
    <Layout pageTitle={title}>
      <article className="">
        <h1 className="text-2xl font-medium tracking-normal text-zinc-800 dark:text-zinc-100">{frontmatter.title}</h1>
        <small className="font-light mt-1 z-10 text-sm text-zinc-500 dark:text-zinc-500">{date}</small>
        { branch ? <BranchNote branch={branch} /> : null }
        <div className="mt-4 prose dark">{children}</div>
        { branch ? <BranchNote branch={branch} /> : null }
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
      branch
    }
  }
}
`;

export default BlogPost;
