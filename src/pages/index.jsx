import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../layout';

const colorClasses = {
  active: {
    go: 'bg-blue-500 text-white',
    'node.js': 'bg-green-500 text-white',
    sql: 'bg-cyan-500 text-white',
    ui: 'bg-yellow-500 text-white',
    bash: 'bg-red-400 text-white',
    docker: 'bg-zinc-500 text-white',
  },
  inactive: {
    go: 'bg-blue-400 text-white',
    'node.js': 'bg-green-400 text-white',
    sql: 'bg-cyan-400 text-white',
    ui: 'bg-yellow-400 text-white',
    bash: 'bg-red-300 text-white',
    docker: 'bg-zinc-400 text-white',
  },
};

const Tag = ({ name, active, onFilterChange }) => {
  const baseClasses = 'ml-3 text-xs inline-flex items-center font-semibold leading-sm px-2.5 py-0.5 uppercase rounded-full cursor-pointer';

  const classObj = active ? colorClasses.active : colorClasses.inactive;

  return (
    <div
      className={`${baseClasses} ${classObj[name]}`}
      onClick={() => onFilterChange(name, !active)}
    >
      {name}
    </div>
  );
};

const TagMinimal = ({ name }) => {
  const baseClasses = 'first:ml-0 ml-2 inline-flex font-semibold leading-sm h-1 w-5 uppercase rounded-full align-middle';
  return <div className={`${baseClasses} ${colorClasses.active[name]}`} />;
};

const Filter = ({ tags, onFilterChange }) => {
  console.log(tags);
  const items = ['go', 'node.js', 'sql', 'bash', 'docker', 'ui'];

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
        items.map((item) => (
          <Tag
            key={item}
            name={item}
            active={tags.includes(item)}
            onFilterChange={onFilterChange}
          />
        ))
      }
    </div>
  );
};

const IndexPage = ({ data }) => {
  const [tags, setTags] = useState([]);

  const handleFilterChange = (tag, value) => {
    if (value === true) setTags([...tags, tag]);
    else setTags(tags.filter((t) => t !== tag));
  };

  let nodes = data.allMdx.nodes.filter((node) => !node.frontmatter.hidden);
  if (tags.length) {
    nodes = nodes.filter((node) => tags.some((tag) => (
      node.frontmatter.tags && node.frontmatter.tags.includes(tag)
    )));
  }

  return (
    <Layout>
      <Filter tags={tags} onFilterChange={handleFilterChange} />
      <div className="inline-grid w-full 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {
          nodes.map((node) => {
            let { excerpt } = node;
            excerpt = `${excerpt.substring(0, excerpt.length - 1)} ...`;

            return (
              <Link key={node.id} to={`blog/${node.frontmatter.slug}`}>
                <article
                  className="
                    h-160
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
                    {
                      node.frontmatter.tags
                      && node.frontmatter.tags.map((tagName) => (
                        <TagMinimal key={`${node.frontmatter.id}-${tagName}`} name={tagName} />
                      ))
                    }
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
};

export const query = graphql`
query {
  allMdx(sort: {frontmatter: {date: DESC}}) {
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
