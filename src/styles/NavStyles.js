import styled, { css, keyframes } from 'styled-components';

// Keyframes for animations
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 65px;
  width: 100%;
  height: var(--nav-height);
  background-color: var(--midnight);
  backdrop-filter: blur(5px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${(props) =>
      props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: var(--midnight);
        box-shadow: 0 10px 30px -10px var(--green);
      `};

    ${(props) =>
      props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--green);
      `};
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: var(--green);
  font-family: var(--font-mono);
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};
    a {
      color: var(--white);
      width: 75px;
      height: 75px;
      position: relative;
      z-index: 1;

      .circle-container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transform: scale(0.5);
        transition:
          opacity 0.3s ease-in-out,
          transform 0.3s ease-in-out;

        @media (prefers-reduced-motion: no-preference) {
          transition: var(--transition);
        }
      }

      .logo-container {
        position: relative;
        z-index: 1;
        svg {
          fill: none;
          user-select: none;
          width: 100%;
          height: 100%;
          animation: ${fadeInAnimation} 1s ease-in-out;

          @media (prefers-reduced-motion: no-preference) {
            transition: var(--transition);
          }
          circle {
            fill: var(--midnight);
          }
        }
      }

      &:hover,
      &:focus {
        outline: 0;

        .circle-container {
          transform: scale(1);
        }
        .logo-container {
          animation: ${pulseAnimation} 1.5s ease-in-out infinite;
          svg {
            transition: fill 0.3s ease;
            fill: var(--white);
          }
        }
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  ol {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      position: relative;
      font-size: var(--fz-md);

      a {
        padding: 20px;
        letter-spacing: 0.05em;
        white-space: nowrap;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledSocial = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  list-style: none;
  margin-left: 20px;

  li {
    margin-left: 16px;
    flex-shrink: 0;

    a {
      display: flex;
      align-items: center;
      padding: 10px;
      svg {
        width: 28px;
        height: 28px;
      }
    }
  }

  @media (max-width: 920px) {
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }

  .social-icon-enter {
    opacity: 0;
    transform: translateX(50px); /* Start from the right */
  }

  .social-icon-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition:
      opacity 300ms ease-in-out,
      transform 300ms ease-in-out;
  }

  .social-icon-exit {
    opacity: 1;
    transform: translateX(0);
  }

  .social-icon-exit-active {
    opacity: 0;
    transform: translateX(50px); /* Exit to the right */
    transition:
      opacity 300ms ease-in-out,
      transform 300ms ease-in-out;
  }
`;

const StyledMenuButton = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: relative;
    z-index: 12;
    button {
      background: none;
      border: none;
      cursor: pointer;
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
`;

const NavStyles = {
  StyledHeader,
  StyledNav,
  StyledLinks,
  StyledSocial,
  StyledMenuButton,
};

export default NavStyles;
