---
title: 'How I Built a Custom Cursor'
description: 'A quick dive into how I implemented a custom cursor with smooth animations for my site'
date: '2024-10-05'
slug: '/blog/custom-cursor'
tags:
  - 'react'
  - 'styled-components'
  - 'GSAP'
  - 'javascript'
  - 'learning'
---

<a id="top"></a>

## The Idea 💡

I was looking to add a bit of character to my site. The default browser cursor was... fine, but I wanted something more engaging. So, I set out to build a custom cursor that could add a subtle layer of interactivity.

### Step 1: Setting Up the Component

I started by creating a new `CustomCursor` component in React. Using `styled-components`, I defined a circular cursor with a border:

```jsx
const StyledCursor = styled.div`
  position: fixed;
  width: 25px;
  height: 25px;
  border: 1.5px solid var(--cursor-border);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;
```

### Step 2: Adding a Custom SVG Icon

To give the cursor some personality, I added a custom SVG icon. I created a separate `IconCursor` component:

```jsx
import React from 'react';

const IconCursor = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-cursor"
    {...props}
  >
    <title>Cursor</title>
    <circle cx="12" cy="12" r="11" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export default IconCursor;
```

This icon was integrated into the main cursor component for that extra bit of flair:

```jsx
<StyledCursor ref={cursorRef}>
  <IconCursor />
</StyledCursor>
```

### Step 3: Smooth Animations with GSAP

To make the cursor feel fluid, I used `GSAP` for smooth animations. The cursor smoothly follows the mouse pointer, giving it a natural feel:

```jsx
gsap.to(cursorRef.current, {
  x,
  y,
  duration: 0.6,
  ease: 'power2.out',
});
```

### Step 4: Adding a Trail Effect

I decided to take it a step further by adding a trail effect, making it look like the cursor leaves a subtle glow behind. I used multiple trail segments for this:

```jsx
const TrailSegment = styled.div`
  position: fixed;
  width: 25px;
  height: 25px;
  background: var(--cursor-background);
  border-radius: 50%;
  pointer-events: none;
`;
```

Each trail segment updates its position slightly delayed, creating a trailing effect:

```jsx
const updateTrail = () => {
  trailRefs.current.forEach((ref, index) => {
    const delay = (index + 1) * 0.05;
    gsap.to(ref.current, {
      x: mousePosition.current.x,
      y: mousePosition.current.y,
      duration: 0.4,
      delay,
      opacity: isMoving ? 1 - index / trailLength : 0,
    });
  });
};
```

### Step 5: Adding Interactivity

To make it more dynamic, I added animations for when the cursor hovers over links or when the mouse is pressed:

```jsx
const handleMouseEnterLink = () => {
  gsap.to(cursorRef.current, {
    width: 50,
    height: 50,
    borderColor: 'var(--cursor-link-hover-border)',
    boxShadow: '0 0 25px var(--cursor-link-hover-shadow)',
  });
};
```

### Step 6: Toggle Feature

Finally, I added a toggle feature so users can enable or disable the custom cursor based on their preference:

```jsx
export const toggleCursor = (setCursorEnabled) => {
  setCursorEnabled((prev) => {
    document.body.classList.toggle('cursor-enabled', !prev);
    return !prev;
  });
};
```

### Wrapping Up

This was a fun way to add a bit of flair to my site, making it more interactive without being overwhelming. It’s those small touches that can enhance user experience.

<a href="#top" style="float: right;">Back to top</a>
