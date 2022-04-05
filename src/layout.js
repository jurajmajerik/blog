import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import '@fontsource/merriweather'
import '@fontsource/inter'
import './layout.scss'

const Layout = ({ pageTitle, children }) => {

  return (
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
            I'm Juraj, a software engineer from Amsterdam. I'm interested
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
  )
}

export default Layout