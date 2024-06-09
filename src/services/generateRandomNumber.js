function generateRandomNumber({ min, max }) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
}

export default generateRandomNumber;