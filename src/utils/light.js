export const toggleTheme = () => {
  const root = document.documentElement;
  const currentTheme = localStorage.getItem('theme') || 'dark'; // Default to dark

  if (currentTheme === 'light') {
    root.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark'); // Set to dark mode
  } else {
    root.classList.add('light-mode');
    localStorage.setItem('theme', 'light'); // Set to light mode
  }
};

// Initialize the theme on page load based on user preference
export const initTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark mode
  const root = document.documentElement;

  if (savedTheme === 'light') {
    root.classList.add('light-mode'); // Apply light mode if saved
  } else {
    root.classList.remove('light-mode'); // Apply dark mode by default
  }
};
