<!--滑动校验码组件-->


<script lang="ts" setup>
import { ref, watch, onMounted, reactive } from "vue";
interface VertifyType {
  spliced: boolean;
  verified: boolean; // 简单验证拖动轨迹，为零时表示Y轴上下没有波动，可能非人为操作
  left: number; // 滑块的移动位置
  destX: number; // 滑块的目标位置
}
interface IProps {
  width?: number;
  visible?: boolean;
  height?: number;
  refreshIcon?: string;
  l?: number;
  r?: number;
  imgUrl?: string;
  text?: string;
  /**
   * @description   拖拽滑块时的回调, 参数为当前滑块拖拽的距离
   * @default       (l: number):void => {}
   */
  onDraw?: (l: number) => {};
  /**
   * @description   用户的自定义验证逻辑
   * @default       (arg: VertifyType) => VertifyType
   */
  onCustomVertify?: (arg: VertifyType) => VertifyType;
  /**
   * @description   重制刷新前的回调
   * @default       ():void => {}
   */
  onBeforeRefresh?: () => void;
  /**
   * @description   验证成功回调
   * @default       ():void => {}
   */
  onSuccess?: VoidFunction;
  /**
   * @description   验证失败回调
   * @default       ():void => {}
   */
  onFail?: VoidFunction;
  /**
   * @description   刷新时回调
   * @default       ():void => {}
   */
  onRefresh?: VoidFunction;
}
// 定义默认值
const props = withDefaults(defineProps<IProps>(), {
  width: 320,
  visible: true,
  height: 160,
  refreshIcon: "http://cdn.dooring.cn/dr/icon12.png",
  l: 42,
  r: 9,
  imgUrl: "",
  text: "",
});
const sliderClass = reactive({
  color: 'red',
  fontSize: '16px',
});
const textTip = ref("请按住滑块，拖动到最右侧");
</script>

<template>
  <div className="vertifyWrap">
    <div className="canvasArea">
      <canvas ref="canvasRef"></canvas>
    </div>
    <div :className="sliderClass">
      <div className="sliderMask">
        <div className="slider">
          <div className="sliderIcon">&rarr;</div>
        </div>
      </div>
      <div className="sliderText">{{ textTip }}</div>
    </div>
    <div className="refreshIcon"></div>
    <div className="loadingContainer">
      <div className="loadingIcon"></div>
      <span>加载中...</span>
    </div>
  </div>
</template>

<style scoped>
.local-style {
  color: green;
  font-size: 18px;
}
</style>