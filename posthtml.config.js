const {getPosthtmlW3c} = require('pineglade-w3c');
const parser = require('posthtml-parser');
const render = require('posthtml-render');
const Typograf = require('typograf');

const typograf = new Typograf({
  locale: ['ru', 'en-US'],
  htmlEntity: {type: 'name'},
});
typograf.disableRule('ru/other/phone-number');

module.exports = {
  plugins: [
    (() => async (tree) => {
      const [, , page] = tree.options.from.match(/^.*pages(\\+|\/+)(.*)$/);

      return parser(typograf.execute(render(tree)));
    })(),
    getPosthtmlW3c({
      exit: process.env.NODE_ENV !== 'development',
      forceOffline: true,
      getSourceName(filename) {
        return filename.replace(/^.*pages(\\+|\/+)(.*)\.twig$/, '$2').replace(/\\/g, '/');
      },
    }),
  ],
};
