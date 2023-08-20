<template>
  <div class="products container" v-if="useStore.ProductList">
    <div
      class="products__item"
      v-for="(product, idx) in useStore.ProductList"
      :key="product.idx"
    >
      <div class="products__img">
        <img :src="product.img" alt="" />
      </div>
      <h3>{{ product.title }}</h3>
      <div class="products__info">
        <div class="products__types">
          <button
            type="button"
            @click="checkType(i, idx)"
            :class="{ active: types.isActive }"
            v-for="(types, i) in product.types"
            :key="types.idx"
          >
            {{ types.el == 0 ? "тонкое" : "традиционное" }}
          </button>
        </div>
        <div class="products__sizes">
          <button
            @click="checkSizes(index, idx)"
            :class="{ active: sizes.isActive }"
            type="button"
            v-for="(sizes, index) in product.sizes"
            :key="sizes.idx"
          >
            {{ sizes.el }} см
          </button>
        </div>
      </div>
      <div class="products__price">
        <span>от {{ product.price }} ₽</span>
        <button
          type="button"
          class="products__addBasket"
          @click="addToBasket(idx, product.id)"
        >
          <img src="../assets/img/add-icon.svg" alt="" /> Добавить
          <span class="products__addBasket-count" v-if="product.amount">{{
            product.amount
          }}</span>
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>Загрузка...</h2>
  </div>
</template>

<script setup>
import { useAllStore } from "@/stores/index";

const useStore = useAllStore();
useStore.getApi();

function checkType(i, idx) {
  useStore.ProductList[idx].types.forEach((el) => {
    el.isActive = false;
  });
  useStore.ProductList[idx].types[i].isActive = true;
}
function checkSizes(index, idx) {
  let parent = useStore.ProductList[idx];
  let def = parent.price;
  parent.sizes.forEach((el) => {
    el.isActive = false;
  });
  parent.sizes[index].isActive = true;
  if (parent.sizes[index].el == 26 && parent.sizes[index].isActive) {
    parent.price = parent.defPrice;
    parent.price = Math.floor(parent.price);
  } else if (parent.sizes[index].el == 30 && parent.sizes[index].isActive) {
    parent.price = parent.defPrice;
    parent.price = Math.floor(parent.price + parent.price * 0.1);
  } else if (parent.sizes[index].el == 40 && parent.sizes[index].isActive) {
    parent.price = parent.defPrice;

    parent.price = Math.floor(parent.price + parent.price * 0.2);
  }
  TotalBasketSumm();
  TotalBasketCount();
}
function addToBasket(idx) {
  let {
    id,
    img,
    title,
    type,
    size,
    defPrice,
    price,
    category,
    rating,
    amount,
  } = {
    ...useStore.ProductList[idx],
  };
  useStore.ProductList[idx].amount++;
  useStore.BasketList = [];
  useStore.ProductList.forEach((el) => {
    if (el.amount) {
      useStore.BasketList.push(el);
    }
  });
  TotalBasketSumm();
  TotalBasketCount();
}

function TotalBasketSumm() {
  useStore.totalSumm = 0;
  useStore.ProductList.forEach((el) => {
    if (el.amount) {
      let total = el.price * el.amount;
      useStore.totalSumm += total;
    }
  });
}
function TotalBasketCount() {
  useStore.totalCount = 0;
  useStore.ProductList.forEach((el) => {
    if (el.amount) {
      useStore.totalCount += el.amount;
    }
  });
}
</script>

<style lang="scss">
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
  &__img {
    img {
      width: 100%;
      max-width: 260px;
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > h3 {
      color: #000;
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      letter-spacing: 0.2px;
      margin-bottom: 16px;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    padding: 7px 5px;
    background: #f3f3f3;
    gap: 7px;
    width: 100%;
    button {
      color: #2c2c2c;
      text-align: center;
      font-size: 14px;
      padding: 10px 0;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.21px;
      background: transparent;
      border: none;
      outline: none;
      transition: 0.3s;
      cursor: pointer;
      &.active {
        border-radius: 5px;
        background: #fff;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
      }
    }
  }
  &__types {
    display: flex;
    button {
      flex: 1;
    }
  }
  &__sizes {
    display: flex;
    button {
      flex: 1;
    }
  }
  &__price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 17px;
    & > span {
      color: #000;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.33px;
      white-space: nowrap;
    }
  }
  &__addBasket {
    display: flex;
    align-items: center;
    padding: 11px 17px;
    border-radius: 30px;
    gap: 8px;
    border: 1px solid #eb5a1e;
    background: #fff;
    color: #eb5a1e;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    &-count {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: #eb5a1e;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
}
</style>
