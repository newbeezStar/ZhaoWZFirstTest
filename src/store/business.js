// business.js
import { defineStore } from "pinia";

export const busiInfo = defineStore("busiInfo", {
  state: () => {
    return {
      apiUrl: '',
    };
  },
});
