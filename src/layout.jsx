import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import '@fontsource/merriweather';
import '@fontsource/inter';
import './index.scss';

const Layout = ({ children }) => (
  <div className="container">
    <aside>
      <div className="title">
        <Link to="/">
          <h1>Juraj Majerik</h1>
        </Link>
      </div>
      <StaticImage
        className="img-profile"
        src="./bio.jpg"
        alt="Profile photo"
      />
      <div className="about">
        <p>
          I'm Juraj, a software engineer from Amsterdam. I&aposm interested
          in distributed systems and finding technical solutions to real-world problems.
        </p>
        <p>
          Follow me on&nbsp;
          <a href="https://twitter.com/JurajMajerik" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </p>
      </div>
    </aside>
    <main>
      {children}
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element,
};

Layout.defaultProps = {
  children: PropTypes.element,
};

export default Layout;
