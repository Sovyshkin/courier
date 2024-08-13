<script>
export default {
  data() {
    return {
      active: 1,
      img: this.$route.query.img,
      name: this.$route.query.name,
      desc: this.$route.query.desc,
      ans: "",
    };
  },
  methods: {},
  mounted() {},
};
</script>

<template>
  <div class="wrapper">
    <div class="card">
      <div class="wrap-close">
        <img
          class="close"
          src="../assets/close.svg"
          @click="this.$router.go(-1)"
          alt=""
        />
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
  height: fit-content;
  min-height: 60vh;
}

.wrap-close {
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

.votings {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.vote {
  display: flex;
  align-items: center;
  gap: 10px;
}

.vote label {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #242628;
}

.vote input {
  accent-color: #ff5f21;
  padding: 15px 20px;
  width: 20px;
  height: 20px;
}

.wrap-btns {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
}

.btn {
  width: 50%;
  color: #ff5f21;
  border: 1px solid #ff5f21;
  background-color: transparent;
  padding: 12px 20px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}

.send {
  background-color: #ff5f21;
  color: #fff;
  border: none;
}

@media (max-width: 880px) {
  .info {
    flex-direction: column;
    align-items: center;
  }

  .avatar {
    width: 100%;
  }

  .wrapper {
    padding: 20px;
  }
}
</style>
