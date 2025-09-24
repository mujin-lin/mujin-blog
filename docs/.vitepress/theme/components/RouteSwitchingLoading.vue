<template>
  <!-- Transition 控制整个遮罩的进入/离开 -->
  <Transition name="fade" mode="out-in">
    <div v-show="isTransitioning" class="transition-mask">
      <div class="loader">
<!--        <div class="spinner"></div>-->
<!--        <svg class="icon" width="48px" height="48px" viewBox="0 0 38 38" style="color: rgb(33, 150, 243);">-->
<!--          <defs>-->
<!--            <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">-->
<!--              <stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop>-->
<!--              <stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"></stop>-->
<!--              <stop stop-color="currentColor" offset="100%"></stop>-->
<!--            </linearGradient>-->
<!--          </defs>-->
<!--          <g transform="translate(1 1)" fill="none" fill-rule="evenodd">-->
<!--            <path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2">-->
<!--              <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s"-->
<!--                                repeatCount="indefinite"></animateTransform>-->
<!--            </path>-->
<!--            <circle fill="currentColor" cx="36" cy="18" r="1">-->
<!--              <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s"-->
<!--                                repeatCount="indefinite"></animateTransform>-->
<!--            </circle>-->
<!--          </g>-->
<!--        </svg>-->
<!--        <svg class="el-spin el-spin&#45;&#45;#fa07ff" width="48px" height="48px" viewBox="0 0 135 140" fill="currentColor"-->
<!--             preserveAspectRatio="xMidYMid" style="color: rgb(250, 7, 255);">-->
<!--          <rect y="10" width="15" height="120" rx="6">-->
<!--            <animate attributeName="height" begin="0.05s" dur="0.5s" values="120;110;100;90;80;70;60;50;40;140;120"-->
<!--                     calcMode="linear" repeatCount="indefinite"></animate>-->
<!--            <animate attributeName="y" begin="0.05s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"-->
<!--                     repeatCount="indefinite"></animate>-->
<!--          </rect>-->
<!--          <rect x="30" y="10" width="15" height="120" rx="6">-->
<!--            <animate attributeName="height" begin="0.1s" dur="0.5s" values="120;110;100;90;80;70;60;50;40;140;120"-->
<!--                     calcMode="linear" repeatCount="indefinite"></animate>-->
<!--            <animate attributeName="y" begin="0.1s" dur="0.5s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"-->
<!--                     repeatCount="indefinite"></animate>-->
<!--          </rect>-->
<!--          <rect x="60" width="15" height="140" rx="6">-->
<!--            <animate attributeName="height" begin="0s" dur="0.5s" values="120;110;100;90;80;70;60;50;40;140;120"-->
<!--                     calcMode="linear" repeatCount="indefinite"></animate>-->
<!--            <animate attributeName="y" begin="0s" dur="0.5s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"-->
<!--                     repeatCount="indefinite"></animate>-->
<!--          </rect>-->
<!--          <rect x="90" y="10" width="15" height="120" rx="6">-->
<!--            <animate attributeName="height" begin="0.1s" dur="0.5s" values="120;110;100;90;80;70;60;50;40;140;120"-->
<!--                     calcMode="linear" repeatCount="indefinite"></animate>-->
<!--            <animate attributeName="y" begin="0.1s" dur="0.5s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"-->
<!--                     repeatCount="indefinite"></animate>-->
<!--          </rect>-->
<!--          <rect x="120" y="10" width="15" height="120" rx="6">-->
<!--            <animate attributeName="height" begin="0.2s" dur="0.5s" values="120;110;100;90;80;70;60;50;40;140;120"-->
<!--                     calcMode="linear" repeatCount="indefinite"></animate>-->
<!--            <animate attributeName="y" begin="0.2s" dur="0.5s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"-->
<!--                     repeatCount="indefinite"></animate>-->
<!--          </rect>-->
<!--        </svg>-->
<!--        <svg class="spinneraa" width="48px" height="48px" viewBox="0 0 135 140" fill="currentColor"-->
<!--             preserveAspectRatio="xMidYMid" style="color: rgb(250, 7, 255);">-->
<!--          <rect y="10" width="15" height="120" rx="6">-->
<!--            <animate attributeName="height" begin="0.1s" dur="0.5s" values="120;110;100;90;80;70;60;50;40;140;120"-->
<!--                     calcMode="linear" repeatCount="indefinite"></animate>-->
<!--            <animate attributeName="y" begin="0.1s" dur="0.5s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"-->
<!--                     repeatCount="indefinite"></animate>-->
<!--          </rect>-->
<!--          <rect x="30" y="10" width="15" height="120" rx="6">-->
<!--            <animate attributeName="height" begin="0.05s" dur="0.5s" values="120;110;100;90;80;70;60;50;40;140;120"-->
<!--                     calcMode="linear" repeatCount="indefinite"></animate>-->
<!--            <animate attributeName="y" begin="0.05s" dur="0.5s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"-->
<!--                     repeatCount="indefinite"></animate>-->
<!--          </rect>-->
<!--          <rect x="60" width="15" height="140" rx="6">-->
<!--            <animate attributeName="height" begin="0s" dur="0.5s" values="120;110;100;90;80;70;60;50;40;140;120"-->
<!--                     calcMode="linear" repeatCount="indefinite"></animate>-->
<!--            <animate attributeName="y" begin="0s" dur="0.5s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"-->
<!--                     repeatCount="indefinite"></animate>-->
<!--          </rect>-->
<!--          <rect x="90" y="10" width="15" height="120" rx="6">-->
<!--            <animate attributeName="height" begin="0.05s" dur="0.5s" values="120;110;100;90;80;70;60;50;40;140;120"-->
<!--                     calcMode="linear" repeatCount="indefinite"></animate>-->
<!--            <animate attributeName="y" begin="0.05s" dur="0.5s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"-->
<!--                     repeatCount="indefinite"></animate>-->
<!--          </rect>-->
<!--          <rect x="120" y="10" width="15" height="120" rx="6">-->
<!--            <animate attributeName="height" begin="0.1s" dur="0.5s" values="120;110;100;90;80;70;60;50;40;140;120"-->
<!--                     calcMode="linear" repeatCount="indefinite"></animate>-->
<!--            <animate attributeName="y" begin="0.1s" dur="0.5s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"-->
<!--                     repeatCount="indefinite"></animate>-->
<!--          </rect>-->

          <svg class="loading" width="48px" height="48px" viewBox="0 0 100 100"
               preserveAspectRatio="xMidYMid" style="color: rgb(250, 7, 255);">
            <g transform="translate(-20,-20)">
              <path
                  d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z"
                  fill="currentColor">
                <animateTransform attributeName="transform" type="rotate" from="90 50 50" to="0 50 50" dur="0.5s"
                                  repeatCount="indefinite"></animateTransform>
              </path>
            </g>
            <g transform="translate(20,20) rotate(15 50 50)">
              <path
                  d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z"
                  fill="currentColor">
                <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="0.5s"
                                  repeatCount="indefinite"></animateTransform>
              </path>
            </g>
          </svg>
          <p>Loading...</p>
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
  const delay = Math.max(0, 600 - elapsed);
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
  margin: 0 auto 12px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid var(--vp-c-brand-1);
  border-radius: 50%;
  animation: spin 1s linear infinite;
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
