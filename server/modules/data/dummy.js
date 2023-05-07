// Unique id generator
const id = (function * () {
  for (let i = 1; ; i++) {
    yield i;
  }
})();

// "Database"
const data = [
  {
    feeling: 5,
    understanding: 5,
    support: 5,
    comments: null
  }
]
  .map(feedback => {
    return { ...feedback, id: id.next().value };
  });

// Dummy data storage api implementation
module.exports = {
  getFeedback: async () => [...data],
  addFeedback: async feedback => {
    data.push({ ...feedback, id: id.next().value });
  }
};
