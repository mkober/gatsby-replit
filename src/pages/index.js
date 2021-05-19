import React from 'react'
import {Link} from 'gatsby'

import Layout from '../layouts';
import ProductList from '../components/product-list';

const IndexPage = () => (
  <Layout>
    <ProductList />
    <br />
    <br />
    <Link className="button" to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
