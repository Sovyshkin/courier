<script>
import MainMap from "./components/MainMap.vue";
import AppHeader from "./components/AppHeader.vue";
import LeftScreen from "./components/LeftScreen.vue";
import RightScreen from "./components/RightScreen.vue";
import AppLogin from "./components/AppLogin.vue";
export default {
  name: "App",
  components: {
    MainMap,
    AppHeader,
    LeftScreen,
    RightScreen,
    AppLogin,
  },
  data() {
    return {
      login: false,
      news: false,
      projects: false,
    };
  },
  methods: {
    handleLogin(login) {
      this.login = login;
    },

    handleRegister(register) {
      this.login = !register;
      this.register = register;
    },
  },
  mounted() {},
};
</script>
<template>
  <AppHeader
    @updateTell="handleTell"
    @updateLogin="handleLogin"
    class="header"
  />
  <LeftScreen class="left" v-if="projects" />
  <div class="projects" @click="projects = !projects">Активные заказы</div>
  <RightScreen v-if="news" class="right" />
  <div class="news" @click="news = !news">Закрытые заказы</div>
  <AppLogin
    v-if="login"
    @updateLogin="handleLogin"
    @updateRegister="handleRegister"
  />
  <MainMap class="map" />
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

.projects {
  position: absolute;
  z-index: 2;
  left: 0;
  margin-top: 30px;
  background-color: #ff5f21;
  color: #fff;
  font-weight: 600;
  padding: 10px 5px;
  writing-mode: vertical-lr;
  letter-spacing: 2px;
  cursor: pointer;
  border-radius: 5px 0 0 5px;
  -webkit-user-select: none; /* Для старых версий Safari */
  -moz-user-select: none; /* Для Firefox */
  -ms-user-select: none; /* Для Internet Explorer и Edge */
  user-select: none; /* Современные браузеры */
}

.header {
  position: absolute !important;
  top: 0;
}

.right,
.left,
.news,
.projects {
  top: 10%;
}
</style>
