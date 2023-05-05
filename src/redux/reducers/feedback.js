export const feedback = (
  state = {
    feeling: null,
    understanding: null,
    support: null,
    comments: null
  },
  action
) => {
  switch (action.type) {
    case 'feedback/set':
      return action.payload;
    default:
      return state;
  }
};
