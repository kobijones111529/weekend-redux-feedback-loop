const id = (function * () {
  for (let i = 1; ; i++) {
    yield i;
  }
})();

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

module.exports = {
  getFeedback: async () => [...data],
  addFeedback: async feedback => {
    data.push({ ...feedback, id: id.next().value });
  }
};
