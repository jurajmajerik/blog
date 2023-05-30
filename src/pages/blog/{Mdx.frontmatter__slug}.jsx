import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../layout";

const BranchNote = ({ branch }) => (
  <div className="mt-4 text-slate-800">
    <span className="italic">See the code for this post on the </span>
    <a
      className="font-medium text-blue-500 hover:text-blue-600"
      href={`https://github.com/jurajmajerik/server/tree/${branch}`}
      target="_blank"
      rel="noreferrer"
    >
      <i className="fa-solid fa-code-branch ml-1 mr-1 text-sm hover:text-slate-700" />
      {branch}
    </a>
    <span className="italic"> branch.</span>
  </div>
);

const BlogPost = ({ data, children }) => {
  const { mdx } = data;
  const { frontmatter } = mdx;
  const { title, date, branch } = frontmatter;

  return (
    <Layout pageTitle={title}>
      <article className="">
        <h1 className="text-2xl font-medium tracking-normal text-slate-800">
          {frontmatter.title}
        </h1>
        <small className="z-10 mt-1 text-sm text-slate-500">{date}</small>
        {branch ? <BranchNote branch={branch} /> : null}
        <div className="prose mt-4">{children}</div>
        {branch ? <BranchNote branch={branch} /> : null}
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
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
