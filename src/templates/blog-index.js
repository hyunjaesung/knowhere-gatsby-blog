import { Link, graphql } from 'gatsby';
import { formatPostDate } from '../utils/helpers';

import Bio from '../components/Bio';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import React from 'react';
import SEO from '../components/SEO';
import get from 'lodash/get';
import { rhythm } from '../utils/typography';

import styled from 'styled-components';

const Title = styled.h3`
  font-size: rhythm(1);
  font-family: 'Do Hyeon', sans-serif;
  margin-bottom: 6px;
`;

const Date = styled.div`
  font-size: 10px;
  font-family: 'Noto Sans KR', sans-serif;
  opacity: 0.7;
  font-weight: 200;
  margin-bottom: 6px;
`;

const MainText = styled.div`
  font-size: 12px;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: justify;
`;

const Nav = styled.nav`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
`;

class BlogIndexTemplate extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const langKey = this.props.pageContext.langKey;

    const posts = get(this, 'props.data.allMarkdownRemark.edges');

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
                <article key={node.fields.slug}>
                  <header>
                    <Title>
                      <Link
                        style={{
                          boxShadow: 'none',
                        }}
                        to={node.fields.slug}
                        rel="bookmark"
                      >
                        {title}
                      </Link>
                    </Title>
                    <Date>
                      {formatPostDate(node.frontmatter.date, langKey)}
                    </Date>
                  </header>
                  <MainText
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.spoiler,
                    }}
                  />
                </article>
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
          }
        }
      }
    }
  }
`;
