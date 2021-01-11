import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <meta
          name="google-site-verification"
          content="1iT_BTfL6YIFB8CthGIj7iZo0JyR0wGoUtELTjC6rHQ"
        />
        <main>{children}</main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
