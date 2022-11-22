export const getImages = (filename, additions = {}, useTablet = true, useMobile = true) => {
  const image = Object.assign(additions, {
    default: `img/${filename}.jpg`,
    default2x: `img/${filename}@2x.jpg`,
    webp: `img/${filename}.webp`,
    webp2x: `img/${filename}@2x.webp`,
  });

  if (useTablet) {
    image.webpTablet = `img/${filename}-tablet.webp`;
    image.webpTablet2x = `img/${filename}-tablet@2x.webp`;
  }

  if (useMobile) {
    image.webpMobile = `img/${filename}-mobile.webp`;
    image.webpMobile2x = `img/${filename}-mobile@2x.webp`;
  }

  return image;
};

export default {
  description: 'Сайт по организации туров в Антарктику.',
  projectName: 'Антарктика',
  navLinks: [
    {
      url: '#advantages',
      title: 'Преимущества',
    },
    {
      url: '#upcoming',
      title: 'Направления',
    },
    {
      url: '#upcoming',
      title: 'Ближайшие круизы',
    },
    {
      url: '#contacts',
      title: 'Контакты',
    },
  ],
  socials: [
    {
      id: 'ok',
      title: 'Мы в Одноклассниках.',
      url: '#!',
    },
    {
      id: 'dzen',
      title: 'Мы в Яндекс.Дзен',
      url: '#!',
    },
    {
      id: 'reddit',
      title: 'Мы в Reddit',
      url: '#!',
    },
  ],
};
