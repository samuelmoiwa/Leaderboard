import display from './display.js';

const getData = async (BASE_URL) => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  display(data);
};
// eslint-disable-next-line import/prefer-default-export
export default getData;