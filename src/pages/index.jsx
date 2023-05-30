import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../layout";
import IconRemove from "../components/IconRemove";
import SEO from "../components/seo";

const colorClasses = {
  active: {
    go: "bg-blue-400 text-white border-transparent",
    "node.js": "bg-emerald-400 text-white border-transparent",
    sql: "bg-cyan-500 text-white border-transparent",
    ui: "bg-yellow-500 text-white border-transparent",
    sysadmin: "bg-red-400 text-white border-transparent",
    docker: "bg-zinc-500 text-white border-transparent",
  },
  inactive: {
    go: "bg-blue-50 border-blue-600 text-blue-600 hover:bg-blue-100 hover:border-blue-700 hover:text-blue-700 transition-colors",
    "node.js":
      "bg-emerald-50 border-emerald-600 text-emerald-600 hover:bg-emerald-100 hover:border-emerald-700 hover:text-emerald-700",
    sql: "bg-cyan-50 border-cyan-600 text-cyan-600 hover:bg-cyan-100 hover:border-cyan-700 hover:text-cyan-700",
    sysadmin:
      "bg-rose-50 border-rose-600 text-rose-600 hover:bg-rose-100 hover:border-rose-700 hover:text-rose-700",
    docker:
      "bg-zinc-50 border-zinc-600 text-slate-800 hover:bg-zinc-100 hover:border-zinc-700 hover:text-slate-700",
    ui: "bg-yellow-50 border-yellow-600 text-yellow-600 hover:bg-yellow-100 hover:border-yellow-700 hover:text-yellow-700",
  },
};

const Tag = ({ name, tags, active, onFilterChange }) => {
  const baseClasses =
    "tag ml-3 text-xs inline-flex items-center font-semibold leading-sm px-2.5 py-0.5 uppercase rounded-full cursor-pointer border transition-colors";

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
  const baseClasses =
    "first:ml-0 ml-2 inline-flex font-semibold leading-sm h-1 w-5 uppercase rounded-full align-middle";
  return <div className={`${baseClasses} ${colorClasses.active[name]}`} />;
};

const Filter = ({ tags, onFilterChange }) => {
  const items = ["go", "node.js", "sysadmin", "docker", "ui"];

  return (
    <div
      className="
      relative
      m-2
      rounded-md
      border
      border-slate-200
      p-2 leading-4
      dark:border-slate-400
      dark:bg-gray-800
    "
    >
      <span className="ml-1 mt-1 text-sm text-slate-500 dark:text-slate-400">
        Filter by topics
      </span>
      {items.map((item) => (
        <Tag
          key={item}
          name={item}
          tags={tags}
          active={tags.includes(item)}
          onFilterChange={onFilterChange}
        />
      ))}
      {tags.length ? <IconRemove onFilterChange={onFilterChange} /> : null}
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
    nodes = nodes.filter((node) =>
      tags.some(
        (tag) => node.frontmatter.tags && node.frontmatter.tags.includes(tag)
      )
    );
  }

  return (
    <Layout>
      <Filter tags={tags} onFilterChange={handleFilterChange} />
      <div className="inline-grid w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        {nodes.map((node) => {
          let { excerpt } = node;
          excerpt = `${excerpt.substring(0, excerpt.length - 1)} ...`;

          return (
            <Link key={node.id} to={`blog/${node.frontmatter.slug}`}>
              <article
                className="
                    relative
                    m-2
                    h-140
                    overflow-hidden
                    rounded-md
                    border
                    border-slate-200
                    bg-white
                    p-4
                    transition-all hover:border-slate-300
                    hover:drop-shadow-sm
                    dark:border-slate-400
                    dark:bg-gray-800
                  "
              >
                <h3 className="text-base font-medium tracking-normal text-slate-800 dark:text-slate-100">
                  {node.frontmatter.title}
                </h3>
                <div className="leading-4">
                  {node.frontmatter.tags &&
                    node.frontmatter.tags.map((tagName) => (
                      <TagMinimal
                        key={`${node.frontmatter.id}-${tagName}`}
                        name={tagName}
                      />
                    ))}
                </div>
                <small className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                  {node.frontmatter.date}
                </small>
                <p className="excerpt mt-1 text-sm text-slate-800 dark:text-slate-400">
                  {excerpt}
                </p>
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-10
                    rounded-b
                    bg-white
                    "
                />
              </article>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export const Head = () => <SEO />;

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
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
