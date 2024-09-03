<script>
import axios from "axios";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import LoaderSpinner from "./LoaderSpinner.vue";
export default {
  name: "SelectTime",
  components: { LoaderSpinner },
  data() {
    return {
      from_time: "",
      till_time: "",
      url: "",
      nameFile: "",
      isLoading: false,
    };
  },
  methods: {
    cancel() {
      document.body.style.overflow = "auto";
      this.$emit("updateSelect", false);
    },

    async load_info() {
      try {
        this.isLoading = true;
        if (this.from_time) {
          this.from_time = dayjs(this.from_time)
            .utc()
            .format("YYYY-MM-DD HH:mm:ss");
          let response = await axios.post(
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
          );
          this.url = response.data;
          this.nameFile = String(this.url.split("/").slice(-1));
        }
      } catch (err) {
        console.log(err);
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    document.body.style.overflow = "hidden";
    dayjs.extend(utc);
    dayjs.extend(timezone);
    setInterval(() => {
      this.till_time = dayjs().utc().format("YYYY-MM-DD HH:mm:ss");
    }, 1000);
  },
};
</script>
<template>
  <div class="wrapper">
    <div class="card">
      <div class="header">
        <span class="title">Выберите время</span>
        <img @click="cancel()" class="close" src="../assets/close.svg" alt="" />
      </div>
      <LoaderSpinner v-if="isLoading" />
      <div class="group" v-if="!isLoading">
        <input
          type="datetime-local"
          v-model="from_time"
          :class="{ not_selected: !selectTime }"
          name=""
          id=""
          @change="load_info"
        />
        <span class="group-value">От</span>
      </div>
      <a v-if="!isLoading" class="btn" :href="url" :download="nameFile"
        >Скачать</a
      >
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  position: absolute;
  height: 100vh;
  width: 100%;
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 32px;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #fff;
  width: 360px;
}

.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  font-size: 24px;
  font-weight: 700;
  line-height: 28.8px;
  color: #000;
  text-align: center;
}

.desc {
  opacity: 80%;
  font-weight: 500;
  font-size: 16px;
  line-height: 22.4px;
}

.btn {
  width: 100%;
  background-color: #ff5f21;
  border-radius: 10px;
  padding: 17px 24px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
}

.log {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.log span,
a {
  font-weight: 500;
  font-size: 14px;
  line-height: 19.6px;
}

a {
  color: #cf0032;
}

.cancel {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cancel img {
  cursor: pointer;
  height: 24px;
  width: 24px;
}

input {
  width: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 16px;
}

input::placeholder {
  color: #a5a5a5;
  font-weight: 400;
  font-size: 14px;
  line-height: 19.12px;
}

.forget_pass {
  text-align: end;
}

.group {
  position: relative;
}

.group-value {
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  left: 12px;
  background-color: #fff;
  padding: 0 4px;
  color: #a5a5a5;
  font-weight: 500;
  font-size: 10px;
  line-height: 13.66px;
}

.card:hover {
  cursor: auto;
  transform: none;
}

.msg {
  padding: 10px 13px;
  font-size: 16px;
  line-height: 16px;
  color: #fff;
  border-radius: 15px;
  width: fit-content;
  margin: 0 auto;
}

.success {
  background-color: #45ed0b;
}

.error {
  background-color: #cf0032;
}

.close {
  cursor: pointer;
}

.reg {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.reg span {
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #242628;
}

.register {
  color: #ff5f21 !important;
  text-decoration: underline;
  cursor: pointer;
}
</style>
