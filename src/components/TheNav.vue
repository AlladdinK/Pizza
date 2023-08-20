<template>
  <nav class="nav">
    <ul class="nav__list">
      <li
        class="nav__link"
        :class="{ active: item.isActive }"
        v-for="item in navList"
        :key="item.idx"
        @click="activeLink(item)"
      >
        {{ item.title }}
      </li>
    </ul>
    <TheSort />
  </nav>
</template>

<script setup>
import { useAllStore } from "@/stores/index";
const useStore = useAllStore();
import TheSort from "./TheSort.vue";
let navList = useStore.navList;

function activeLink(item) {
  navList.forEach((el) => {
    el.isActive = false;
  });
  item.isActive = !item.isActive;
}
</script>

<style lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  padding: 40px 0px;
  &__list {
    display: flex;
    gap: 9px;
    align-items: center;
  }
  &__link {
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.24px;
    padding: 15px 25px;
    background: #f9f9f9;
    border-radius: 30px;
    color: #2c2c2c;
    cursor: pointer;
    &.active {
      background: #282828;
      color: #ffffff;
    }
  }
}
</style>
