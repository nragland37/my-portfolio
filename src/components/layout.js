import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Head, Nav, Options, Email, Footer } from '@components';
import { GlobalStyle, theme } from '@styles';
import { Analytics } from '@vercel/analytics/react';
import { initCursor, toggleCursor } from '@utils/cursor';
import { initTheme, toggleTheme } from '@utils/light';
import StarBackground from '../styles/StarBackground';
import CustomCursor from '../styles/CustomCursor';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [cursorEnabled, setCursorEnabled] = useState(true);

  useEffect(() => {
    // Initialize theme and cursor on load
    initTheme(); 
    initCursor();
  }, []);

  return (
    <>
      <Head />
      <div id="root">
        <StarBackground />
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {/* Conditionally render the custom cursor if enabled */}
          {cursorEnabled && <CustomCursor />}
          <StyledContent>
            <Nav isHome={isHome} />
            <Options
              isHome={isHome}
              onToggleTheme={toggleTheme} // Toggle between dark and light themes
              onToggleCursor={() => toggleCursor(setCursorEnabled)} // Pass the toggleCursor handler
            />
            <Email isHome={isHome} />
            <div id="content">
              {children}
              <Footer />
            </div>
          </StyledContent>
          {/* Analytics component for Vercel Analytics */}
          <Analytics />
        </ThemeProvider>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
