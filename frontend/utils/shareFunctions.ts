
  export const generateRandomColor = () => {
    const rand = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return {
      backgroundColor: rand,
    };
  };

