import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../layout';

const colorClasses = {
  go: 'bg-blue-500 text-white',
  'node.js': 'bg-green-500 text-white',
  sql: 'bg-cyan-500 text-white',
  ui: 'bg-yellow-500 text-white',
  bash: 'bg-red-400 text-white',
  docker: 'bg-zinc-500 text-white',
};

const Tag = ({ name, onFilterChange }) => {
  const baseClasses = 'ml-3 text-xs inline-flex items-center font-semibold leading-sm px-2.5 py-0.5 uppercase rounded-full cursor-pointer';
  return (
    <div
      className={`${baseClasses} ${colorClasses[name]}`}
      onClick={() => onFilterChange(name)}
    >
      {name}
    </div>
  );
};

const TagMinimal = ({ name }) => {
  const baseClasses = 'first:ml-0 ml-2 inline-flex font-semibold leading-sm h-1 w-5 uppercase rounded-full align-middle';
  return <div className={`${baseClasses} ${colorClasses[name]}`} />;
};

const Filter = ({ onFilterChange }) => {
  const tags = ['go', 'node.js', 'sql', 'bash', 'docker', 'ui'];

  return (
    <div className="
      m-2
      p-2
      leading-4
      dark:bg-gray-800
      rounded-md border
      border-slate-200
      dark:border-slate-400
    "
    >
      <span className="ml-1 mt-1 text-sm text-zinc-500 dark:text-zinc-400">Filter by tags</span>
      {
        tags.map((name) => (
          <Tag key={name} name={name} onFilterChange={onFilterChange} />
        ))
      }
    </div>
  );
};

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: 'all', //initial state
    };
  }

  // Pass this to the filter
  handleFilterChange(name) {
    console.log(name);
  }

  render() {
    // Grab the filter from state
    // Construct the query
    // Render
    const { data } = this.props;
    console.log(data);
    return (
      <Layout>
        <Filter onFilterChange={this.handleFilterChange} />
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
                    <div className="leading-4">
                      {node.frontmatter.tags && node.frontmatter.tags.map((tagName) => (
                        <TagMinimal key={`${node.frontmatter.id}-${tagName}`} name={tagName} />
                      ))}
                    </div>
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
  }
}

export const query = graphql`
query {
  allMdx(sort: {frontmatter: {date: DESC}}, filter: {frontmatter: { tags: {in: ["node.js","ui"] }}}) {
    nodes {
      id
      excerpt(pruneLength: 80)
      frontmatter {
        slug
        title
        date(formatString: "MMMM D, YYYY")
        spoiler
        hidden
        tags
      }
      internal {
        contentFilePath
      }
    }
  }
}
`;

export default IndexPage;
