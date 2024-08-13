<script>
export default {
  data() {
    return {
      name: this.$route.query.name,
      img: this.$route.query.img,
      desc: this.$route.query.desc,
    };
  },
  methods: {
    close() {
      this.$router.push({ name: "home" });
    },
  },
  mounted() {},
};
</script>

<template>
  <div class="wrapper">
    <div class="card">
      <div class="wrap-btns">
        <img class="close" src="../assets/close.svg" @click="close()" alt="" />
      </div>
      <div class="info">
        <img class="avatar" :src="'../assets/' + img" alt="" />
        <div class="main-info">
          <div class="title">{{ name }}</div>
          <div class="desc">
            {{ desc }}
          </div>
        </div>
      </div>
      <div class="comments">
        <h2>Комментарии</h2>
        <div class="comment">
          <img class="comment-avatar" src="../assets/avatar.jpeg" alt="" />
          <div class="comment-info">
            <div class="comment-title">
              <div class="name">Александр Морозов</div>
              <div class="date">13/02/2024</div>
            </div>
            <div class="comment-desc">Вот это да...</div>
          </div>
        </div>
        <div class="comment-send">
          <textarea
            v-model="textComment"
            cols="30"
            rows="10"
            placeholder="Введите сообщение..."
          ></textarea>
          <img @click="setComment" src="../assets/send.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 0 auto;
  width: 100%;
  background-color: #f5f5f5;
  min-height: 90vh;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 40px;
}

.card {
  width: 100%;
  max-width: 1268px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 0 10px 10px rgba(69, 69, 69, 0.5);
  padding: 24px;
}

.wrap-btns {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.close {
  cursor: pointer;
}
.info {
  display: flex;
  gap: 20px;
}
.main-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.avatar {
  width: 40%;
  height: 40vh;
  object-fit: cover;
  border-radius: 20px;
}

.title {
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  color: #242628;
}

.desc {
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #242628;
}

.comments {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.comment {
  display: flex;
  gap: 10px;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9eaeb;
}

.comment-avatar {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 10px;
}
.comment-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.comment-title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.name {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #242628;
}

.date {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #b1b2b4;
}

.comment-desc {
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #242628;
}

.comment-send {
  display: flex;
  align-items: center;
  gap: 10px;
}

.comment-send img {
  height: 30px !important;
  width: auto !important;
  cursor: pointer;

  transition: all 400ms ease;
}

.comment-send img:hover {
  transform: translateY(-5px);
}

.comment-send textarea {
  border: 1px solid black;
  border-radius: 15px;
  padding: 10px 20px;
  max-height: 100px;
  width: 50%;
}
</style>
