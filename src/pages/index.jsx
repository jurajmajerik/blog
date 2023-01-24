import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../layout';

const IndexPage = ({ data }) => (
  <Layout>
    <div className="inline-grid w-full 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {
        data.allMdx.nodes.map((node) => {
          if (node.frontmatter.hidden) return null;

          let { excerpt } = node;
          excerpt = `${excerpt.substring(0, excerpt.length - 1)} ...`;

          return (
            <Link key={node.id} to={`blog/${node.frontmatter.slug}`}>
              <article
                className="
                  h-140
                  transition-all
                  hover:drop-shadow-sm
                  m-2
                  p-4
                  bg-white
                  dark:bg-gray-800
                  rounded-md border
                  border-slate-200
                  dark:border-slate-400
                  hover:border-slate-300
                "
              >
                <h3 className="text-base font-medium tracking-normal text-zinc-800 dark:text-zinc-100">
                  {node.frontmatter.title}
                </h3>
                <small className="mt-1 text-sm text-zinc-500 dark:text-zinc-300">
                  {node.frontmatter.date}
                </small>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 excerpt">{excerpt}</p>
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
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      id
      excerpt(pruneLength: 80)
      frontmatter {
        slug
        date(formatString: "MMMM D, YYYY")
        title
        spoiler
        hidden
      }
      internal {
        contentFilePath
      }
    }
  }
}
`;

export default IndexPage;
