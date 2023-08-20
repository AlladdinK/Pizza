<template>
  <section class="basket" v-if="useStore.BasketList.length">
    <div class="basket__top">
      <div class="basket__title">
        <img src="" alt="" />
        <h3>Корзина</h3>
      </div>
      <div class="basket__clear" @click="clearBasket()">
        <img src="" alt="" />
        <button type="submit">Очистить корзину</button>
      </div>
    </div>
    <div class="basket__list">
      <div
        class="basket__list-item"
        v-for="product in useStore.BasketList"
        :key="product.idx"
      >
        <div class="basket__list-info">
          <img :src="product.img" alt="" />
          <div class="basket__list-text">
            <h3>Сырный цыпленок</h3>
            <span>тонкое тесто, 26 см.</span>
          </div>
        </div>
        <div class="basket__list-count">
          <button @click="Counter('-')">
            <img src="../assets/img/count-minus.svg" alt="" />
          </button>
          <span>{{ product.amount }}</span>
          <button @click="Counter('+', idx)">
            <img src="../assets/img/count-plus.svg" alt="" />
          </button>
        </div>
        <div class="basket__list-price">{{ product.price }} ₽</div>
        <div class="basket__list-del">
          <img src="../assets/img/deleteIcon.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="basket__overal">
      <div class="basket__overal-count">
        Всего пицц: <span>{{ useStore.totalCount }} шт.</span>
      </div>
      <div class="basket__overal-price">
        Сумма заказа: <span>{{ useStore.totalSumm }}₽</span>
      </div>
    </div>
    <div class="basket__btns">
      <router-link to="/" class="basket__btns-back"
        >Вернуться назад</router-link
      >
      <router-link to="/" class="basket__btns-pay">Оплатить сейчас</router-link>
    </div>
  </section>
</template>

<script setup>
import { useAllStore } from "@/stores/index";
const useStore = useAllStore();

function Counter(val, idx) {
  if (val == "+") {
    useStore.ProductList[idx].amount++;
  } else if (val == "-") {
    useStore.ProductList[idx].amount--;
  }
}
</script>

<style lang="scss">
.basket {
  max-width: 821px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 90px 0;
  &__top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    h3 {
      color: #000;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.32px;
    }
    button {
      color: #b6b6b6;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      background: transparent;
      border: none;
      outline: none;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px 0;
      border-bottom: 1px solid #f4f4f4;
      &:last-of-type {
        border-bottom: none;
      }
    }
    &-info {
      display: flex;
      align-items: center;
      gap: 15px;
      img {
        width: 80px;
        height: 80px;
      }
    }
    &-text {
      display: flex;
      flex-direction: column;
      gap: 3px;
      h3 {
        color: #000;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.22px;
      }
      span {
        color: #8d8d8d;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.18px;
      }
    }
    &-price {
      color: #000;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.22px;
    }
    &-count {
      display: flex;
      gap: 12px;
      align-items: center;
      button {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
      }
      span {
        color: #000;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.22px;
      }
    }
  }
  &__title {
    display: flex;
    align-items: center;
  }
  &__overal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-count {
      color: #000;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.22px;
      span {
        font-weight: 700;
      }
    }
    &-price {
      color: #000;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.22px;
      span {
        color: #fe5f1e;
        font-weight: 700;
      }
    }
  }
  &__btns {
    display: flex;
    justify-content: space-between;
    a {
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border-radius: 30px;
      padding: 18px 40px 16px 40px;

      &:nth-child(1) {
        color: #cacaca;
        border: 1px solid #d3d3d3;
        background: #fff;
      }
      &:nth-child(2) {
        color: #fff;
        background: #fe5f1e;
      }
    }
  }
  &__clear {
    button {
      cursor: pointer;
    }
  }
}
</style>
