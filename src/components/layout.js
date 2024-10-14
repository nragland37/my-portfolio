import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Head, Nav, Social, Email, Footer } from '@components';
import { GlobalStyle, theme } from '@styles';
import { Analytics } from '@vercel/analytics/react';
import CustomCursor from '../utils/CustomCursor';
import StarBackground from '../utils/StarBackground';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';

  return (
    <>
      <Head />
      <div id="root">
        <StarBackground />
        <CustomCursor />
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StyledContent>
            <Nav isHome={isHome} />
            <Social isHome={isHome} />
            <Email isHome={isHome} />
            <div id="content">
              {children}
              <Footer />
            </div>
          </StyledContent>
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
