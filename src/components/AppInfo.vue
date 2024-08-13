<script>
export default {
  data() {
    return {
      politics: [
        {
          name: "Продукция",
          img: "eggs.jpeg",
          desc: "В Татарстане выручка от реализации молока выросла на 23%. Этот показатель составил 27,6 миллиарда рублей",
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
  mounted() {},
};
</script>

<template>
  <div class="wrapper">
    <div class="card">
      <h2>Информация</h2>
      <div class="info">
        <div
          class="item"
          v-for="item in politics"
          :key="item"
          @click="
            this.$router.push({
              name: 'info_inside',
              query: {
                name: item.name,
                img: item.img,
                desc: item.desc,
              },
            })
          "
        >
          <img class="img" :src="'../assets/' + item.img" alt="" />
          <div class="moreInfo">
            <div class="title">{{ item.name }}</div>
            <div class="desc">
              {{ truncateText(item.desc) }}
            </div>
            <span
              @click="
                this.$router.push({
                  name: 'info_inside',
                  query: {
                    name: item.name,
                    img: item.img,
                    desc: item.desc,
                  },
                })
              "
              class="readMore"
              >Узнать подробнее <img src="../assets/arrow-right.svg" alt=""
            /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: #f5f5f5;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 100%;
  max-width: 1268px;
  height: 70vh;
  background-color: #fff;
  padding: 24px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 0 10px 10px rgba(69, 69, 69, 0.5);
}

.wrap-btns {
  display: flex;
  align-items: center;
  gap: 16px;
}

.btn {
  border-radius: 50px;
  padding: 16px 24px;
  background-color: #f4f5f5;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #3c3d3e;
}

.active {
  background-color: #ff5f21;
  color: #fff;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.item {
  display: flex;
  gap: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9eaeb;
  cursor: pointer;
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
