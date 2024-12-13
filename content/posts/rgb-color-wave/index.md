---
title: 'Colors, Colors, Spinning Colors!'
description: 'How I made text come alive with an RGB color wave and animated icons'
date: '2024-10-20'
slug: '/blog/rgb-color-wave'
tags:
  - 'react'
  - 'styled-components'
  - 'javascript'
  - 'animation'
  - 'learning'
---

<a id="top"></a>

## The Spark ✨

Sometimes, the smallest details can make a big impact. I wanted to add some interactive fun to my site, so I decided to implement a vibrant RGB color wave effect. This effect gives text a dynamic, animated vibe while also adding subtle interactivity to icons. Here's a breakdown of how I brought it to life.

### Step 1: The Color Wave Effect

The first step was creating the toggle functionality to activate or deactivate the color wave effect. This is managed by the `toggleColorWave` function:

```javascript
export const toggleColorWave = (updateToggleState) => {
  const isActive = localStorage.getItem('colorWaveEffect') !== 'colorWave';
  setColorWaveEffect(isActive);

  if (typeof updateToggleState === 'function') {
    updateToggleState(isActive);
  }
};
```

This function updates the state and saves the user’s preference in localStorage for consistency across sessions.

To actually apply the effect, I used CSS animations injected globally:
  
```javascript
@keyframes colorWave {
  0% { color: #ff00ff; }
  25% { color: #00ccff; }
  50% { color: #39ff14; }
  75% { color: #f4f014; }
  100% { color: #ff00ff; }
}

.color-wave h1, .color-wave h2, .color-wave span {
  animation: colorWave 15s linear infinite;
}
```

This animation smoothly transitions through colors, giving the text a lively RGB wave effect.

### Step 2: Spinning Icons

To complement the color wave effect, I added animations for icons. Depending on the toggle state, icons spin either clockwise or counterclockwise:

```javascript
@keyframes rotateIconClockwise {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes rotateIconCounterclockwise {
  0% { transform: rotate(360deg); }
  100% { transform: rotate(0deg); }
}

.rotate-icon-clockwise svg {
  animation: rotateIconClockwise 1s ease-in-out;
}

.rotate-icon-counterclockwise svg {
  animation: rotateIconCounterclockwise 1s ease-in-out;
}
```

This subtle motion gives a polished and dynamic look when toggling the effect.

### Step 3: The Icon

For the toggle button, I created a custom SVG icon that fits the playful RGB theme:

```javascript
import React from 'react';

const IconColor = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 464 464"
  >
    <circle cx="156" cy="156" r="156" fill="#befa91"></circle>
    <circle cx="308" cy="156" r="156" fill="#80aaff"></circle>
    <circle cx="232" cy="308" r="156" fill="#ff6d7a"></circle>
    <path
      fill="#9cbcff"
      d="M311.03,173.47c-48.672-28.64-109.379-28.645-158.06,0C145.967,110.774,177.106,50.415,232,19.73	C286.816,50.371,318.046,110.666,311.03,173.47z"
    ></path>
    <path
      fill="#ffe773"
      d="M232,292.27c-47.236,26.4-106.518,26.806-155.03-1.74c5.56-49.93,34.69-92.74,76-117.06	C158.67,224.61,189.08,268.28,232,292.27z"
    ></path>
    <path
      fill="#fff"
      d="M311.03,173.47c-5.7,51.14-36.11,94.81-79.03,118.8c-42.92-23.99-73.33-67.66-79.03-118.8	C201.642,144.83,262.349,144.825,311.03,173.47z"
    ></path>
    <path
      fill="#c0b3ff"
      d="M387.03,290.53c-47.043,27.682-106.305,28.973-155.03,1.74c42.92-23.99,73.33-67.66,79.03-118.8	C352.34,197.79,381.47,240.6,387.03,290.53z"
    ></path>
  </svg>
);

export default IconColor;
```

This colorful icon perfectly reflects the playful energy of the RGB wave.

### Step 4: Adding the Toggle Button

Finally, I added the toggle button to my options menu for user interaction:

```javascript
<button
  type="button"
  title="Toggle color wave effect"
  onClick={handleColorToggle}
  className={`color-toggle ${isColorMode ? 'color-toggle--active' : ''}`}
  aria-label="Toggle color wave effect"
>
  <IconColor />
</button>
```

The button is styled for hover effects and smooth transitions, making it fun and responsive to click.

### Wrapping Up

This RGB color wave effect was a fun way to make my site feel more alive without overwhelming the user. It’s subtle, interactive, and just flashy enough to make an impression.

<a href="#top" style="float: right;">Back to top</a>