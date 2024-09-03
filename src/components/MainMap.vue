<script>
/* eslint-disable */
import LoaderSpinner from "./LoaderSpinner.vue";
import axios from "axios";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

export default {
  components: { LoaderSpinner },
  data() {
    return {
      isLoading: false,
      selectedRider: "",
      riders: [],
      from_time: "",
      till_time: "",
      selectName: false,
      selectTime: false,
      referencePoints: [
        [55.739625, 37.5412], // Москва, Ленинский проспект
        [55.75568, 37.61722], // Москва, Льва Толстого, 16
        [55.75135, 37.62323], // Москва, Кремлевская набережная
        [55.76839, 37.62985],
      ],
      orders: [],
      map: null,
    };
  },
  methods: {
    async renderMap(referencePoints) {
      try {
        this.isLoading = true;
        ymaps.ready(initMap.bind(this));

        function initMap() {
          let customMap = new ymaps.Map("customMap", {
            center: [36.536574, 31.998763],
            behaviors: ["default", "scrollZoom"],
            zoom: 14,
            controls: ["zoomControl", "fullscreenControl"],
          });

          // Добавление новых маршрутов
          if (referencePoints) {
            for (let i = 0; i < referencePoints.length; i++) {
              let referencePoint = referencePoints[i];
              let viaIndexes = [2];

              var multiRoute = new ymaps.multiRouter.MultiRoute({
                referencePoints: referencePoint,
                params: { viaIndexes: viaIndexes },
              });

              // Добавляем новый маршрут на карту
              customMap.geoObjects.add(multiRoute);
            }
          }

          customMap.controls.remove("geolocationControl");
          customMap.controls.remove("searchControl");
          customMap.controls.remove("trafficControl");
          customMap.controls.remove("typeSelector");
          customMap.controls.remove("fullscreenControl");
          customMap.controls.remove("zoomControl");
          customMap.controls.remove("rulerControl");
        }
      } catch (err) {
        console.log(err);
      } finally {
        this.isLoading = false;
      }
    },

    async load_info() {
      try {
        if (this.from_time) {
          this.from_time = dayjs(this.from_time)
            .utc()
            .format("YYYY-MM-DD HH:mm:ss");
        }
        if (this.selectedRider && this.from_time) {
          console.log(
            await axios.post(
              `/statistics/riders`,
              {
                from_time: this.from_time,
                till_time: this.till_time,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            )
          );
          this.selectName = false;
          this.selectTime = false;
          let response = await axios.post(
            `/track_rider`,
            {
              name: this.selectedRider,
              from_time: this.from_time,
              till_time: this.till_time,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          // console.log(response);
          let data = response.data;
          if (data) {
            this.orders = Object.keys(data);
            this.referencePoints = Object.values(data);
            let map = document.querySelector(".customMap");
            map.innerHTML = "";
            await this.renderMap(this.referencePoints);
          }
        } else {
          if (!this.selectedRider) {
            this.selectName = true;
          }
          if (!this.till_time) {
            this.selectTime = true;
          }
        }
      } catch (err) {
        console.log(err);
      }
    },

    async collectInfo() {
      try {
        let response = await axios.get(`/active_riders`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        let riders = response.data.riders;
        if (riders) {
          this.riders = Object.keys(riders);
        }
        setTimeout(() => {
          axios.get(`/active_orders`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.collectInfo();
    this.renderMap();
    dayjs.extend(utc);
    dayjs.extend(timezone);
    setInterval(this.collectInfo, 60000);
    setInterval(() => {
      this.till_time = dayjs().utc().format("YYYY-MM-DD HH:mm:ss");
    }, 1000);
  },
};
</script>

<template>
  <LoaderSpinner v-if="isLoading" />
  <div class="wrap-map" v-else>
    <div id="customMap" class="customMap"></div>
    <div class="filter">
      <div class="group-input">
        <span>Выберите курьера</span>
        <select
          @change="load_info"
          v-model="selectedRider"
          class="selectRider"
          :class="{ not_selected: !selectName }"
          id=""
        >
          <option
            :value="rider"
            class="rider"
            v-for="rider in riders"
            :key="rider"
          >
            {{ rider }}
          </option>
        </select>
      </div>
      <div class="group-input">
        <span>От</span>
        <input
          type="datetime-local"
          v-model="from_time"
          :class="{ not_selected: !selectTime }"
          name=""
          id=""
          @change="load_info"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.customMap {
  position: relative;
  width: 100%;
  height: 100vh;
}

.filter {
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  box-shadow: 0 0 10px 10px rgba(69, 69, 69, 0.5);
}

.group-input {
  display: flex;
  align-items: center;
  gap: 5px;
}

.group-input span {
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #242628;
  text-align: center;
}

.group-input select,
.group-input input {
  border: 1px solid #e6e6e6;
  padding: 7px 10px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 12px;
  color: #242628;
}

.not_selected {
  border: 1px solid #ff5f21 !important;
}

@media (max-width: 480px) {
  .filter {
    width: 100%;
    bottom: 0;
    border-radius: 0px;
    flex-wrap: wrap;
  }
}
</style>
