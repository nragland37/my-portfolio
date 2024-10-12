import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Head, Loader, Nav, Social, Email, Footer } from '@components';
import { GlobalStyle, theme } from '@styles';
import { Analytics } from '@vercel/analytics/react';
import { generateStars } from '../utils/stars';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);
  const [stars1, setStars1] = useState('');
  const [stars2, setStars2] = useState('');
  const [stars3, setStars3] = useState('');

  // Function to update stars on scroll or resize
  const populateStars = () => {
    setStars1(generateStars(300)); // small
    setStars2(generateStars(150)); // medium
    setStars3(generateStars(100)); // large
  };

  useEffect(() => {
    if (!isLoading) {
      populateStars(); // Initial population of stars
      window.addEventListener('resize', populateStars); // Update stars on resize
    }

    return () => {
      window.removeEventListener('resize', populateStars); // Cleanup on unmount
    };
  }, [isLoading]);

  return (
    <>
      <Head />
      <div id="root">
        {/* Star background layers */}
        <div id="stars1" style={{ boxShadow: stars1 }}></div>
        <div id="stars2" style={{ boxShadow: stars2 }}></div>
        <div id="stars3" style={{ boxShadow: stars3 }}></div>

        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <StyledContent>
              <Nav isHome={isHome} />
              <Social isHome={isHome} />
              <Email isHome={isHome} />
              <div id="content">
                {children}
                <Footer />
              </div>
            </StyledContent>
          )}
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
