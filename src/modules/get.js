import displayLeader from './displayLeader.js';

const getData = async (BASE_URL) => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  displayLeader(data);
};
// eslint-disable-next-line import/prefer-default-export
export default getData;