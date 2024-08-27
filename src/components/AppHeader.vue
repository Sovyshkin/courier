<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      menu: false,
      token: "",
    };
  },
  methods: {
    tell() {
      if (this.$route.path != "/") {
        this.$router.push({ name: "home" });
      }
      this.$emit("updateTell", true);
    },

    log() {
      if (this.$route.path != "/") {
        this.$router.push({ name: "home" });
      }
      this.$emit("updateLogin", true);
    },

    clickMenu() {
      if (this.$route.path != "/") {
        this.$router.push({ name: "home" });
      }
      this.menu = !this.menu;
    },

    async exit() {
      try {
        let response = await axios.get(`/logout`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        let status = response.data;
        if (status == 200) {
          localStorage.clear();
          location.reload();
        }
      } catch (err) {
        console.log(err);
      }
    },
  },

  mounted() {
    this.token = localStorage.getItem("token") || null;

    window.addEventListener("storage", () => {
      this.token = localStorage.getItem("token") || null;
    });
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="codered" @click="this.$router.push({ name: 'home' })">
      Code<span class="red">Red</span>
    </div>

    <div class="wrap-btns">
      <button v-if="!token" @click="log()" class="btn log">Войти</button>
      <button v-if="token" @click="exit()" class="btn exit">Выйти</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 40px;
  box-shadow: 0 0 10px 10px rgba(69, 69, 69, 0.5);
}

.codered {
  font-size: 21px;
  font-weight: 800;
  line-height: 16px;
  color: #242628;
  cursor: pointer;
}

.red {
  font-size: 21px;
  font-weight: 800;
  line-height: 16px;
  color: #ff5f21;
}

.group-item {
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
}

.wrap-btns {
  display: flex;
  align-items: center;
  gap: 20px;
}

.btn {
  color: #ff5f21;
  border: 1px solid #ff5f21;
  background-color: transparent;
  padding: 12px 20px;
  border-radius: 5px;
}

.log {
  background-color: #ff5f21;
  color: #fff;
  border: none;
}

.nav-item {
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  color: #242628;
  cursor: pointer;
}

.nav-item::after {
  margin-top: 2px;
  background-color: #ff5f21; /* Цвет линии при наведении на нее курсора мыши */
  display: block;
  content: "";
  height: 2px; /* Высота линии */
  width: 0%;
  -webkit-transition: width 0.4s ease-in-out;
  -moz--transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}
.nav-item:hover:after,
.nav-item:focus:after {
  width: 100%;
}

.active {
  color: #ff5f21;
}

.city {
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
}

.img-menu {
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: none;
}

.menu {
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  list-style: none;
  position: absolute;
  bottom: -280px;
  right: 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  display: none;
  box-shadow: 0 0 10px 10px rgba(69, 69, 69, 0.5);
  opacity: 0;
  transition: all 500ms ease;
}

.active_menu {
  display: flex;
  opacity: 1;
}

.exit {
  background-color: #cf0032;
  color: #fff;
  border: none;
}

@media (max-width: 1000px) {
  .header {
    padding: 10px;
  }
}
</style>
