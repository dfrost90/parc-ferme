import axios from 'axios';

export const fetchData = async (url) => {
  try {
    const resp = await axios.get(url);
    return resp.data.MRData;
  } catch (error) {
    console.log(`There is an error: ${error}`);
  }
};
