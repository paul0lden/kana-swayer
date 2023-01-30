/** @typedef {import('../app.model').KanaModel} KanaModel */

/** @returns {Schema} */
export default (model) => ({
  tag: 'div',
  model,
  styles: {
    fontSize: '104px',
    color: 'white',
    height: '10vh',
  },
  text: (state) => state.displayedKana,
});
