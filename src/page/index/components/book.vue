<template>
  <div id="book">
    <div @click="page_last">上一个</div>
    <div @click="page_next">下一个</div>
    <div
      class="page page1"
      :class="[page_act == item.page ?
      page_turn : '']"
      v-for="(item, index) in list"
      :key="index"
      :style=item.style
      :id="[page_act == item.page + 1 ? 'page_left' : '']"
      v-if="item.page > page_act - 2"
    >
      {{item.page}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: {},
  data () {
    return {
      page_act: 1,
      list: [
        {
          id: 1,
          page: 1,
          style: 'background: red;z-index: 6;'
        },
        {
          id: 2,
          page: 2,
          style: 'background: green;z-index: 5;'
        },
        {
          id: 3,
          page: 3,
          style: 'background: blue;z-index: 4;'
        },
        {
          id: 4,
          page: 4,
          style: 'background: red;z-index: 3;'
        },
        {
          id: 5,
          page: 5,
          style: 'background: green;z-index: 2;'
        },
        {
          id: 6,
          page: 6,
          style: 'background: blue;z-index: 1;'
        }
      ],
      page_turn: 'page_next'
    }
  },
  // 事件
  methods: {
    page_next () {
      let page = this.page_act * 1
      let list = this.list
      // console.log(list.length)
      // console.log(page)
      // console.log(list.length - 1)
      if (page < list.length - 1) {
        this.page_act += 1
        // console.log(page + '是')
        this.page_turn = 'page_next'
      } else {
        this.page_act = 1
        // console.log(page + '否')
      }
      // console.log(this.page_act)
    },
    page_last () {
      let page = this.page_act * 1
      // let list = this.list
      // console.log(list.length)
      // console.log(page)
      // console.log(list.length - 1)
      if (page > 1) {
        this.page_act -= 1
        // console.log(page + '是')
        this.page_turn = 'page_last'
      } else {
        // this.page_act = 1
        // console.log(page + '否')
      }
      // console.log(this.page_act)
    }
  },
  // 计算属性
  computed: {},
  // 生命周期函数实例挂载完成执行
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.page_next
  animation page_next 3s linear 1 forwards
.page_last
  animation page_last 3s linear 1 forwards
#page_left
  transform rotateY(-180deg)
  transform-origin 0% 50%
  z-index 0 !important
#book
  height 455px
  background-size 100%
  position relative
  perspective 600px
  font-family "microsoft yahei"
  transform-style preserve-3d
  .page
    width 100px
    height 100px
    position absolute
    top 100px
    left 180px
@keyframes page_next {
  0% {
    transform rotateY(0deg)
    transform-origin 0% 50%
  }
  100% {
    transform rotateY(-180deg)
    transform-origin 0% 50%
  }
}
@keyframes page_last {
  0% {
    transform rotateY(-180deg)
    transform-origin 0% 50%
  }
  100% {
    transform rotateY(0deg)
    transform-origin 0% 50%
  }
}
// 执行动画
// animation move 5s linear infinite
</style>
