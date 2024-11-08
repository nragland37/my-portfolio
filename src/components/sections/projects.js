import React, { useEffect, useRef, useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 90px;

  h2 {
    font-size: clamp(28px, 5vw, var(--fz-heading));
    font-weight: 600;
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 500;
    &:after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  .project-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1.5rem 1.25rem;
    border-radius: var(--border-radius);
    background-color: var(--projects-bg);
    transition: var(--transition);
    overflow: hidden;
    flex-grow: 1;
    height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : 'auto')};
  }

  .project-top {
    ${({ theme }) => theme.mixins.flexBetween};

    .folder {
      color: var(--projects-folder-color);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      color: var(--projects-links-color);
      z-index: 2;

      a {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 5px 7px;
        z-index: 3;
      }
    }
  }

  .project-title {
    margin: 0 0 25px;
    color: var(--projects-title-color);
    font-size: var(--fz-xxl);
    z-index: 3;
  }

  .project-description {
    color: var(--projects-description-color);
    font-size: 17px;
    flex-grow: 1;
    overflow: hidden;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;
      color: var(--projects-tech-color);

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/projects/" }
          frontmatter: { showInProjects: { ne: false } }
        }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `);

  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  const [maxHeight, setMaxHeight] = useState(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(i * 100)),
    );

    // Calculate the maximum height of project cards
    const heights = revealProjects.current.map(
      (project) => project.clientHeight,
    );
    setMaxHeight(Math.max(...heights));
  }, [prefersReducedMotion]);

  const projects = data.projects.edges.filter(({ node }) => node);

  const projectInner = (node) => {
    const { frontmatter, html } = node;
    const { github, external, title, tech } = frontmatter;
    const link = external || github;

    return (
      <a
        className="project-link"
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label={`Link to ${title} ${external ? 'external site' : 'GitHub repository'}`}
      >
        <div className="project-inner">
          <header>
            <h3 className="project-title">
              <a
                href={external}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${title} external link`}
              >
                {title}
              </a>
            </h3>

            <div
              className="project-description"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </header>

          <footer>
            {tech && (
              <ul className="project-tech-list">
                {tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            )}
          </footer>

          <div className="project-top">
            <div className="project-links">
              {external && (
                <a
                  href={external}
                  aria-label={`Visit ${title} external site`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="external" />
                </a>
              )}
              {github && (
                <a
                  href={github}
                  aria-label={`Visit ${title} GitHub repository`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="github" />
                </a>
              )}
            </div>
          </div>
        </div>
      </a>
    );
  };

  return (
    <StyledProjectsSection>
      <h2 ref={revealTitle}>Most Recent Projects.</h2>

      <Link
        className="inline-link archive-link"
        to="/archive"
        ref={revealArchiveLink}
      >
        view the archive
      </Link>

      <ul className="projects-grid">
        {prefersReducedMotion ? (
          <>
            {projects &&
              projects.map(({ node }, i) => (
                <StyledProject
                  key={i}
                  maxHeight={maxHeight}
                  ref={(el) => (revealProjects.current[i] = el)}
                >
                  {projectInner(node)}
                </StyledProject>
              ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {projects &&
              projects.map(({ node }, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={300}
                  exit={false}
                >
                  <StyledProject
                    maxHeight={maxHeight}
                    ref={(el) => (revealProjects.current[i] = el)}
                  >
                    {projectInner(node)}
                  </StyledProject>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </ul>
    </StyledProjectsSection>
  );
};

export default Projects;
