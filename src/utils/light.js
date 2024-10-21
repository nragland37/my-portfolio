// 'dark' or 'light' to set the default theme
const DEFAULT_THEME = 'light';

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

export const toggleTheme = () => {
  const currentTheme = localStorage.getItem('theme') || DEFAULT_THEME;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
};

export const initTheme = () => {
  const savedTheme = localStorage.getItem('theme') || DEFAULT_THEME;
  setTheme(savedTheme);
};
