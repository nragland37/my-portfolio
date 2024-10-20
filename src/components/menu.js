import React, { useState, useEffect } from 'react';
import { navLinks, socialMedia } from '@config';
import { Icon } from '@components/icons';
import IconLight from '@components/icons/light';
import { toggleTheme } from '@utils/light'; // Correctly added back
import MenuStyles from '@styles/MenuStyles';

const { StyledMenu, StyledHamburgerButton, StyledThemeToggle, StyleDropbar } =
  MenuStyles;

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable body scroll when the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when menu is open
    } else {
      document.body.style.overflow = ''; // Restore scrolling when menu is closed
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Toggle the menuOpen state (open/close)
  };

  const handleThemeToggle = () => {
    toggleTheme(); // Toggle theme (dark/light mode)
  };

  return (
    <StyledMenu>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <StyledThemeToggle
          menuOpen={menuOpen}
          onClick={handleThemeToggle} // Re-enabled the theme toggle functionality
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
                  onClick={() => setMenuOpen(false)} // Close menu when link clicked
                  tabIndex={menuOpen ? 0 : -1} // Disable focus when menu is closed
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
