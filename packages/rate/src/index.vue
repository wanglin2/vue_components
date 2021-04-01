<template>
  <div class="rateContainer">
    <div
      class="star"
      :class="{ pointer: !disabled }"
      v-for="item in max"
      :key="item"
      @mouseenter="mouseenter(item)"
      @mouseleave="mouseleave(item)"
      @click="click(item)"
    >
      <img
        :src="
          (hoverRate === -1 && value >= item) ||
          (hoverRate !== -1 && hoverRate >= item)
            ? starActoveImg
            : starImg
        "
        alt=""
      />
    </div>
  </div>
</template>

<script>
const starImg = require('../assets/star.png')
const starActoveImg = require('../assets/starActive.png')

/**
 * @Author: 王林25
 * @Date: 2020-11-16 15:41:43
 * @Desc: 分数组件
 */
export default {
  name: 'Rate',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    // 双向绑定的分值
    value: {
      type: Number,
    },

    // 最大分值
    max: {
      type: Number,
      default: 5,
    },

    // 是否为只读
    disabled: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      starImg,
      starActoveImg,
      hoverRate: -1,
    }
  },
  methods: {
    /**
     * @Author: 王林25
     * @Date: 2020-11-16 15:33:17
     * @Desc: 鼠标移上事件
     */
    mouseenter(index) {
      if (this.disabled) {
        return
      }
      this.hoverRate = index
      this.$emit('hover', index)
    },

    /**
     * @Author: 王林25
     * @Date: 2020-11-16 15:33:45
     * @Desc: 鼠标移走事件
     */
    mouseleave(index) {
      if (this.disabled) {
        return
      }
      this.hoverRate = -1
    },

    /**
     * @Author: 王林25
     * @Date: 2020-11-16 15:40:36
     * @Desc: 点击
     */
    click(index) {
      if (this.disabled) {
        return
      }
      this.hoverRate = -1
      this.$emit('change', index)
    },
  },
}
</script>

<style lang="less" scoped>
.rateContainer {
  display: flex;

  .star {
    padding-right: 8px;

    &.pointer {
      cursor: pointer;
    }

    &:last-of-type {
      padding-right: 0;
    }
  }
}
</style>
