import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Card from '../components/card';
import Menu from '../components/menu';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Menu></Menu>
    <Card>
      <p>Hi, I'm Hayley Phillips, welcome to my Photography page! Feel free to explore! On the left, you will find a directory menu laid out to help you find what you're looking for. I hope you love what you see as much as I do, because this is not just my business; it is my art and passion. If you have any questions, feel free to email at <a href="mailto://hbphillips@gmail.com">hpphillips99@gmail.com</a>!</p>
    </Card>
  </Layout>
)

export default IndexPage
