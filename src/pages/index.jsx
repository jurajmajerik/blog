import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../layout';
import IconRemove from '../components/IconRemove';

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
    go: 'bg-blue-50 border border-blue-600 text-blue-600',
    'node.js': 'bg-green-50 border border-green-600 text-green-600',
    sql: 'bg-cyan-50 border border-cyan-600 text-cyan-600',
    bash: 'bg-rose-50 border border-rose-600 text-rose-600',
    docker: 'bg-zinc-50 border border-zinc-600 text-zinc-600',
    ui: 'bg-yellow-50 border border-yellow-600 text-yellow-600',
  },
};

const Tag = ({ name, tags, active, onFilterChange }) => {
  const baseClasses = 'ml-3 text-xs inline-flex items-center font-semibold leading-sm px-2.5 py-0.5 uppercase rounded-full cursor-pointer';

  const classObj = active ? colorClasses.active : colorClasses.inactive;

  return (
    <div
      className={`${baseClasses} ${classObj[name]}`}
      onClick={() => {
        let newTags = [];
        if (!active) newTags = [...tags, name];
        else newTags = tags.filter((t) => t !== name);
        onFilterChange(newTags);
      }}
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
  const items = ['go', 'node.js', 'sql', 'bash', 'docker', 'ui'];

  return (
    <div className="
      relative
      m-2
      p-2
      leading-4
      dark:bg-gray-800
      rounded-md border
      border-slate-200
      dark:border-slate-400
    "
    >
      <span className="ml-1 mt-1 text-sm text-zinc-500 dark:text-zinc-400">Filter by topics</span>
      {
        items.map((item) => (
          <Tag
            key={item}
            name={item}
            tags={tags}
            active={tags.includes(item)}
            onFilterChange={onFilterChange}
          />
        ))
      }
      { tags.length ? <IconRemove onFilterChange={onFilterChange} /> : null }
    </div>
  );
};

const IndexPage = ({ data }) => {
  const [tags, setTags] = useState([]);

  const handleFilterChange = (newTags) => {
    setTags(newTags);
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
                    relative
                    overflow-hidden
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
                  <div className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-10
                    bg-white
                    rounded-b
                    "
                  />
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
