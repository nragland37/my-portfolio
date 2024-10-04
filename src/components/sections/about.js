import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

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
        color: var(--green);
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
    background-color: var(--white);

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
      background-color: var(--sand);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--sand);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const Category = styled.strong`
    color: var(--green);
    font-weight: bold;
  `;

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    {
      category: 'Programming Languages',
      details: 'Python, C++, R, SQL, JavaScript, TypeScript, HTML, CSS',
    },
    {
      category: (
        <>
          Web Development <br /> Libraries/Frameworks
        </>
      ),
      details: 'React, Next.js, Gatsby, Tailwind CSS',
    },
    {
      category: (
        <>
          Data Science <br /> Libraries/Frameworks
        </>
      ),
      details: 'Pandas, NumPy, Shiny, Plotly, Tidyverse',
    },
    {
      category: 'Design & Productivity Tools',
      details: 'Figma, Adobe InDesign & Acrobat, Microsoft Excel',
    },
    {
      category: (
        <>
          Development <br /> Tools & Platforms
        </>
      ),
      details: `
      Git, GitHub, VSCode, Docker, Jupyter(Notebook/Lab), RStudio, Anaconda,
      Virtual Machines, WSL2, MSYS2, MinGW, Vercel, Firebase, Oracle Apex, APIs
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
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>Hello!</p>
            <p>
              I specialize in computer science,
              cybersecurity, and data analytics, with a strong interest in fullstack
              development, always pushing myself to learn more. When I'm not coding,
              you’ll find me diving into hackathons, solving CTF challenges, or
              exploring data-driven projects. I love turning complex problems into
              simple, elegant solutions. Outside of tech, I enjoy traveling, hiking,
              camping, gaming, music, and skateboarding.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
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
              src="../../images/me.jpg"
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
