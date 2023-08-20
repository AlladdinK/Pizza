import { defineStore } from "pinia";
import axios from "axios";
import Products from "../products";
export const useAllStore = defineStore("counter", {
  state: () => {
    return {
      navList: [
        { title: "Все", isActive: true },
        { title: "Мясные", isActive: false },
        { title: "Вегетарианская", isActive: false },
        { title: "Гриль", isActive: false },
        { title: "Острые", isActive: false },
        { title: "Закрытые", isActive: false },
      ],
      sorterList: [
        { title: "по популярности", isActive: true },
        { title: "по цене", isActive: false },
        { title: "по алфавиту", isActive: false },
      ],
      ProductList: [],
      BasketList: [],
      totalSumm: 0,
      totalCount: 0,
    };
  },

  actions: {
    async getApi() {
      try {
        const response = await axios.get(
          "https://64de99a3825d19d9bfb2bcac.mockapi.io/vue-pizza"
        );

        let data = response.data;
        data.forEach((el) => {
          this.ProductList.push(
            new Products(
              el.id,
              el.imageUrl,
              el.title,
              el.types,
              el.sizes,
              el.price,
              el.category,
              el.rating,
              0
            )
          );
          this.ProductList.sort((a, b) => a.rating - b.rating);
          // el.types.forEach((elem) => {
          //   elem.isActive = false;
          // });
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
});
