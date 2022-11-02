/* eslint-disable react/forbid-prop-types */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import '@fontsource/merriweather';
import '@fontsource/inter';
import '@fontsource/ibm-plex-sans';
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
          I&#39;m Juraj, a software engineer from Amsterdam.
          I learn about distributed systems by building cool stuff.
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
  children: PropTypes.any,
};

Layout.defaultProps = {
  children: PropTypes.any,
};

export default Layout;
