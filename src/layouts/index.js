import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/header'

const Layout = ({ children }) => (
  <section class="section">
    <div class="container">
      <Header/>
      {children}
    </div>
  </section>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
