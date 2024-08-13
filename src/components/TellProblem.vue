<script>
export default {
  data() {
    return {};
  },
  methods: {
    cancel() {
      document.body.style.overflow = "auto";
      this.$emit("updateTell", false);
    },
  },
  mounted() {
    document.body.style.overflow = "hidden";
  },
};
</script>
<template>
  <div class="wrapper">
    <div class="card">
      <div class="header">
        <h2 class="title">Рассказать о проблеме</h2>
        <img @click="cancel()" class="close" src="../assets/close.svg" alt="" />
      </div>
      <div class="main">
        <input type="text" placeholder="Введите имя" />
        <input type="text" placeholder="Введите фамилию" />
        <input type="text" placeholder="Введите вашу почту" />
        <input type="text" placeholder="Введите номер телефона" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Оставьте комментарий"
        ></textarea>
        <div class="file">
          <input id="file" type="file" />
          <label for="file">
            <img src="../assets/file.svg" alt="" />
            <span class="fileText"
              >Перетащите файл для загрузки или выберите файл</span
            >
          </label>
        </div>
        <input
          type="text"
          placeholder="Например г.Казань, ул.Петербургская, д.52"
        />
        <div class="wrap-btns">
          <button class="btn send">Отправить</button>
          <button @click="cancel" class="btn cancel">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  position: absolute;
  height: 100vh;
  width: 100%;
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 200px;
  z-index: 4;
}

.card {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  border-radius: 20px;
  width: 100%;
  max-width: 678px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.close {
  cursor: pointer;
}

.main {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.main input,
.main textarea,
.main button {
  flex: 45%;
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

.btn {
  padding: 15.5px 20px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
}

.send {
  background-color: #ff5f21;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
}

.cancel {
  border: 1px solid #ff5f21 !important;
  color: #ff5f21;
}
.title {
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #242628;
}

.file {
  flex: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  padding: 13px 16px;
}

input[type="file"] {
  display: none;
}

.file label {
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
}

.fileText {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #a1a1a1;
  text-align: center;
}
.wrap-btns {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 12px;
}
</style>
