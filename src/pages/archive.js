// src/pages/archive.js
import React, { useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Layout } from '@components';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            tech
            github
            external
            ios
            android
          }
          html
        }
      }
    }
  }
`;

const StyledTableContainer = styled.div`
  margin: 80px 0;

  @media (max-width: 768px) {
    margin: 40px 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: var(--fz-md);
    background-color: var(--table-bg);
    color: var(--table-text-primary);

    thead {
      background-color: var(--table-header-bg);

      th {
        text-transform: uppercase;
        font-size: var(--fz-sm);
        font-weight: 600;
        color: var(--table-accent);
        text-align: left;
        padding-left: 20px;

        &:first-child {
          padding-left: 20px;

          @media (max-width: 768px) {
            padding-left: 10px;
          }
        }

        &:last-child {
          padding-right: 20px;

          @media (max-width: 768px) {
            padding-right: 10px;
          }
        }
      }

      /* hiding columns on small screens */
      .hide-on-small-screens {
        display: table-cell;

        @media (max-width: 768px) {
          display: none;
        }
      }
    }

    tbody {
      tr {
        transition: background-color 0.3s ease;
        cursor: pointer;

        &:hover,
        &:focus {
          background-color: var(--table-row-hover);
        }
      }

      td {
        padding: 25px;
        text-align: left;
        border-bottom: 1px solid var(--table-border-color);
        vertical-align: middle;
        color: var(--table-text-primary);

        &:first-child {
          padding-left: 20px;

          @media (max-width: 768px) {
            padding-left: 10px;
          }
        }

        &:last-child {
          padding-right: 20px;

          @media (max-width: 768px) {
            padding-right: 10px;
          }
        }

        &.year {
          font-weight: 500;
          color: var(--table-text-year);

          @media (max-width: 768px) {
            padding-right: 10px;
            font-size: var(--fz-sm);
          }
        }

        &.title {
          color: var(--table-text-title);
          font-size: var(--fz-lg);
          font-weight: 600;
        }

        &.tech {
          color: var(--table-text-tech);
          font-size: var(--fz-sm);
          font-family: var(--font-mono);

          .separator {
            color: var(--table-tech-separator);
            margin: 0 5px;
            font-size: var(--fz-md);
          }

          span {
            display: inline-block;
          }
        }

        &.links {
          min-width: 100px;

          div {
            display: flex;
            align-items: center;

            a {
              ${({ theme }) => theme.mixins.flexCenter};
              flex-shrink: 0;
            }

            a + a {
              margin-left: 10px;
            }
          }
        }

        /* New class for hiding columns on small screens */
        &.hide-on-small-screens {
          display: table-cell;

          @media (max-width: 768px) {
            display: none;
          }
        }
      }
    }
  }
`;

const ArchivePage = ({ location, data }) => {
  const projects = data.allMarkdownRemark.edges;
  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealTable.current, srConfig(200, 0));
    revealProjects.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(i * 10)),
    );
  }, [prefersReducedMotion]);

  const handleRowClick = (external, github) => {
    const url = external || github;
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Layout location={location}>
      <Helmet title="Archive" />

      <main>
        <header ref={revealTitle}>
          <h1 className="big-heading">archive.</h1>
          <p className="subtitle">A list of stuff and things I've made.</p>
        </header>

        <StyledTableContainer ref={revealTable}>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th className="hide-on-small-screens">Built with</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 &&
                projects.map(({ node }, i) => {
                  const { date, github, external, ios, android, title, tech } =
                    node.frontmatter;
                  return (
                    <tr
                      key={i}
                      ref={(el) => (revealProjects.current[i] = el)}
                      onClick={() => handleRowClick(external, github)}
                    >
                      <td className="overline year">{`${new Date(
                        date,
                      ).getFullYear()}`}</td>

                      <td className="title">{title}</td>

                      <td className="tech hide-on-small-screens">
                        {tech?.length > 0 &&
                          tech.map((item, i) => (
                            <span key={i}>
                              {item}
                              {i !== tech.length - 1 && (
                                <span className="separator">&middot;</span>
                              )}
                            </span>
                          ))}
                      </td>

                      <td className="links">
                        <div>
                          {external && (
                            <a
                              href={external}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="External Link"
                            >
                              <Icon name="External" />
                            </a>
                          )}
                          {github && (
                            <a
                              href={github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="GitHub Link"
                            >
                              <Icon name="GitHub" />
                            </a>
                          )}
                          {ios && (
                            <a
                              href={ios}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Apple App Store Link"
                            >
                              <Icon name="AppStore" />
                            </a>
                          )}
                          {android && (
                            <a
                              href={android}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Google Play Store Link"
                            >
                              <Icon name="PlayStore" />
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </StyledTableContainer>
      </main>
    </Layout>
  );
};

ArchivePage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default ArchivePage;
