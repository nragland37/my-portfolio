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

    tbody tr {
      transition: background-color 0.3s ease;

      &:hover,
      &:focus {
        background-color: var(--light-zeus);
      }
    }

    th,
    td {
      padding: 15px;
      text-align: left;
      border-bottom: 1px solid var(--dark-slate);
      vertical-align: middle;
      color: var(--light-slate);

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

      svg {
        width: 22px;
        height: 22px;
      }
    }

    th {
      text-transform: uppercase;
      font-size: var(--fz-sm);
      font-weight: 600;
      color: var(--green);
    }

    td {
      &.year {
        padding-right: 15px;
        font-weight: 500;
        color: var(--lightest-slate);

        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }

      &.title {
        color: var(--white);
        font-size: var(--fz-lg);
        font-weight: 600;
        line-height: 1.25;
      }

      &.tech {
        font-size: var(--fz-sm);
        font-family: var(--font-mono);
        line-height: 1.5;
        .separator {
          margin: 0 5px;
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

  return (
    <Layout location={location}>
      <Helmet title="Archive" />

      <main>
        <header ref={revealTitle}>
          <h1 className="big-heading">Archive</h1>
          <p className="subtitle">All the things I’ve worked on</p>
        </header>

        <StyledTableContainer ref={revealTable}>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th className="hide-on-mobile">Built with</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 &&
                projects.map(({ node }, i) => {
                  const { date, github, external, ios, android, title, tech } =
                    node.frontmatter;
                  return (
                    <tr key={i} ref={(el) => (revealProjects.current[i] = el)}>
                      <td className="overline year">{`${new Date(
                        date,
                      ).getFullYear()}`}</td>

                      <td className="title">{title}</td>

                      <td className="tech hide-on-mobile">
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
                            <a href={external} aria-label="External Link">
                              <Icon name="External" />
                            </a>
                          )}
                          {github && (
                            <a href={github} aria-label="GitHub Link">
                              <Icon name="GitHub" />
                            </a>
                          )}
                          {ios && (
                            <a href={ios} aria-label="Apple App Store Link">
                              <Icon name="AppStore" />
                            </a>
                          )}
                          {android && (
                            <a
                              href={android}
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
