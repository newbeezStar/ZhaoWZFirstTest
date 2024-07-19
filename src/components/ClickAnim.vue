<template>
  <div ref="starsContainer" class="stars-container">
    <!-- 动态生成的星星将在这里显示 -->
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

const starsContainer = ref(null);

onMounted(() => {
  window.addEventListener('click', handleStarClick);
});

const handleStarClick = (event) => {
  nextTick(() => {
    createStar(event.pageX, event.pageY);
  });
};

const createStar = (x, y) => {
  const star = document.createElement('div');
  star.className = 'animated-star';
  star.style.top = `${y}px`;
  star.style.left = `${x}px`;

  // 添加到容器
  starsContainer.value?.appendChild(star);

  // 几秒后移除星星
  setTimeout(() => {
    star.remove();
  }, 3000); // 3秒后消失
};
</script>

<style scoped>
.stars-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.animated-star {
  width: 20px;
  height: 20px;
  background-color: gold;
  border-radius: 50%;
  position: absolute;
  animation: twinkle 1s infinite;
}

@keyframes twinkle {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>