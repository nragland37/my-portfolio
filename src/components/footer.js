import React /*, { useState, useEffect }*/ from 'react';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--footer-social-link-color);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--footer-text-color);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

const Footer = () => {
  /*
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
    isLoading: true,
  });
  // Fetch GitHub api data
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
    fetch('https://api.github.com/repos/nragland37/my-portfolio')
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
          isLoading: false,
        });
      })
      .catch((e) => {
        console.error(e);
        // stop loading to prevent continuous requests
        setGitHubInfo({ isLoading: false });
      });
  }, []);
  */
  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a
                  href={url}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>

      <StyledCredit tabIndex="-1">
        <a
          href="https://github.com/nragland37/my-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>© 2024 Nicholas Ragland</div>
          {/* null checks for no data, not the number 0 
          (which would be falsy and not render the component) */}
          {/*
          {!githubInfo.isLoading &&
            githubInfo.stars !== null &&
            githubInfo.forks !== null && (
              <div className="github-stats">
                <span>
                  <Icon name="Star" />
                  <span>{githubInfo.stars.toLocaleString()}</span>
                </span>
                <span>
                  <Icon name="Fork" />
                  <span>{githubInfo.forks.toLocaleString()}</span>
                </span>
              </div>
            )} */}
        </a>
      </StyledCredit>
    </StyledFooter>
  );
};

export default Footer;
