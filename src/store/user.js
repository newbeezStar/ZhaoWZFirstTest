// user.js
import { defineStore } from 'pinia';

export const userInfo = defineStore('userInfo', {
  state: () => {
    return {
      isLogin: false,
      id: '',
      token: '',
    };
  },
  // 你可以在这里添加其他选项，如 actions, getters 等
});