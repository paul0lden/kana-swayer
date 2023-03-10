import { KanaModel } from './app.model.js';

const model = new KanaModel();

/** @type {Schema} */
export default {
  tag: 'html',
  attrs: { lang: 'en' },
  model,
  children: [
    { path: '@app/head.component' },
    {
      tag: 'body',
      styles: {
        fontFamily: 'Roboto',
        textAlign: 'center',
        backgroundColor: '#455766',
        margin: 0,
        boxSizing: 'border-box',
        height: '100vh',
        padding: '40px',
      },
      children: [
        {
          tag: 'div',
          styles: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10vh',
            margin: 'auto',
            alignItems: 'center',
            paddingInline: '20px',
            paddingBlock: '60px 20px',
            backgroundColor: '#234',
            borderRadius: '32px',
            maxWidth: '500px',
          },
          children: [
            {
              path: '@app/components/char.component',
              input: model,
            },
            {
              path: '@app/components/char2.component',
              input: model,
            },
            {
              path: '@app/components/input.component',
              input: model,
            },
          ],
        },
      ],
    },
  ],
};
