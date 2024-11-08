import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';
import { IconBookmark } from '@components/icons';
import { format, parseISO } from 'date-fns';

const StyledMainContainer = styled.main`
  overflow-x: hidden;

  & > header {
    margin-bottom: 100px;
    text-align: center;
  }

  footer {
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 20px;

    .post__date {
      margin-bottom: 10px;
    }
  }
`;

const StyledGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  margin-top: 50px;
  position: relative;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    margin-top: 30px;
  }
`;

const StyledPost = styled.li`
  transition: var(--transition);
  cursor: default;

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .post__inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .post__inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 1.5rem 1.25rem;
    border-radius: var(--border-radius);
    transition: var(--transition);
    background-color: var(--blog-bg);

    header,
    a {
      width: 100%;
    }

    img,
    video,
    iframe {
      max-width: 100%;
      height: auto;
    }
  }

  .post__header {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
  }

  .post__icon {
    color: var(--blog-icon-color);
    margin-right: 0px;

    svg {
      width: 30px;
      height: 30px;
    }

    @media (max-width: 768px) {
      svg {
        width: 25px;
        height: 25px;
      }
    }
  }

  .post__title {
    flex: 1;
    margin: 0;
    color: var(--blog-title-color);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }

    @media (max-width: 768px) {
      font-size: var(--fz-xxl);
    }
  }

  .post__desc {
    color: var(--blog-desc-color);
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      font-size: var(--fz-md);
    }
  }

  .post__date {
    color: var(--blog-date-color);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: var(--fz-xxs);
    }
  }

  ul.post__tags {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      color: var(--blog-tag-color);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }

      @media (max-width: 768px) {
        font-size: var(--fz-xxs);
      }
    }
  }
`;

// Responsive Markdown styles for code blocks
const StyledCodeBlock = styled.div`
  .gatsby-highlight {
    max-width: 100%;
    overflow-x: auto;
    font-size: var(--fz-sm);
    border-radius: var(--border-radius);
    margin: 1.5em 0;

    @media (max-width: 768px) {
      font-size: var(--fz-xs);
      padding: 1rem;
    }
  }

  pre[class*='language-'] {
    background-color: var(--code-bg);
    padding: 1rem;
    overflow-x: auto;
    font-size: var(--fz-sm);
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: var(--fz-sm);
    }
  }

  code[class*='language-'] {
    font-size: var(--fz-md);

    @media (max-width: 768px) {
      font-size: var(--fz-sm);
    }
  }
`;

const Blog = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <Helmet title="blog" />

      <StyledMainContainer>
        <header>
          <h1 className="big-heading">blog.</h1>
          <p className="subtitle">a collection of memories</p>
        </header>

        <StyledGrid>
          {posts.length > 0 &&
            posts.map(({ node }, i) => {
              const { frontmatter } = node;
              const { title, description, slug, date, tags } = frontmatter;
              const formattedDate = format(parseISO(date), 'MMMM d, yyyy');

              return (
                <StyledPost key={i}>
                  <div className="post__inner">
                    <header className="post__header">
                      <h5 className="post__title">
                        <Link to={slug}>{title}</Link>
                      </h5>
                      <div className="post__icon">
                        <IconBookmark />
                      </div>
                    </header>
                    <p className="post__desc">{description}</p>

                    <footer>
                      <span className="post__date">{formattedDate}</span>
                      <ul className="post__tags">
                        {tags.map((tag, i) => (
                          <li key={i}>
                            <Link
                              to={`/blog/tags/${kebabCase(tag)}/`}
                              className="inline-link"
                            >
                              #{tag}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </footer>
                  </div>
                </StyledPost>
              );
            })}
        </StyledGrid>

        <StyledCodeBlock />
      </StyledMainContainer>
    </Layout>
  );
};

Blog.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default Blog;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            slug
            date
            tags
          }
          html
        }
      }
    }
  }
`;
