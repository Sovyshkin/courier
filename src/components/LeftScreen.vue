<script>
export default {
  components: {},
  data() {
    return {
      active: 1,
      projects: [
        {
          name: "Маршрут автобуса",
          img: "bus.jpeg",
          desc: "Водитель автобуса систематически нарушает пдд. Маршрут 26, каждое утро едет по ул.Ленина и пересекает двойную сплошную.",
        },
        {
          name: "Большая яма",
          img: "yama.jpeg",
          desc: "Большая яма. На улице Овечкина в яме лужа по пояс.",
        },
      ],
      problems: [
        {
          name: "Маршрут автобуса",
          img: "bus.jpeg",
          desc: "Водитель автобуса систематически нарушает пдд. Маршрут 26, каждое утро едет по ул.Ленина и пересекает двойную сплошную.",
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
    <div class="wrap_btns">
      <button @click="active = 1" class="btn" :class="{ active: active == 1 }">
        Проекты
      </button>
      <button @click="active = 2" class="btn" :class="{ active: active == 2 }">
        Проблемы
      </button>
    </div>
    <div class="info" v-if="active == 1">
      <h2>Проекты</h2>
      <div
        class="item"
        @click="
          this.$router.push({
            name: 'object',
            query: {
              name: item.name,
              img: item.img,
              desc: item.desc,
            },
          })
        "
        v-for="item in projects"
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
    <div class="info problems" v-if="active == 2">
      <h2>Проблемы</h2>
      <div
        class="item"
        @click="
          this.$router.push({
            name: 'object',
            query: {
              name: item.name,
              img: item.img,
              desc: item.desc,
            },
          })
        "
        v-for="item in problems"
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
  </div>
</template>

<style scoped>
.wrapper {
  height: 60vh;
  width: 320px;
  padding: 24px;
  background-color: #fff;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.wrap_btns {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
}

.btn {
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
  overflow-x: hidden;
  overflow-y: scroll;
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
