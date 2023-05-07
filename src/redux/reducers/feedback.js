/**
 * Individual student feedback
 * @param {{feeling: ?number, understanding: ?number, support: ?number, comments: ?string}} state
 * @param {{type: string, payload: {feeling: ?number, understanding: ?number, support: ?number, comments: ?string}}} action
 */
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
