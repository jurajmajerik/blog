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
    misc: "bg-indigo-500 text-white border-transparent",
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
    misc: "bg-indigo-50 border-indigo-600 text-indigo-600 hover:bg-indigo-100 hover:border-indigo-700 hover:text-indigo-700",
  },
};

const Tag = ({ name, tags, active, onFilterChange }) => {
  const baseClasses =
    "tag mb-2 lg:mb-0 ml-3 text-xs inline-flex items-center font-semibold leading-sm px-2.5 py-0.5 uppercase rounded-full cursor-pointer border transition-colors";

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
  const items = ["go", "node.js", "sysadmin", "docker", "ui", "misc"];

  return (
    <div
      className="
      relative
      m-2
      mt-4
      rounded-md
      border
      border-slate-200
      p-2 leading-4
    "
    >
      <span className="ml-1 mt-1 text-sm text-slate-500">Filter by topics</span>
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

const RidesPage = ({ data }) => {
  const [tags, setTags] = useState([]);

  const handleFilterChange = (newTags) => {
    setTags(newTags);
  };

  let nodes = data.allMdx.nodes.filter(
    (node) =>
      node.frontmatter.tab !== "experimentation" && !node.frontmatter.hidden
  );
  if (tags.length) {
    nodes = nodes.filter((node) =>
      tags.some(
        (tag) => node.frontmatter.tags && node.frontmatter.tags.includes(tag)
      )
    );
  }

  return (
    <>
      <Filter tags={tags} onFilterChange={handleFilterChange} />
      <p className="m-2 mt-4 rounded border p-4 text-sm text-slate-600">
        <a
          className="text-blue-500 transition-colors hover:text-blue-600"
          href="https://rides.jurajmajerik.com"
          target="_blank"
          rel="noreferrer"
        >
          Rides&nbsp;
        </a>
        is a full-stack simulation of a ridesharing app. This project is my take
        on building and visualizing a scalable system. My motivation was to
        implement various concepts from the domain of system design, including
        containerization, multiprocessing and observability. This project took
        approximately 300 hours of work.
      </p>
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
                  "
              >
                <h3 className="text-base font-medium tracking-normal text-slate-800">
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
                <small className="mt-1 text-sm text-slate-500">
                  {node.frontmatter.date}
                </small>
                <p className="excerpt mt-1 text-sm text-slate-800">{excerpt}</p>
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
    </>
  );
};

const ExperimentationPage = ({ data }) => {
  let nodes = data.allMdx.nodes.filter(
    (node) =>
      node.frontmatter.tab === "experimentation" && !node.frontmatter.hidden
  );

  return (
    <>
      <p className="m-2 mt-4 rounded border p-4 text-sm text-slate-600">
        Experiments at PostHog are still in the early stages. We have a useful
        product with a clear market fit, but there's still a long way to go to
        make it world-class. Here, I'll share my learnings and practical tips as
        we work towards this goal.
      </p>
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
                    "
              >
                <h3 className="text-base font-medium tracking-normal text-slate-800">
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
                <small className="mt-1 text-sm text-slate-500">
                  {node.frontmatter.date}
                </small>
                <p className="excerpt mt-1 text-sm text-slate-800">{excerpt}</p>
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
    </>
  );
};

const IndexPage = ({ data }) => {
  const [activeTab, setActiveTab] = useState("rides");

  const styles = {
    default:
      "me-2 inline-block rounded-t-lg border-b-2 border-transparent px-4 py-2 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer",
    active:
      "me-2 active inline-block rounded-t-lg border-b-2 border-blue-600 px-4 py-2 text-blue-600 dark:border-blue-500 dark:text-blue-500 cursor-pointer",
  };

  return (
    <Layout>
      <div className="m-2 border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
        <ul className="-mb-px flex flex-wrap">
          <li
            style={{ display: "none" }}
            onClick={() => setActiveTab("experimentation")}
            className={
              activeTab === "experimentation" ? styles.active : styles.default
            }
          >
            Experimentation
          </li>
          <li
            onClick={() => setActiveTab("rides")}
            className={activeTab === "rides" ? styles.active : styles.default}
          >
            Rides
          </li>
        </ul>
      </div>

      {activeTab === "rides" && <RidesPage data={data} />}
      {activeTab === "experimentation" && <ExperimentationPage data={data} />}
    </Layout>
  );
};

export const Head = () => (
  <>
    <SEO />
    <script>
      {`
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_2jx6DBE8kQcju3XM9NACr0QrNvEdgxWQfQbe9lI3H3I',{api_host:'https://app.posthog.com'})
    `}
    </script>
  </>
);

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
          tab
        }
        internal {
          contentFilePath
        }
      }
    }
  }
`;

export default IndexPage;
