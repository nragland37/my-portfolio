const COLOR_WAVE_MODE = 'colorWave';

/* Toggle the color wave effect for text elements */
const setColorWaveEffect = (isActive) => {
  const root = document.documentElement;
  if (isActive) {
    root.classList.add('color-wave');
    root.classList.add('rotate-icon-clockwise');
    root.classList.remove('rotate-icon-counterclockwise');
  } else {
    root.classList.add('rotate-icon-counterclockwise');
    root.classList.remove('color-wave');
    root.classList.remove('rotate-icon-clockwise');
  }
  localStorage.setItem('colorWaveEffect', isActive ? COLOR_WAVE_MODE : 'off');
};

/* Toggle the color wave effect state */
export const toggleColorWave = (updateToggleState) => {
  const currentEffect = localStorage.getItem('colorWaveEffect');
  const isActive = currentEffect !== COLOR_WAVE_MODE;

  setColorWaveEffect(isActive);

  /* Update the React state to reflect the new effect status */
  if (typeof updateToggleState === 'function') {
    updateToggleState(isActive);
  }
};

/* Initialize color wave effect based on saved state */
export const initColorWaveEffect = (updateToggleState) => {
  if (typeof window !== 'undefined') {
    const savedEffect =
      localStorage.getItem('colorWaveEffect') === COLOR_WAVE_MODE;
    setColorWaveEffect(savedEffect);
    if (typeof updateToggleState === 'function') {
      updateToggleState(savedEffect);
    }
  }
};

/* Inject global CSS styles for the color wave effect */
const injectGlobalStyles = () => {
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes colorWave {
        0% { color: #ff00ff; }
        25% { color: #00ccff; }
        50% { color: #39ff14; }
        75% { color: #f4f014; }
        100% { color: #ff00ff; }
      }

      @keyframes rotateIconClockwise {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @keyframes rotateIconCounterclockwise {
        0% { transform: rotate(360deg); }
        100% { transform: rotate(0deg); }
      }

      /* Apply color wave effect to elements */
      .color-wave h1, .color-wave h2, .color-wave h3, 
      .color-wave h4, .color-wave h5, .color-wave h6,
      .color-wave a, .color-wave span {
        animation: colorWave 15s linear infinite;
      }

      .rotate-icon-clockwise svg, .rotate-icon-clockwise img {
        animation: rotateIconClockwise 1s ease-in-out;
        animation-iteration-count: 1;
      }

      .rotate-icon-counterclockwise svg {
        animation: rotateIconCounterclockwise 1s ease-in-out;
        animation-iteration-count: 1;
      }
    `;
    document.head.appendChild(style);
  }
};

/* Only inject styles in the browser */
if (typeof document !== 'undefined') {
  injectGlobalStyles();
}
