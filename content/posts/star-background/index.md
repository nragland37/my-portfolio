---
title: 'Creating a Starry Background'
description: 'How I added a dynamic, layered starfield background'
date: '2024-10-08'
slug: '/blog/star-background'
tags:
  - 'react'
  - 'styled-components'
  - 'javascript'
  - 'animation'
  - 'learning'
---

<a id="top"></a>

## Shooting for the Stars 🌌

Adding a little magic to a website doesn’t have to be complicated. I decided to create a starry background for my site to give it a subtle yet captivating atmosphere. The best part? It’s dynamic and responsive! Here’s how I built it.

### Step 1: Generating the Stars

First, I needed a way to randomly generate stars across the entire page. Using JavaScript, I created a utility function that scatters stars of various sizes:

```javascript
const GenerateStars = (count) => {
  let stars = '';
  for (let i = 0; i < count; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * document.documentElement.scrollHeight; // Full page height
    stars += `${x}px ${y}px var(--bg-star-color), `;
  }
  return stars.slice(0, -2); // Remove trailing comma
};
```

This function positions stars randomly and applies a color variable for flexibility in theming.

### Step 2: Populating the Layers

To make the effect more immersive, I used three layers of stars—small, medium, and large—each with a different density:

```javascript
const [stars1, setStars1] = useState('');
const [stars2, setStars2] = useState('');
const [stars3, setStars3] = useState('');

const populateStars = useCallback(() => {
  setStars1(GenerateStars(750)); // Small stars
  setStars2(GenerateStars(300)); // Medium stars
  setStars3(GenerateStars(80)); // Large stars
}, []);

useEffect(() => {
  populateStars();
  window.addEventListener('resize', populateStars);

  return () => {
    window.removeEventListener('resize', populateStars);
  };
}, [populateStars]);
```

Each layer responds to window resizing to ensure the stars remain perfectly positioned on any screen size.

### Step 3: Styling the Stars

With the stars generated, I rendered the three layers using box-shadow for efficiency:

```javascript
<div id="stars1" style={{ boxShadow: stars1 }}></div>
<div id="stars2" style={{ boxShadow: stars2 }}></div>
<div id="stars3" style={{ boxShadow: stars3 }}></div>
```

The result is a visually layered starfield that gives depth to the background.

### Step 4: Integrating with the Layout

To make the background work seamlessly across all pages, I added it to my layout component:

```javascript
import StarBackground from '../styles/StarBackground';

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';

  return (
    <>
      <StarBackground />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledContent>
          <Nav isHome={isHome} />
          <Options isHome={isHome} />
          <div id="content">{children}</div>
          <Footer />
        </StyledContent>
      </ThemeProvider>
    </>
  );
};
```

This ensures the starry background is visible across the site while keeping it modular.

### Wrapping Up

This starry background added just the right touch of whimsy to my site. It’s lightweight, responsive, and creates an engaging visual effect without overwhelming the design. 🌠

<a href="#top" style="float: right;">Back to top</a>
