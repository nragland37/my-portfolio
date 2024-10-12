export const generateStars = (count) => {
  let stars = '';
  for (let i = 0; i < count; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * document.documentElement.scrollHeight; // Full page height
    stars += `${x}px ${y}px #fff, `;
  }
  // Remove the trailing comma/space at last iteration
  return stars.slice(0, -2);
};
