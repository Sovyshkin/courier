<script>
export default {
  data() {
    return {
      active: 1,
      surname: "",
      name: "",
      patronymic: "",
      date: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    async loadInfo() {
      this.name = localStorage.getItem("name");
      this.email = localStorage.getItem("email");
    },
  },
  mounted() {
    this.loadInfo();
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="wrap-profile">
      <h1>Профиль</h1>
      <div class="profile">
        <!-- <img class="avatar" src="../assets/avatar.jpeg" alt="" /> -->
        <div class="card">
          <h2>Личные данные</h2>
          <div class="info">
            <input
              type="text"
              v-model="surname"
              placeholder="Введите вашу фамилию"
            />
            <input type="text" v-model="name" placeholder="Введите ваше имя" />
            <input
              type="text"
              v-model="patronymic"
              placeholder="Введите ваше отчество"
            />
            <input
              type="date"
              v-model="date"
              placeholder="Выберите вашу дату рождения"
            />
            <input
              type="email"
              v-model="email"
              placeholder="Введите ваш Email"
            />
            <input
              type="tel"
              v-model="phone"
              placeholder="Введите свой номер телефона"
            />
          </div>
          <h2>О себе</h2>
          <textarea
            name="description"
            cols="30"
            rows="10"
            placeholder="Расскажите о себе"
          ></textarea>
          <div class="wrap-btns">
            <button class="btn">Изменить</button>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-appeals">
      <div class="empty"></div>
      <div class="my-appeals">
        <h2>Мои обращения</h2>
        <div class="item">
          <!-- <img class="img" src="../assets/avatar.jpeg" alt="" /> -->
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
  </div>
</template>

<style scoped>
.wrapper {
  margin: 0 auto;
  width: 100%;
  background-color: #f5f5f5;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 20px 40px;
  gap: 12px;
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

.info input {
  flex: 45%;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
  padding: 12px 16px;
}

input,
textarea {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #242628;
}

textarea {
  border-radius: 8px;
  border: 1px solid #e3e3e3;
  padding: 12px 16px;
}

input::placeholder,
textarea::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #a1a1a1;
}

.avatar {
  height: 40vh;
  width: 20%;
  object-fit: cover;
  border-radius: 10px;
}

.wrap-profile {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.profile {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.card,
.my-appeals {
  width: 80%;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

h1 {
  width: 100%;
  text-align: start;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #242628;
}

.info {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.info input {
  flex: 23%;
}

.wrap-btns {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  width: 100%;
  padding: 12px 20px;
  background-color: #ff5f21;
  color: #fff;
  border-radius: 5px;
  font-size: 16px;
  line-height: 17px;
  font-weight: 600;
}

.wrap-appeals {
  width: 100%;
  display: flex;
  gap: 20px;
}

.empty {
  width: 20%;
}
</style>
