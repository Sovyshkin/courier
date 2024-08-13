<script>
import RouterView from "vue-router";
import MainMap from "./components/MainMap.vue";
import AppHeader from "./components/AppHeader.vue";
import LeftScreen from "./components/LeftScreen.vue";
import RightScreen from "./components/RightScreen.vue";
import TellProblem from "./components/TellProblem.vue";
import AppLogin from "./components/AppLogin.vue";
import AppRegister from "./components/AppRegister.vue";
export default {
  name: "App",
  components: {
    MainMap,
    AppHeader,
    LeftScreen,
    RightScreen,
    TellProblem,
    AppLogin,
    AppRegister,
    RouterView,
  },
  data() {
    return {
      tellProblem: false,
      login: false,
      register: false,
      news: false,
    };
  },
  methods: {
    handleTell(tell) {
      this.tellProblem = tell;
    },

    handleLogin(login) {
      this.login = login;
    },

    handleRegister(register) {
      this.login = !register;
      this.register = register;
    },
  },
  mounted() {
    let city = localStorage.getItem("city");
    if (!city) {
      localStorage.setItem("city", "Казань");
      localStorage.setItem("lat", "55.796127");
      localStorage.setItem("long", "49.106414");
    }
  },
};
</script>
<template>
  <div class="wrapper" v-if="this.$route.path == '/'">
    <AppHeader
      @updateTell="handleTell"
      @updateLogin="handleLogin"
      class="header"
    />
    <LeftScreen class="left" />
    <RightScreen v-if="news" class="right" />
    <div class="news" @click="news = !news">Новости</div>
    <TellProblem class="tell" v-if="tellProblem" @updateTell="handleTell" />
    <AppLogin
      v-if="login"
      @updateLogin="handleLogin"
      @updateRegister="handleRegister"
    />
    <AppRegister
      v-if="register"
      @updateLogin="handleLogin"
      @updateRegister="handleRegister"
    />
    <MainMap class="map" />
  </div>
  <div class="router" v-else>
    <AppHeader
      @updateTell="handleTell"
      @updateLogin="handleLogin"
      class="header"
    />
    <RouterView />
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap");
#app {
  font-family: "Inter", sans-serif;
  width: 100%;
}
* {
  padding: 0px;
  margin: 0px;
  border: none;
  font-weight: 400;
  font-style: normal;
  font-family: "Inter", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.wrap {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px;
  width: 100%;
}

body,
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f0f0f5;
}

/* Links */

a,
a:link,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

/* Common */

aside,
nav,
footer,
header,
section,
main {
  display: block;
}

ul,
ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

img,
svg {
  max-width: 100%;
  height: auto;
}

address {
  font-style: normal;
}

/* Form */

input,
textarea,
button,
select {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
}

input::-ms-clear {
  display: none;
}

button,
input[type="submit"] {
  display: inline-block;
  box-shadow: none;
  background-color: transparent;
  background: none;
  cursor: pointer;
}

input:focus,
input:active,
button:focus,
button:active {
  outline: none;
  box-shadow: none;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

.wrapper {
  position: relative;
  z-index: 1;
}

.left {
  position: absolute;
  margin-top: 30px;
  margin-left: 20px;
  box-shadow: 0 0 10px 10px rgba(69, 69, 69, 0.5);
  z-index: 2;
}

.right {
  position: absolute;
  right: 0;
  margin-top: 30px;
  margin-right: 20px;
  box-shadow: 0 0 10px 10px rgba(69, 69, 69, 0.5);
  z-index: 2;
  display: flex;
}

.tell {
  z-index: 4;
}

.news {
  position: absolute;
  z-index: 2;
  right: 0;
  margin-top: 30px;
  background-color: #ff5f21;
  color: #fff;
  font-weight: 600;
  padding: 10px 5px;
  writing-mode: tb-rl;
  letter-spacing: 2px;
  cursor: pointer;
  border-radius: 5px 0 0 5px;
  -webkit-user-select: none; /* Для старых версий Safari */
  -moz-user-select: none; /* Для Firefox */
  -ms-user-select: none; /* Для Internet Explorer и Edge */
  user-select: none; /* Современные браузеры */
}
</style>
