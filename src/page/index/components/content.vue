<template>
  <div id="content">
    <div v-for="(item, index) in list" :key="index" class="router_list">
      <router-link class="router" :to=item.to>{{item.text}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      list: [
        {
          to: '/photo3d',
          text: '3D相册'
        },
        {
          to: '/photo3d',
          text: '3D相册'
        },
        {
          to: '/photo3d',
          text: '3D相册'
        },
        {
          to: '/photo3d',
          text: '3D相册'
        },
        {
          to: '/photo3d',
          text: '3D相册'
        }
      ]
    }
  },
  // 事件
  methods: {},
  // 计算属性
  computed: {},
  // 生命周期函数实例挂载完成执行
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#content
  display flex
  flex-wrap wrap
  justify-content space-around
  align-items center
  .router_list
    background #000
    width 100px
    height 100px
    box-sizing border-box
    margin-top 36px
    .router
      display block
      width 100%
      height 100%
      display flex
      flex-wrap wrap
      justify-content space-around
      align-items center
</style>
