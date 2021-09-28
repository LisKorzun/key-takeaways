import * as React from 'react';
import { Link, PageProps } from 'gatsby';

const NotFoundPage: React.FC<PageProps> = () => (
  <main>
    <title>Not found</title>
    <h1>Page not found</h1>
    <p>
      <Link to="/">Go home</Link>
    </p>
  </main>
);

export default NotFoundPage;
