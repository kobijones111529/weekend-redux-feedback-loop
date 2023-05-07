const id = (function * () {
  for (let i = 1; ; i++) {
    yield i;
  }
})();

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

export const getFeedback = async () => {
  return [...data];
};

export const addFeedback = async feedback => {
  data.push({ ...feedback, id: id.next().value });
};
