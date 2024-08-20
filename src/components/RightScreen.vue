<script>
export default {
  components: {},
  data() {
    return {
      active: 1,
      items: [
        {
          name: "Название",
          img: "картинка",
          desc: "Описание",
        },
      ],
    };
  },
  methods: {
    truncateText(text) {
      if (text.length > 60) {
        text = text.slice(0, 60);
        text += "...";
      }
      return text;
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <!-- <div class="wrap_btns">
      <button @click="active = 1" class="btn" :class="{ active: active == 1 }">
        Новости
      </button>
      <button @click="active = 2" class="btn" :class="{ active: active == 2 }">
        Мероприятия
      </button>
      <button @click="active = 3" class="btn" :class="{ active: active == 3 }">
        Полезное
      </button>
    </div> -->
    <div class="info" v-if="active == 1">
      <h2>Закрытые заказы</h2>
      <div
        class="item"
        @click="
          this.$router.push({
            name: 'info_inside',
            query: { name: item.name, img: item.img, desc: item.desc },
          })
        "
        v-for="item in items"
        :key="item"
      >
        <img class="img" :src="'../assets/' + item.img" alt="" />
        <div class="moreInfo">
          <div class="title">{{ item.name }}</div>
          <div class="desc">{{ truncateText(item.desc) }}</div>
          <span class="readMore"
            >Читать подробнее <img src="../assets/arrow-right.svg" alt=""
          /></span>
        </div>
      </div>
    </div>
    <div class="info events" v-if="active == 2">
      <h2>Мероприятия</h2>
      <div class="item">
        <img class="img" src="../assets/avatar.jpeg" alt="" />
        <div class="moreInfo">
          <div class="title">Название</div>
          <div class="desc">Тут описание</div>
          <span class="readMore"
            >Читать подробнее <img src="../assets/arrow-right.svg" alt=""
          /></span>
        </div>
      </div>
    </div>
    <div class="info useful" v-if="active == 3">
      <h2>Полезное</h2>
      <div class="item">
        <img class="img" src="../assets/avatar.jpeg" alt="" />
        <div class="moreInfo">
          <div class="title">Название</div>
          <div class="desc">Тут описание</div>
          <span class="readMore"
            >Читать подробнее <img src="../assets/arrow-right.svg" alt=""
          /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  height: 60vh;
  width: 320px;
  padding: 24px;
  background-color: #fff;
  border-radius: 24px;
  flex-direction: column;
  gap: 24px;
}

.wrap_btns {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.btn {
  flex: 33%;
  border-radius: 50px;
  padding: 16px 24px;
  background-color: #f4f5f5;
}

.active {
  background-color: #ff5f21;
  color: #fff;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.item {
  display: flex;
  gap: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9eaeb;
}

.moreInfo {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.title {
  font-size: 16px;
  line-height: 22.4px;
  color: #242628;
  font-weight: 600;
}

.desc {
  font-size: 12px;
  line-height: 19.2px;
  font-weight: 400;
  color: #242628;
}

.readMore {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #ff5f21;
  cursor: pointer;
}

.img {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  object-fit: cover;
}
</style>
