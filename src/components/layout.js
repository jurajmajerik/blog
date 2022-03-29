import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import '@fontsource/merriweather'
import '@fontsource/inter/500.css'
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
          src="../images/profile-1.jpg"
          alt="Profile photo"
        />
        <div className="about">
          I'm Juraj, a software engineer based in Amsterdam.
        </div>
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout