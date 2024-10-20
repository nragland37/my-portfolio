import React, { useState } from 'react';
import { navLinks, socialMedia } from '@config';
import { Icon } from '@components/icons';
import IconLight from '@components/icons/light';
import { toggleTheme } from '@utils/light';
import MenuStyles from '@styles/MenuStyles';

const { StyledMenu, StyledHamburgerButton, StyledThemeToggle, StyleDropbar } =
  MenuStyles;

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Commented out for potential future use to manage body scroll
  /*
  import { useEffect } from 'react';

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; // disable scrolling
    } else {
      document.body.style.overflow = ''; // restore scrolling
    }
  }, [menuOpen]);
  */

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // toggle menuOpen state
  };

  const handleThemeToggle = () => {
    toggleTheme(); // toggle theme
  };

  return (
    <StyledMenu>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <StyledThemeToggle
          menuOpen={menuOpen}
          onClick={handleThemeToggle} // re-enabled theme toggle
          aria-label="Toggle theme"
        >
          <IconLight />
        </StyledThemeToggle>

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
      </div>

      <StyleDropbar menuOpen={menuOpen}>
        <nav>
          <ol>
            {navLinks.map(({ url, name }, i) => (
              <li key={i} style={{ '--i': i }}>
                <a
                  href={url}
                  onClick={() => setMenuOpen(false)} // close menu on link click
                  tabIndex={menuOpen ? 0 : -1} // disable focus when menu closed
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
                rel="noopener noreferrer"
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
    </StyledMenu>
  );
};

export default Menu;
