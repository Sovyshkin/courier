<script>
import axios from "axios";
import LoaderSpinner from "./LoaderSpinner.vue";
export default {
  components: { LoaderSpinner },
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
      finished_orders: [],
      orders: [],
      isLoading: false,
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

    async load_info() {
      try {
        this.isLoading = true;
        let response = await axios.get(`/finished_orders`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(response);
        this.finished_orders = response.data.orders;
        let numbers_orders = Object.keys(this.finished_orders);
        this.orders = Object.values(this.finished_orders);
        for (let i = 0; i < this.orders.length; i++) {
          this.orders[i].id = numbers_orders[i];
          this.orders[i].active = false;
        }
      } catch (err) {
        console.log(err);
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.load_info();
    setInterval(this.load_info, 60000);
  },
};
</script>

<template>
  <div class="wrapper" v-if="isLoading">
    <LoaderSpinner />
  </div>
  <div class="wrapper" v-else>
    <!-- <div class="wrap_btns">
      <button @click="active = 1" class="btn" :class="{ active: active == 1 }">
        Проекты
      </button>
      <button @click="active = 2" class="btn" :class="{ active: active == 2 }">
        Проблемы
      </button>
    </div> -->
    <div class="info" v-if="this.orders.length > 0">
      <h2>Закрытые заказы</h2>
      <div class="item" v-for="item in orders" :key="item">
        <div class="title">
          <span>{{ item.client_name }}</span>
          <span>{{ item.id }}</span>
        </div>
        <div v-if="item.active" class="moreInfo">
          <div class="amount">Сумма заказа: {{ item.amount }} руб</div>
          <div class="products">
            Продукты:
            <div
              v-for="product in item.products"
              :key="product.id"
              class="group-product"
            >
              <img :src="product.url" alt="" class="product-img" />
              {{ product.name }} ({{ product.count }}) -
              {{ product.price_per_unit }}
            </div>
          </div>
          <div class="phone">Телефон: {{ item.client_phone }}</div>
          <div class="payment">Тип оплаты: {{ item.payment_type }}</div>
          <div class="status">{{ item.status }}</div>
        </div>
        <span
          @click="item.active = !item.active"
          v-if="!item.active"
          class="readMore"
          >Раскрыть <img src="../assets/arrow-right.svg" alt=""
        /></span>
        <span
          @click="item.active = !item.active"
          v-if="item.active"
          class="readMore"
          >Скрыть <img src="../assets/arrow-right.svg" alt=""
        /></span>
      </div>
    </div>
    <div class="empty" v-else>
      <h2>Активные заказы</h2>
      <span>Ничего нет</span>
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
  gap: 5px;
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9eaeb;
}

.moreInfo {
  margin-left: 7px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.title span {
  font-size: 16px;
  line-height: 22.4px;
  color: #242628;
  font-weight: 600;
}

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.status {
  font-weight: 400;
  line-height: 19px;
  font-size: 14px;
  color: #ff5f21;
}

.img {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  object-fit: cover;
}
.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.empty span {
  margin-top: 150px;
  opacity: 50%;
  color: #242628;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
}

.products {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.products span {
  margin-left: 7px;
}

.group-product {
  display: flex;
  align-items: center;
  gap: 3px;
}

.product-img {
  height: 25px;
  width: 25px;
  border-radius: 5px;
}

.amount,
.phone,
.payment,
.products,
.group-product {
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  color: #242628;
}
</style>
