import React from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';
import { format, parseISO } from 'date-fns';

const StyledTagsContainer = styled.main`
  max-width: 1000px;

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  h1 {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 50px;

    a {
      font-size: var(--fz-lg);
      font-weight: 400;
    }
  }

  ul {
    li {
      font-size: 24px;
      h2 {
        font-size: inherit;
        margin: 0;
        a {
          color: var(--light-gray);
        }
      }
      .subtitle {
        color: var(--white);
        font-size: var(--fz-sm);

        .tag {
          margin-right: 10px;
        }
      }
    }
  }
`;

const TagTemplate = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout location={location}>
      <Helmet title={`Tagged: #${tag}`} />

      <StyledTagsContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/blog">All memories</Link>
        </span>

        <h1>
          <span>#{tag}</span>
          <span>
            <Link to="/blog/tags">View all tags</Link>
          </span>
        </h1>

        {edges.length > 0 ? (
          <ul className="fancy-list">
            {edges.map(({ node }) => {
              const { title, slug, date, tags } = node.frontmatter;
              const formattedDate = format(parseISO(date), 'MMMM d, yyyy'); // Updated date formatting

              return (
                <li key={slug}>
                  <h2>
                    <Link to={slug}>{title}</Link>
                  </h2>
                  <p className="subtitle">
                    <time>{formattedDate}</time> {/* Updated date display */}
                    <span>&nbsp;&mdash;&nbsp;</span>
                    {tags &&
                      tags.length > 0 &&
                      tags.map((tag, i) => (
                        <Link
                          key={i}
                          to={`/blog/tags/${kebabCase(tag)}/`}
                          className="tag"
                        >
                          #{tag}
                        </Link>
                      ))}
                  </p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No posts found for the tag #{tag}</p>
        )}
      </StyledTagsContainer>
    </Layout>
  );
};

export default TagTemplate;

TagTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired,
      ),
    }),
  }),
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query ($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            description
            date
            slug
            tags
          }
        }
      }
    }
  }
`;
