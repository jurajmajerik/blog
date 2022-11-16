/* eslint-disable react/forbid-prop-types */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../layout';

const IndexPage = ({ data }) => (
  <Layout>
    <div className="inline-grid w-full grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {
        data.allMarkdownRemark.nodes.map((node, index) => {
          if (node.frontmatter.hidden) return null;

          return (
            <Link key={node.id} to={`blog/${node.frontmatter.slug}`}>
              <article className="h-125 transition-all drop-shadow-sm hover:drop-shadow-md m-2 p-4 bg-white rounded-md border border-slate-200">
                <h3 className="tracking-normal text-base font-medium tracking-tight text-zinc-800 dark:text-zinc-100">
                  {node.frontmatter.title}
                </h3>
                <small className="font-light mt-1 relative z-10 order-first flex items-center text-sm text-zinc-500 dark:text-zinc-500">
                  {node.frontmatter.date}
                </small>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{node.frontmatter.spoiler}</p>
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
