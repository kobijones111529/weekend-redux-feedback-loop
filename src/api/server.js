import axios from "axios";

export const getFeedback = async () => {
  const response = await axios({
    method: 'GET',
    url: '/feedback'
  });
  return response.data;
};

export const addFeedback = async feedback => {
  await axios({
    method: 'POST',
    url: '/feedback',
    data: feedback
  });
};
