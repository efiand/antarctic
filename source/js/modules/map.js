import L from 'leaflet';

const initMap = (mapElement) => {
  const {id} = mapElement;
  const {coords, height, iconUrl, width, zoom} = window.pageData.maps[id];

  // Добавляем карту
  const map = L.map(id, {scrollWheelZoom: false}).setView(coords, zoom);

  // Добавляем слой с нужной картой
  L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    minZoom: 10,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  }).addTo(map);

  // Создаем главную метку
  const pinIcon = L.marker(coords, {
    icon: L.icon({
      iconUrl,
      iconSize: [width, height],
      iconAnchor: [width / 2, height],
    }),
  });

  // Добавляем метку на карту
  pinIcon.addTo(map);

  mapElement.querySelector('picture').remove();
};

export default (mapElements) => {
  if (!window.pageData.maps) {
    return;
  }

  mapElements.forEach(initMap);
};
