<template>
  <div class="sorter">
    <img
      class="sorter__icon"
      src="../assets/img/arrow.svg"
      :class="{ active: blockActive }"
      alt=""
    />
    <h3>Сортировка по:</h3>
    <div class="sorter__btn">
      <span @click="blockActive = !blockActive">{{
        currentText.length == 0 ? "популярности" : currentText
      }}</span>
      <ul class="sorter__list" :class="{ active: blockActive }">
        <li
          :class="{ active: item.isActive }"
          v-for="item in sorterList"
          :key="item.idx"
          @click="currentSort(item)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useAllStore } from "@/stores/index";
import { ref, onMounted } from "vue";
const useStore = useAllStore();
let sorterList = useStore.sorterList;
let currentText = ref("");
let blockActive = ref(false);
function openSort() {
  blockActive = true;
}
function currentSort(item) {
  sorterList.forEach((el) => {
    el.isActive = false;
  });
  item.isActive = true;
  currentText = item.title;
  blockActive = ref(false);
  console.log(item.title);
  if (item.title == "по популярности") {
    sortByRating(useStore.ProductList);
  } else if (item.title == "по цене") {
    sortByPrice(useStore.ProductList);
  } else if (item.title == "по алфавиту") {
    sortByAlphabet(useStore.ProductList);
  }
}
function sortByRating(arr) {
  arr.sort((a, b) => a.rating - b.rating);
}
function sortByPrice(arr) {
  arr.sort((a, b) => a.price - b.price);
}
function sortByAlphabet(arr) {
  arr.sort((a, b) => a.title.localeCompare(b.title));
}
</script>

<style lang="scss">
.sorter {
  display: flex;
  align-items: center;
  gap: 7px;
  &__icon {
    transition: 0.5s;
    &.active {
      transform: rotate(180deg);
    }
  }
  h3 {
    color: #2c2c2c;
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.21px;
  }
  &__btn {
    position: relative;
    span {
      color: #fe5f1e;
      font-size: 14px;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.21px;
      border-bottom: 1px dashed #fe5f1e;
      cursor: pointer;
    }
  }
  &__list {
    position: absolute;
    right: 0;
    bottom: -10px;
    transform: translateY(130%);
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.09);
    padding: 13px 0;
    min-width: 142px;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
    &.active {
      transform: translateY(100%);
      visibility: visible;
      opacity: 1;
    }
    li {
      padding: 10px 14px;
      cursor: pointer;
      white-space: nowrap;
      &.active {
        color: #fe5f1e;
        font-weight: 700;
      }
    }
  }
}
</style>
