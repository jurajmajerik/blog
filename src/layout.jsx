import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "./components/CodeBlock";

const LinkCustom = ({ text, to }) => (
  <Link className="text-blue-500 transition-colors hover:text-blue-600" to={to}>
    {text}
  </Link>
);

const components = {
  pre: CodeBlock,
};

const Layout = ({ children }) => (
  <MDXProvider components={components}>
    <div className="container mx-auto">
      <div className="flex flex-row flex-wrap py-4">
        <aside className="w-full px-2 sm:w-1/3 md:w-1/4">
          <div className="sticky top-0 w-full p-4 text-center">
            <div className="">
              <Link to="/">
                <h1 className="text-2xl">Juraj Majerik</h1>
              </Link>
            </div>
            <StaticImage
              className="img-profile mt-6 h-32 w-32 rounded-full bg-zinc-100 object-cover"
              src="./bio.jpg"
              alt="Profile photo"
            />
            <div className="mt-6 space-y-7 text-sm text-slate-800">
              <p>
                I&#39;m Juraj, a software engineer based in Amsterdam. I write
                about building scalable systems.
              </p>

              <p>
                Currently working on a
                <a
                  className="text-blue-500 transition-colors hover:text-blue-600"
                  href="https://rides.jurajmajerik.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  &nbsp;ridesharing simulation
                </a>
                .
              </p>

              <p className="mt-6">
                <a
                  href="https://twitter.com/JurajMajerik"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-twitter text-xl hover:text-slate-700" />
                </a>
                <a
                  href="https://github.com/jurajmajerik"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github ml-2 text-xl hover:text-slate-700" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jurajmajerik/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin ml-2 text-xl hover:text-slate-700" />
                </a>
              </p>
            </div>
          </div>
        </aside>
        <main role="main" className="w-full px-2 pt-1 sm:w-2/3 md:w-3/4">
          {children}
        </main>
      </div>
    </div>
  </MDXProvider>
);

export default Layout;
