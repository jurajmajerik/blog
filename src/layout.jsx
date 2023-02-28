import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from './components/CodeBlock';

const LinkCustom = ({ text, to }) => (
  <Link className="text-blue-500 hover:text-blue-600" to={to}>{text}</Link>
);

const components = {
  pre: CodeBlock,
};

const Layout = ({ children }) => (
  <MDXProvider components={components}>
    <div className="container mx-auto">
      <div className="flex flex-row flex-wrap py-4">
        <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
          <div className="sticky top-0 p-4 w-full text-center">
            <div className="">
              <Link to="/">
                <h1 className="text-2xl dark:text-white">Juraj Majerik</h1>
              </Link>
            </div>
            <StaticImage
              className="mt-6 img-profile rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 w-32 h-32"
              src="./bio.jpg"
              alt="Profile photo"
            />
            <div className="mt-6 space-y-7 text-sm text-zinc-600 dark:text-zinc-400">
              <p>
                I&#39;m Juraj, a software engineer based in Amsterdam.
                I write about building distributed systems.
              </p>

              <p>
                Currently working on a clone of a
                <LinkCustom to="/blog/start-here" text=" ride-hailing app" />
                {/* . Read more in the design document and about my motivation for doing this. */}
                .
              </p>

              <p className="mt-6">
                <a href="https://twitter.com/JurajMajerik" target="_blank" rel="noreferrer">
                  <i className="hover:text-zinc-700 fa-brands fa-twitter text-xl" />
                </a>
                <a href="https://github.com/jurajmajerik" target="_blank" rel="noreferrer">
                  <i className="hover:text-zinc-700 fa-brands fa-github text-xl ml-2" />
                </a>
                <a href="https://www.linkedin.com/in/jurajmajerik/" target="_blank" rel="noreferrer">
                  <i className="hover:text-zinc-700 fa-brands fa-linkedin text-xl ml-2" />
                </a>
              </p>
            </div>
          </div>
        </aside>
        <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
          {children}
        </main>
      </div>
    </div>
  </MDXProvider>
);

export default Layout;
