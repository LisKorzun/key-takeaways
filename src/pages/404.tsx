import * as React from 'react';
import { Link, PageProps } from 'gatsby';

import { ROUTES } from '../common';

const NotFoundPage: React.FC<PageProps> = () => (
  <>
    <title>Not found</title>
    <h1>Page not found</h1>
    <p>
      <Link to={ROUTES.HOME}>Go home</Link>
    </p>
  </>
);

export default NotFoundPage;
