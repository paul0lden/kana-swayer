/** @typedef {import('../app.model').KanaModel} KanaModel */

/** @returns {Schema<KanaModel>} */
export default (model) => ({
  tag: 'form',
  model,
  events: {
    submit(e) {
      e.preventDefault();
      this.model.submit();
    },
  },
  styles: {
    display: 'flex',
    outline: 'none',
  },
  children: [
    {
      tag: 'input',
      props: {
        value: ({ input }) => input,
      },
      styles: {
        fontSize: '24px',
        border: '2px solid #aaa',
        borderRadius: '20px 0px 0px 20px',
        borderRight: 'none',
        height: '40px',
        textAlign: 'center',
        background: '#286871',
        outline: 'none',
        color: 'white',
        width: '50vw',
        maxWidth: '250px',

        compute: (state) => ({
          background:
            state.valid === true
              ? '#338146'
              : state.valid === false
                ? '#a6394d'
                : '',
        }),
      },
      events: {
        input() {
          this.model.state.input =
            typeof this.props.value === 'string' ? this.props.value : ' ';
        },
      },
    },
    {
      tag: 'button',
      text: 'check',
      styles: {
        height: '46px',
        border: '2px solid #aaa',
        borderRadius: '0px 20px 20px 0px',
        borderLeft: 'none',
        color: 'white',
        padding: '0px 20px',
        fontSize: '18px',
        fontWeight: 'bold',
        background: '#1c555d',
        textTransform: 'uppercase',

        compute: (state) => ({
          background:
            state.valid === true
              ? '#338146'
              : state.valid === false
                ? '#a6394d'
                : '',
        }),

        hover: {
          outline: 'none',
          border: '2px solid #aaa',
          borderLeft: 'none',
          background: '#164046',
        },

        active: {
          outline: 'none',
          border: '2px solid #aaa',
          borderLeft: 'none',
          background: '#0e3034',
        },

        focus: {
          outline: 'none',
          border: '2px solid #aaa',
          borderLeft: 'none',
        },
      },
    },
  ],
});
