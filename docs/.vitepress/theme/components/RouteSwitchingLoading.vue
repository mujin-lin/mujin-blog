<template>
  <!-- Transition 控制整个遮罩的进入/离开 -->
  <Transition name="fade" mode="out-in">
    <div v-show="isTransitioning" class="transition-mask">
      <div class="loader">
        <div class="spinner"><!--     </div>-->
          <svg t="1758809520125" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="86916" width="200" height="200">
            <path
                d="M512.426 1023.15c278.507 0 505.024-222.592 511.424-499.563-5.91 241.685-189.675 435.605-415.51 435.606-229.547 0-415.659-200.427-415.659-447.616 0-52.971-42.944-95.936-95.915-95.936-52.95 0-95.915 42.965-95.915 95.936-0.003 282.539 229.035 511.573 511.574 511.573ZM512.427 0c-278.507 0-505.024 222.592-511.403 499.563 5.888-241.664 189.653-435.627 415.488-435.627 229.547 0 415.659 200.448 415.659 447.637 0 52.95 42.965 95.915 95.936 95.915 52.928 0 95.894-42.944 95.893-95.915 0-282.539-229.035-511.573-511.573-511.573Z"
                fill="#ea22eb" p-id="86917"></path>
          </svg>
        </div>
        <p>&emsp;Loading...</p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import {onBeforeMount, onMounted, ref} from "vue";
import {useRouter} from "vitepress";

const router = useRouter();
const isTransitioning = ref(false);
let transitionStart = 0;

// 保存 VitePress 内部默认的路由钩子
const originalBeforeRouteChange = router.onBeforeRouteChange;
const originalAfterRouteChange = router.onAfterRouteChange;

// 路由开始切换时
const handleRouteStart = () => {
  transitionStart = Date.now();
  isTransitioning.value = true;
};

// 路由完成切换时
const handleRouteComplete = () => {
  const elapsed = Date.now() - transitionStart;
  // // 确保动画至少显示 600ms，提升视觉体验
  const delay = Math.max(0, 200 - elapsed);
  setTimeout(() => {
    isTransitioning.value = false;
  }, delay);
};

// 重写路由切换前的钩子
router.onBeforeRouteChange = to => {
  originalBeforeRouteChange && originalBeforeRouteChange(to);
  handleRouteStart();
};

// 重写路由切换后的钩子
router.onAfterRouteChange = to => {
  originalAfterRouteChange && originalAfterRouteChange(to);
  handleRouteComplete();
};

// 首次加载时显示遮罩
onBeforeMount(handleRouteStart);
onMounted(handleRouteComplete);
</script>

<style scoped>
/* 过渡遮罩层样式，使用 scoped 避免样式污染 */
.transition-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column; /* 让加载图标和文字垂直排列 */
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9); /* 调整透明度，增强遮罩效果 */
  z-index: 9999;
}

.loader {
  text-align: center;
}

.spinner {
  width: 50px; /* 增大加载图标，更醒目 */
  height: 50px;
  margin: 0 auto 10px;
  /*border: 5px solid #f3f3f3;
  border-top: 5px solid var(--vp-c-brand-1);
  border-radius: 50%;*/
  background-size: contain;
  background-position: center center; /* 确保图片居中 */
  background-repeat: no-repeat; /* 防止图片重复   background-image: url("/svg/test.svg")*/
  .icon{
    width: 100%;
    height: 100%;
    animation: spin 1s linear infinite;
  }
}


@keyframes ping {
  0% {
    transform: scale(0.2);
    opacity: 0.8;
  }
  80% {
    transform: scale(1.2);
    opacity: 0;
  }
  100% {
    transform: scale(2.2);
    opacity: 0;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* ✅ 添加过渡类 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
