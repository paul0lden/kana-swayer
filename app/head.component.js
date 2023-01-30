/** @type {Schema} */
export default {
  tag: 'head',
  children: [
    {
      tag: 'title',
      text: 'Kana',
    },
    {
      tag: 'link',
      attrs: {
        rel: 'icon',
        type: 'image/png',
        href: '/assets/favicon.png',
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'preconnect',
        crossorigin: true,
        href: 'https://fonts.gstatic.com',
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      },
    },
    {
      tag: 'meta',
      attrs: {
        charset: 'utf-8',
      },
    },
    {
      tag: 'meta',
      attrs: {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
      },
    },
  ],
};
