import styled, { keyframes, css } from 'styled-components';

// Smooth slide down for opening the dropdown
export const smoothSlideDown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Smooth slide up for closing the dropdown
export const smoothSlideUp = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

// Animation for nav links dropping into place after dropdown opens
export const navLinksDropIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px); 
  }
  100% {
    opacity: 1;
    transform: translateY(0); 
  }
`;

export const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledHamburgerButton = styled.button`
  ${({ theme }) => theme.mixins.flexCenter};
  position: relative;
  z-index: 10; /* Higher z-index than the dropdown */
  padding: 0;
  border: 0;
  background-color: transparent;
  color: var(--white);
  transition: all 0.3s ease-in-out;

  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    background-color: ${({ menuOpen }) => (menuOpen ? 'var(--green)' : 'var(--white)')};
    transition: all 0.3s ease-in-out;
    transform: ${({ menuOpen }) => (menuOpen ? 'rotate(225deg)' : 'rotate(0)')};

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${({ menuOpen }) => (menuOpen ? 'var(--green)' : 'var(--white)')};
      transition: all 0.3s ease-in-out;
    }

    &:before {
      top: ${({ menuOpen }) => (menuOpen ? '0' : '-10px')};
      opacity: ${({ menuOpen }) => (menuOpen ? '0' : '1')};
    }

    &:after {
      bottom: ${({ menuOpen }) => (menuOpen ? '0' : '-10px')};
      transform: ${({ menuOpen }) => (menuOpen ? 'rotate(-90deg)' : 'rotate(0)')};
    }
  }
`;

export const StyledThemeToggle = styled.button`
  padding: 10px;
  background-color: transparent;
  border: none;
  color: var(--white);
  cursor: pointer;
  opacity: ${({ menuOpen }) => (menuOpen ? '1' : '0')};
  transform: ${({ menuOpen }) => (menuOpen ? 'translateY(0)' : 'translateY(-20px)')};
  transition: opacity 0.5s ease, transform 0.5s ease;
  pointer-events: ${({ menuOpen }) => (menuOpen ? 'auto' : 'none')}; /* Disable clicks when menu is closed */

  &:hover,
  &:focus {
    transform: translateY(-3px);
    color: var(--green);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const StyleDropbar = styled.aside`
  @media (max-width: 768px) {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    width: 100%;
    min-height: calc(100vh - var(--nav-height));
    min-height: calc(100dvh - var(--nav-height)); /* dynamic viewport height - mostly for iOS browsers / adjusts for the bottom safe area */
    overflow-y: auto;
    background-color: var(--white);
    padding-bottom: env(safe-area-inset-bottom);
    opacity: 0;
    transform: translateY(-100%); /* Hide the dropdown by default */
    z-index: 9; /* Lower z-index than the hamburger button */
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* Disable pointer events when menu is closed */
    pointer-events: ${({ menuOpen }) => (menuOpen ? 'auto' : 'none')};

    /* slide animation */
    transition: opacity 0.5s ease, transform 0.5s ease;
    ${({ menuOpen }) =>
      menuOpen &&
      css`
        opacity: 1;
        transform: translateY(0);
      `}

    nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-grow: 1;

      ol {
        list-style: none;
        padding: 0;
        margin: 20px 0;
        text-align: center;
        width: 100%;

        li {
          cursor: pointer;
          width: 100%;
          opacity: 0;
          transform: translateY(-30px);
          transition: none;

          animation: ${({ menuOpen }) =>
            menuOpen
              ? css`
                  ${navLinksDropIn} 0.8s ease forwards;
                  animation-delay: calc(0.15s * var(--i));
                `
              : 'none'};

          button,
          a {
            display: block;
            font-size: 1.25rem;
            width: 100%;
            padding: 1.5rem 0;
            background-color: var(--white);
            border: none;
            color: var(--midnight);
            letter-spacing: 0.15em;
            text-align: center;
            transition: background-color 0.3s ease, color 0.3s ease;
            text-decoration: none;

            &:hover {
              color: var(--green);
              background-color: var(--midnight);
            }
          }
        }
      }
    }

    .social-section {
      background-color: var(--midnight);
      padding: 2rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      animation: ${fadeIn} 0.7s ease forwards;
      margin-top: auto;
      padding-bottom: env(safe-area-inset-bottom);

      .social-icons {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        padding: 0 1rem;
        opacity: 0;
        animation: ${fadeInUp} 0.5s ease forwards 0.3s;

        a {
          svg {
            color: var(--white);
            width: 2rem;
            height: 2rem;
            transition: color 0.5s ease;

            &:hover {
              color: var(--green);
            }
          }
        }
      }

      .resume-button {
        ${({ theme }) => theme.mixins.bigButton};
        padding: 0.75rem 1.5rem;
        font-size: var(--fz-lg);
        letter-spacing: 0.05em;
        margin-top: 1rem;
        margin-bottom: 2rem;
      }
    }
  }

  @media (max-width: 375px) {
    nav {
      ol {
        li {
          button {
            font-size: 1.125rem;
          }
        }
      }
    }
  }
`;

const MenuStyles = {
  StyledMenu,
  StyledHamburgerButton,
  StyledThemeToggle,
  StyleDropbar,
};

export default MenuStyles;