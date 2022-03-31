import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import '@fontsource/merriweather'
import '@fontsource/inter'
import './layout.css'

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
          src="../images/bio.jpg"
          alt="Profile photo"
        />
        <div className="about">
          <p>
            I'm Juraj, a software engineer living in Amsterdam. I'm interested
            in distributed systems and finding solutions to real-world problems.
          </p>
          <p>
            Currently building an Uber clone and documenting my journey.
          </p>
          <p>
            Follow me on&nbsp;
            <Link to="https://twitter.com/JurajMajerik" target="_blank">
              Twitter
            </Link>
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