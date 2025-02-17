import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 1000px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 250px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--about-skill-bullet);
        font-size: var(--fz-lg);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--about-wrapper-bg);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--about-blend-overlay);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--about-border);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const Category = styled.span`
    color: var(--about-category-text);
    font-weight: bold;
  `;

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  const skills = [
    {
      category: 'Programming Languages',
      details:
        'Python, C++, R, SQL, JavaScript, TypeScript, HTML, CSS, GraphQL',
    },
    {
      category: (
        <>
          Web Development <br /> Libraries & Frameworks
        </>
      ),
      details: 'React, Next.js, Gatsby.js, Tailwind CSS, Styled Components',
    },
    {
      category: (
        <>
          Data Science <br /> Libraries & Frameworks
        </>
      ),
      details: 'Pandas, NumPy, Shiny, Plotly, Tidyverse',
    },
    {
      category: 'Design & Productivity Tools',
      details: 'Adobe InDesign & Acrobat, Microsoft Excel',
    },
    {
      category: (
        <>
          Development <br /> Tools & Platforms
        </>
      ),
      details: `
      Git, GitHub, VSCode, Docker, Jupyter(Notebook/Lab), RStudio, Anaconda,
      Virtual Machines, WSL2, MSYS2, MinGW, Vercel, Firebase, Oracle Apex, APIs, SEO
    `,
    },
    {
      category: 'Security & Networking',
      details: `
      Kali Linux, GNU/Linux, Windows Security Hardening, Bash Scripting, PowerShell, 
      Penetration Testing, Wireshark, Command Line Tools, CTF Challenges
    `,
    },
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">about.</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>Hello!</p>
            <p>
              My name is Nicholas Ragland. I specialize in computer science,
              cybersecurity, and data analytics, with a recent interest on
              fullstack development. I love solving challenging problems!
              Whether it’s building solutions for complex data projects, CTF &
              security challenges, leetcoding, learning new stacks & languages,
              or experimenting with new software. I believe being curious and
              continuously learning, keeping up with the latest and ever
              changing technologies, is the key to success in this field.
            </p>
            <p>
              When I step away from my screen, I enjoy spending time with my
              family and friends, exploring the outdoors, listening to music,
              drinking lots of coffee, and traveling. I also enjoy reading and
              staying active, keeping a balance between technology and the real
              world is so important to me. As cliche as it might seem, I believe
              that the best way to predict the future is to create it today.
              Thanks for stopping by!
            </p>
          </div>

          <ul className="skills-list">
            {skills &&
              skills.map((skill, i) => (
                <li key={i}>
                  <Category>{skill.category}</Category> <br />
                  {skill.details}
                </li>
              ))}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/about.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Profile picture"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
