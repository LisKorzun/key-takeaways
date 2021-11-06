import * as React from 'react';
import { Link, PageProps } from 'gatsby';

import { Layout } from '../components';
import { ROUTES } from '../common';

const NotFoundPage: React.FC<PageProps> = () => (
  <Layout>
    <title>Not found</title>
    <h1>Page not found</h1>
    <p>
      <Link to={ROUTES.HOME}>Go home</Link>
    </p>
  </Layout>
);

export default NotFoundPage;
