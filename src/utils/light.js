const setTheme = (theme) => {
  const root = document.documentElement;
  if (theme === 'light') {
    root.classList.add('light-mode');
  } else {
    root.classList.remove('light-mode');
  }
  localStorage.setItem('theme', theme);
};

export const toggleTheme = () => {
  const currentTheme = localStorage.getItem('theme') || 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
};

export const initTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
};
