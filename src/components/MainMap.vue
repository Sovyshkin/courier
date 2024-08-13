<script>
export default {
  data() {
    return {};
  },
  methods: {
    async renderMap() {
      /* eslint-disable-next-line no-undef */
      ymaps.ready(init); // когда апи готово, инициализируемя карту
      var customMap; // объявим переменную для карты
      async function init() {
        // функция инициализации
        /* eslint-disable-next-line no-undef */
        customMap = new ymaps.Map("customMap", {
          // создадим карту выведем ее в див с id="customMap"
          center: [localStorage.getItem("lat"), localStorage.getItem("long")], // центра карты
          behaviors: ["default", "scrollZoom"], // скроллинг колесом
          zoom: 13, // масштаб карты
          controls: ["zoomControl", "fullscreenControl"], // элементы управления
        });
        /* eslint-disable-next-line no-undef */
        const myPlacemark = new ymaps.Placemark(
          [55.796127, 49.106414],
          {},
          {
            preset: "islands#redIcon", // Выберите стиль для балуна
            iconLayout: "default#image",
            iconImageHref: "../assets/redGeo.png", // иконка иконки
            iconImageSize: [36, 36], // размер иконки
            iconImageOffset: [-18, -36], // позиция иконки
          }
        );

        // Добавление плейсмарка на карту
        customMap.geoObjects.add(myPlacemark);

        customMap.controls.remove("geolocationControl"); // удаляем геолокацию
        customMap.controls.remove("searchControl"); // удаляем поиск
        customMap.controls.remove("trafficControl"); // удаляем контроль трафика
        customMap.controls.remove("typeSelector"); // удаляем тип
        customMap.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
        customMap.controls.remove("zoomControl"); // удаляем контрол зуммирования
        customMap.controls.remove("rulerControl"); // удаляем контрол правил
      }
    },
  },
  mounted() {
    this.renderMap();
  },
};
</script>

<template>
  <div id="customMap" class="customMap"></div>
</template>

<style scoped>
.customMap {
  width: 100%;
  height: 100vh;
}
</style>
