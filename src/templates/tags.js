import { Link, graphql } from 'gatsby';
import { formatPostDate, formatTag } from '../utils/helpers';

import Bio from '../components/Bio';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import React from 'react';
import SEO from '../components/SEO';
import get from 'lodash/get';
import { rhythm } from '../utils/typography';

class BlogIndexTemplate extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const langKey = this.props.pageContext.langKey;

    const posts = this.props.pageContext.posts;

    const {
      location: { pathname },
    } = this.props;

    const path = pathname.split('/');

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO />
        <aside>
          <Bio />
        </aside>
        <main>
          {posts &&
            posts.map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug;

              return (
                node.frontmatter.tags.includes(path[2]) && (
                  <article key={node.fields.slug}>
                    <header>
                      <h3
                        style={{
                          fontSize: '2.2em',
                          fontFamily: 'Do Hyeon, sans-serif',
                          marginBottom: '6px',
                          fontWeight: '600',
                        }}
                      >
                        <Link
                          style={{
                            boxShadow: 'none',
                          }}
                          to={node.fields.slug}
                          rel="bookmark"
                        >
                          {title}
                        </Link>
                      </h3>
                      <div
                        style={{
                          fontSize: '1.2em',
                          fontFamily: 'Noto Sans KR, sans-serif',
                          opacity: '0.7',
                          fontWeight: '200',
                          marginBottom: '6px',
                        }}
                      >
                        {formatPostDate(node.frontmatter.date, langKey)}
                        {' about '}
                        <Link
                          style={{
                            boxShadow: 'none',
                          }}
                          to={`/tags/${node.frontmatter.tags[0]}/`}
                          rel="bookmark"
                        >
                          {node.frontmatter.tags}
                        </Link>
                      </div>
                    </header>
                    <div
                      style={{
                        fontSize: '1.2em',
                        fontFamily: 'Noto Sans KR, sans-serif',
                        fontWeight: '600',
                        textAlign: 'justify',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.spoiler,
                      }}
                    />
                  </article>
                )
              );
            })}
        </main>
        <Footer />
      </Layout>
    );
  }
}

export default BlogIndexTemplate;

export const pageQuery = graphql`
  query($langKey: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            langKey
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
            tags
          }
        }
      }
    }
  }
`;
