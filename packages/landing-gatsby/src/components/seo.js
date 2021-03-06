import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: 'google-site-verification',
                content: '1iT_BTfL6YIFB8CthGIj7iZo0JyR0wGoUtELTjC6rHQ',
              },
              {
                name: 'keywords',
                content:
                  'roofing,roofers near me,roofing companies near me,roofing companies,roof repair,roofing contractors,roof repair near me,roofing contractors near me,commercial roofing,roof inspection,roofing services,roof installation,roof estimate,residential roofing,top roof,roof fix,best roofing company,best roofing,commercial roofing contractors,best roofers near me,commercial roofing companies,best roofing company near me,roofing services near me,shingle repair,commercial roofing services,roof repair service,commercial roofers near me,roof inspection near me,commercial roofing companies near me,roof installation near me,residential roof repair near me,best roofing contractors near me,top roofing companies,roof repair companies,all roofing,roofing repair companies near me,residential roofing services,commercial roof repair,residential roof repair,roof shingle repair,roof repair estimate,premium roofing,home roof repairs,florida inspection services,home inspection miami florida,akg roofing and specialty services inc,florida home inspection services,home inspection companies in miami florida,akg repair,akg roofing,akg inspections,akg roofers miami,akg repair service,roofing miami fl services,akg service,inspection companies miami,roof inspections miami,akg inc,roof inspection miami,miami roof inspection,miami roof inspections,home inspection services miami,roof inspections in florida,home inspection miami-dade,miami dade roof inspections,miami roofing services,joe hernandez,',
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
