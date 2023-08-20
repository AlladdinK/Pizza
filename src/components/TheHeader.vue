<template>
  <header class="header">
    <router-link to="/" class="logo">
      <img src="@/assets/img/logo.png" alt="" />
      <div>
        <h3>PIZZA MARKET</h3>
        <p>самая вкусная пицца во вселенной</p>
      </div>
    </router-link>
    <div class="basket-btn">
      <h3>{{ useStore.totalSumm }} ₽</h3>
      <router-link to="basket">
        <img src="../assets/img/basket-icon.svg" alt="" />
        <span>{{ useStore.totalCount }}</span>
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { useAllStore } from "@/stores/index";

const useStore = useAllStore();
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  padding: 40px 0px 35px 0px;
  border-bottom: 1px solid #f6f6f6;
}
.basket-btn {
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 16px 23px;
  gap: 13px;
  background: #fe5f1e;
  h3 {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-right: 13px;
    border-right: 1px solid rgba(255, 255, 255, 0.25);
  }
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    outline: none;
    background: transparent;
    border: none;
    cursor: pointer;
    span {
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
}
</style>
