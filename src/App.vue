<script setup>
import { onMounted } from "vue";
import { useAllStore } from "@/stores/index";
import TheHeader from "./components/TheHeader.vue";
const useStore = useAllStore();
onMounted(() => {
  if (!localStorage.BasketList)
    localStorage.setItem("BasketList", JSON.stringify([]));
  else {
    useStore.BasketList = JSON.parse(localStorage.BasketList);
  }
});
</script>

<template>
  <div class="page">
    <div class="page__content container">
      <TheHeader />
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  margin: 53px 50px;
  &__content {
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.03);
    padding: 39px 53px 106px 53px;
  }
}
</style>
