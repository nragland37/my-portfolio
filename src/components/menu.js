import React, { useState, useEffect } from 'react';
import { navLinks, socialMedia } from '@config';
import { Icon } from '@components/icons';
import IconLight from '@components/icons/light';
import { toggleTheme } from '@utils/light';
import MenuStyles from '@styles/MenuStyles';

const { StyledMenu, StyledHamburgerButton, StyledThemeToggle, StyleDropbar } = MenuStyles;

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('dark'); // Default to dark theme

  // Get the current theme from local storage
  const getCurrentTheme = () => localStorage.getItem('theme') || 'dark'; 

  // Set the initial theme state on load
  useEffect(() => {
    const theme = getCurrentTheme(); 
    setCurrentTheme(theme);
  }, []);

  // Toggle the menu open/close
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Handle theme toggle
  const handleThemeToggle = () => {
    toggleTheme(); 
    const updatedTheme = getCurrentTheme(); 
    setCurrentTheme(updatedTheme);
  };

  return (
    <StyledMenu>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <StyledThemeToggle menuOpen={menuOpen} onClick={handleThemeToggle} aria-label="Toggle theme">
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
