import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';
import { format, parseISO } from 'date-fns';

const StyledPostContainer = styled.main`
  max-width: 1000px;
`;

const StyledPostHeader = styled.header`
  margin-bottom: 50px;
  .tag {
    margin-right: 10px;
  }
`;

const StyledPostContent = styled.div`
  margin-bottom: 100px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2em 0 1em;
  }

  p {
    margin: 1em 0;
    line-height: 1.5;
    color: var(--light-slate);
  }

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  code {
    background-color: var(--midnight);
    color: var(--white);
    border-radius: var(--border-radius);
    font-size: var(--fz-sm);
    padding: 0.2em 0.4em;
  }

  pre code {
    background-color: transparent;
    padding: 0;
  }
`;

const PostTemplate = ({ data, location }) => {
  if (!data || !data.markdownRemark) {
    return (
      <Layout location={location}>
        <StyledPostContainer>
          <p>
            Sorry, the post you're looking for doesn't exist or has been
            removed.
          </p>
          <Link to="/blog">Go back to all posts</Link>
        </StyledPostContainer>
      </Layout>
    );
  }

  const { frontmatter, html } = data.markdownRemark;
  const { title, date, tags, description } = frontmatter;
  const formattedDate = format(parseISO(date), 'MMMM d, yyyy'); // Updated date formatting

  return (
    <Layout location={location}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <StyledPostContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/blog">All memories</Link>
        </span>

        <StyledPostHeader>
          <h1 className="medium-heading">{title}</h1>
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
        </StyledPostHeader>

        <StyledPostContent dangerouslySetInnerHTML={{ __html: html }} />
      </StyledPostContainer>
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date
        slug
        tags
      }
    }
  }
`;

export default PostTemplate;
