import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import '@fontsource/inter'
import '@fontsource/inter/500.css'
import '@fontsource/ubuntu'
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
        <h1 className="heading">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout