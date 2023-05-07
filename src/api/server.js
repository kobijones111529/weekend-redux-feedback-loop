import axios from "axios";

/**
 * Get all feedback from students
 * @returns {Promise<{id: number, feeling: number, understanding: number, support: number, comments: ?string}>}
 */
export const getFeedback = async () => {
  const response = await axios({
    method: 'GET',
    url: '/feedback'
  });
  return response.data;
};

/**
 * Add a student's feedback
 * @param {{feeling: number, understanding: number, support: number, comments: ?string}} feedback
 */
export const addFeedback = async feedback => {
  await axios({
    method: 'POST',
    url: '/feedback',
    data: feedback
  });
};
