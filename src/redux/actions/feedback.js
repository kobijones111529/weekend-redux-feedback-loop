/**
 * Update feedback with new data
 * @param {{feeling: ?number, understanding: ?number, support: ?number, comments: ?string}} feedback 
 * @returns {{type: string, payload: {feeling: ?number, understanding: ?number, support: ?number, comments: ?string}}}
 */
export const setFeedback = feedback => {
  return {
    type: 'feedback/set',
    payload: feedback
  };
};
