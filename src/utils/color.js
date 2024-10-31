const COLOR_WAVE_MODE = 'colorWave';

/* Toggle the color wave effect for text elements */
const setColorWaveEffect = (isActive) => {
  const root = document.documentElement;
  if (isActive) {
    root.classList.add('color-wave');
  } else {
    root.classList.remove('color-wave');
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
      /* Color wave effect keyframes */
      @keyframes colorWave {
        0% { color: #ff00ff; }
        25% { color: #00ccff; }
        50% { color: #39ff14; }
        75% { color: #f4f014; }
        100% { color: #ff00ff; }
      }

      /* Apply colorWave animation to text elements when color-wave class is active */
      .color-wave h1, .color-wave h2, .color-wave h3, 
      .color-wave h4, .color-wave h5, .color-wave h6,
      .color-wave p, .color-wave a, .color-wave span, 
      .color-wave li {
        animation: colorWave 5s linear infinite;
      }
    `;
    document.head.appendChild(style);
  }
};

/* Only inject styles in the browser */
if (typeof document !== 'undefined') {
  injectGlobalStyles();
}
