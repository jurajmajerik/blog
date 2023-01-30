import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../layout';

const Tag = ({ name, onFilterChange }) => {
  const baseClasses = 'ml-3 text-xs inline-flex items-center font-semibold leading-sm px-3 py-1 uppercase rounded-full border cursor-pointer';

  const colorClasses = {
    go: 'bg-blue-100 text-blue-600 border-blue-300',
    'node.js': 'bg-green-100 text-green-600 border-green-300',
    sql: 'bg-orange-100 text-orange-600 border-orange-300',
    ui: 'bg-amber-100 text-amber-600 border-amber-300',
    docker: 'bg-zinc-100 text-zinc-600 border-zinc-300',
    bash: 'bg-rose-100 text-rose-600 border-rose-300',
  };

  return (
    <div
      className={`${baseClasses} ${colorClasses[name]}`}
      onClick={() => onFilterChange(name)}
    >
      {name}
    </div>
  );
};

const Filter = ({ onFilterChange }) => {
  const tags = ['go', 'node.js', 'sql', 'ui', 'bash', 'docker'];

  return (
    <div className="mt-3 mb-3">
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
    return (
      <Layout>
        {/* <Filter onFilterChange={this.handleFilterChange} /> */}
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
  }
}

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
