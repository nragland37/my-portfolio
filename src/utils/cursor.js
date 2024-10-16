// enable/disable
export const toggleCursor = (setCursorEnabled) => {
  setCursorEnabled((prev) => {
    const newState = !prev;
    const body = document.body;
    if (newState) {
      body.classList.add('cursor-enabled');
      body.classList.remove('cursor-disabled');
    } else {
      body.classList.add('cursor-disabled');
      body.classList.remove('cursor-enabled');
    }
    return newState;
  });
};

// Initialize the cursor based on user's preference or saved state
export const initCursor = () => {
  const body = document.body;
  body.classList.add('cursor-enabled');
};
