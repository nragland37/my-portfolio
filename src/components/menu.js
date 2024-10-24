import React, { useState, useEffect } from 'react';
import { navLinks, socialMedia } from '@config';
import { toggleTheme, initTheme } from '@utils/light';
import { Icon } from '@components/icons';
import MenuStyles from '@styles/MenuStyles';

const { StyledMenu, StyledHamburgerButton, StyledThemeToggle, StyleDropbar } =
  MenuStyles;

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleThemeToggle = () => {
    toggleTheme((isDark) => setIsDarkMode(isDark)); 
  };

  useEffect(() => {
    initTheme((isDark) => setIsDarkMode(isDark)); 
  }, []);

  return (
    <StyledMenu>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* reverse logic - dark-sun / light-moon */}
        <StyledThemeToggle
          onClick={handleThemeToggle}
          className={`theme-toggle ${isDarkMode ? '' : 'theme-toggle--toggled'}`} 
          aria-label="Toggle theme"
        >
          <Icon name="light" />
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
