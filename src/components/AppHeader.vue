<script>
export default {
  components: {},
  data() {
    return {
      menu: false,
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
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="codered" @click="this.$router.push({ name: 'home' })">
      Code<span class="red">Red</span>
    </div>
    <nav class="group-item">
      <li
        @click="this.$router.push({ name: 'voting' })"
        class="nav-item"
        :class="{ active: this.$route.name == 'voting' }"
      >
        Голосование
      </li>
      <li
        @click="this.$router.push({ name: 'info' })"
        class="nav-item"
        :class="{ active: this.$route.name == 'info' }"
      >
        Информация
      </li>
      <li
        @click="this.$router.push({ name: 'offer' })"
        class="nav-item"
        :class="{ active: this.$route.name == 'offer' }"
      >
        Предложения
      </li>
      <li class="nav-item" :class="{ active: this.$route.name == 'chats' }">
        Чаты
      </li>
    </nav>
    <div class="wrap-btns">
      <div class="city">
        Казань
        <img src="../assets/arrow-down.svg" alt="" />
      </div>
      <button @click="tell()" class="btn">Рассказать о проблеме</button>
      <button @click="log()" class="btn log">Войти</button>
    </div>
    <img
      @click="clickMenu()"
      class="img-menu"
      src="../assets/menu.png"
      alt=""
    />
    <div class="menu" :class="{ active_menu: menu }">
      <li
        @click="this.$router.push({ name: 'voting' })"
        class="nav-item"
        :class="{ active: this.$route.name == 'voting' }"
      >
        Голосование
      </li>
      <li class="nav-item" :class="{ active: this.$route.name == 'info' }">
        Информация
      </li>
      <li class="nav-item" :class="{ active: this.$route.name == 'offers' }">
        Предложения
      </li>
      <li class="nav-item" :class="{ active: this.$route.name == 'chats' }">
        Чаты
      </li>
      <div class="city">
        Казань
        <img src="../assets/arrow-down.svg" alt="" />
      </div>
      <button @click="tell()" class="btn">Рассказать о проблеме</button>
      <button @click="log()" class="btn log">Войти</button>
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

@media (max-width: 1100px) {
  .group-item {
    display: none;
  }

  .wrap-btns {
    display: none;
  }

  .img-menu {
    display: block;
  }
}
</style>
