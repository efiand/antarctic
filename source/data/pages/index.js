import html from '../../js/utils/html.js';

const getImages = (filename, additions = {}) =>
  Object.assign(additions, {
    default: `img/${filename}.jpg`,
    default2x: `img/${filename}@2x.jpg`,
    webp: `img/${filename}.webp`,
    webp2x: `img/${filename}@2x.webp`,
    webpMobile: `img/${filename}-mobile.webp`,
    webpMobile2x: `img/${filename}-mobile@2x.webp`,
    webpTablet: `img/${filename}-tablet.webp`,
    webpTablet2x: `img/${filename}-tablet@2x.webp`,
  });

export default {
  promo: {
    content: html`<h1>Круизы в Антарктику</h1>
      <p>Волшебный мир айсбергов&nbsp;и пингвинов</p>`,
    image: getImages('firstscreen'),
  },
  about: {
    content: html`<h2>Путешествие на край&nbsp;Земли</h2>
      <p>
        Это волшебное путешествие поможет вам познакомиться поближе с удивительным миром Антарктики. Наш круизный лайнер
        отвезет вас на край Земли, где вы сможете увидеть: ледяные айсберги, несколько видов пингвинов, китов, морских
        котиков и многое другое.
      </p>`,
    image: getImages('about', {
      alt: 'Пингвины на снегу.',
    }),
  },
  advantages: {
    heading: 'Преимущества',
    list: [
      {
        alias: 'liner',
        content: html`<h3>Небольшой круизный&nbsp;лайнер</h3>
          <p>
            Круизный лайнер, рассчитанный всего лишь на 300 гостей, поможет избежать шума и очередей и даст возможность
            насладиться видами и природой.
          </p>`,
      },
      {
        alias: 'checks',
        content: html`<h3>Система все&nbsp;включено</h3>
          <p>
            Все наши круизы работают по системе “Все Включено”. Великолепные блюда и безлимитный бар доступны для вас 24
            часа.
          </p>`,
      },
      {
        alias: 'boat',
        content: html`<h3>Экскурсионные туры&nbsp;на Zodiac</h3>
          <p>
            Экскурсионные туры к берегам Антарктиды совершаются на оборудованных лодках типа Zodiack c опытными
            экскурсоводами.
          </p>`,
      },
    ],
    background: getImages('advantages'),
    backgroundColor: '#e3ecf6',
  },
};
