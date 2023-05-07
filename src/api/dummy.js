// Generate unique id's for dummy data
const id = (function * () {
  for (let i = 1; ; i++) {
    yield i;
  }
})();

// "Database"
/**
 * @type {{id: number, feeling: number, understanding: number, support: number, comments: ?string}}
 */
const data = [
  {
    feeling: 2,
    understanding: 4,
    support: 5,
    comments: ''
  }
]
  .map(feedback => {
    return { ...feedback, id: id.next().value };
  });

  /**
   * Get all feedback from students
   * @returns {Promise<{id: number, feeling: number, understanding: number, support: number, comments: ?string}>}
   */
export const getFeedback = async () => {
  return [...data];
};

/**
 * Add a student's feedback
 * @param {{feeling: number, understanding: number, support: number, comments: ?string}} feedback
 */
export const addFeedback = async feedback => {
  data.push({ ...feedback, id: id.next().value });
};
