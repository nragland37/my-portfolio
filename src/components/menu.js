import React, { useState, useRef } from 'react';
import { navLinks, socialMedia } from '@config';
import { useOnClickOutside } from '@hooks';
import { Icon } from '@components/icons';
import MenuStyles from '@styles/MenuStyles'; // Import the separated MenuStyles

const { StyledMenu, StyledHamburgerButton, StyleDropbar } = MenuStyles;

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close the menu when clicked outside
  useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  return (
    <StyledMenu>
      <div ref={wrapperRef}>
        <StyledHamburgerButton
          menuOpen={menuOpen}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <div className="ham-box">
            <div className="ham-box-inner" />
          </div>
        </StyledHamburgerButton>

        <StyleDropbar menuOpen={menuOpen}>
          <nav>
            <ol>
              {navLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <a
                    href={url}
                    onClick={() => setMenuOpen(false)}
                    tabIndex={menuOpen ? 0 : -1}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="social-section">
            <div className="social-icons">
              {socialMedia.map(({ url, name }, i) => (
                <a
                  key={i}
                  href={url}
                  aria-label={name}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={menuOpen ? 0 : -1}
                >
                  <Icon name={name} />
                </a>
              ))}
            </div>

            <a
              className="resume-button"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={menuOpen ? 0 : -1}
            >
              Resume
            </a>
          </div>
        </StyleDropbar>
      </div>
    </StyledMenu>
  );
};

export default Menu;
