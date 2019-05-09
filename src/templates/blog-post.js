import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

// import '../fonts/fonts-post.css';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { formatPostDate, formatReadingTime } from '../utils/helpers';
import { rhythm, scale } from '../utils/typography';
import { loadFontsForCode } from '../utils/i18n';

import styled from 'styled-components';

const Title = styled.h3`
  font-size: 1.8em;
  font-family: 'Do Hyeon', sans-serif;
  font-weight: 800;
`;

const Title3 = styled.h3`
  font-family: 'Righteous', cursive;
  font-size: 2em;
`;

const Date = styled.div`
  font-size: 10px;
  font-family: 'Noto Sans KR', sans-serif;
  opacity: 0.7;
  font-weight: 200;
`;

const MainText = styled.div`
  font-size: 1em;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: justify;
  h2 {
    font-size: 1.3em;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    text-align: left;
  }
  h3 {
    font-size: 1.3em;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    text-align: left;
  }
  h4 {
    font-size: 1.3em;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    text-align: left;
  }
  h5 {
    font-size: 1.3em;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    text-align: left;
  }
`;

const Nav = styled.nav`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
`;

const systemFont = `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif`;

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    console.log('did mounted!');
  }

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    // let { previous, next } = this.props.pageContext;
    const lang = post.fields.langKey;
    // Replace original links with translated when available.
    let html = post.html;

    console.log(this.props);

    loadFontsForCode(lang);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          lang={lang}
          title={post.frontmatter.title}
          description={post.frontmatter.spoiler}
          slug={post.fields.slug}
        />
        <main>
          <article>
            <header>
              <Title style={{ color: 'var(--textTitle)' }}>
                {post.frontmatter.title}
              </Title>
              <Date
                style={{
                  ...scale(-1 / 5),
                  display: 'block',
                  marginBottom: rhythm(1),
                  marginTop: rhythm(-4 / 5),
                }}
              >
                {formatPostDate(post.frontmatter.date, lang)}
              </Date>
            </header>
            <MainText dangerouslySetInnerHTML={{ __html: html }} />
            <footer />
          </article>
        </main>
        <aside>
          <div
            style={{
              margin: '90px 0 40px 0',
              fontFamily: systemFont,
            }}
          />
          <Title3
            style={{
              marginTop: rhythm(0.25),
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
              }}
              to={'/'}
            >
              Knowhere
            </Link>
          </Title3>
          <Bio />
          <Nav>
            <a href="/">Back To Main</a>
            {/* <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                listStyle: 'none',
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link
                    to={previous.fields.slug}
                    rel="prev"
                    style={{ marginRight: 20 }}
                  >
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul> */}
          </Nav>
        </aside>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
      }
      fields {
        slug
        langKey
      }
    }
  }
`;