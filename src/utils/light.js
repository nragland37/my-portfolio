const DEFAULT_THEME = 'dark';

/* Set theme and update document classes */
const setTheme = (theme) => {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark-mode');
    root.classList.remove('light-mode');
  } else {
    root.classList.add('light-mode');
    root.classList.remove('dark-mode');
  }
  localStorage.setItem('theme', theme);
};

/* Toggle the theme and update React state */
export const toggleTheme = (updateToggleState) => {
  const currentTheme = localStorage.getItem('theme') || DEFAULT_THEME;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);

  /* Update the React state with the new theme */
  if (typeof updateToggleState === 'function') {
    updateToggleState(newTheme === 'dark');
  }
};

/* Initialize theme based on saved state or default */
export const initTheme = (updateToggleState) => {
  /* Check if window is defined to avoid SSR */
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme') || DEFAULT_THEME;

    setTheme(savedTheme);
    if (typeof updateToggleState === 'function') {
      updateToggleState(savedTheme === 'dark');
    }
  }
};

/* Inject global theme toggle CSS styles */
const injectGlobalStyles = () => {
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.innerHTML = `
      .theme-toggle {
        color: var(--menu-text-color);
        transition: color 0.3s;
        --theme-toggle-duration: 500ms; 
      }

      /* desktop */
      .theme-toggle__expand {
        transition: transform var(--theme-toggle-duration);
      }

      .theme-toggle--toggled .theme-toggle__expand {
        transform: rotate(360deg);
      }

      /* mobile */
      .theme-toggle__around {
        transition: transform var(--theme-toggle-duration);
      }

      .theme-toggle--toggled .theme-toggle__around {
        transform: rotate(360deg);
      }
    `;
    document.head.appendChild(style);
  }
};

/* Only inject styles in the browser */
if (typeof document !== 'undefined') {
  injectGlobalStyles();
}
